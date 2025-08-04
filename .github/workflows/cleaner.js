'use strict';

// eslint-disable-next-line node/no-extraneous-require
const yaml = require('js-yaml');
const fs = require('fs');
const { join, basename } = require('path');

function load(type) {
  const base = `source/_data/${type}`;
  const items = fs.readdirSync(base);
  return items.map(item => {
    const file = `${base}/${item}`;
    const content = yaml.load(fs.readFileSync(file));
    return {
      file,
      content
    };
  });
}

// Set your GitHub Personal Access Token
const headers = {
  Authorization: 'Bearer ' + process.env.GITHUB_TOKEN
};

// Define the GraphQL query template
const queryTemplate = `
query {
  {repos}
}
`;

// Function to get a sanitized key supported by GraphQL
function getKey(owner, repo) {
  return (owner + repo).replace(/[^a-zA-Z0-9]/g, '').replace(/^\d+/, '');
}

// Function to build a query string for a repository
function buildRepoQuery(owner, repo) {
  return `
    ${getKey(owner, repo)}: repository(owner: "${owner}", name: "${repo}") {
      name
      stargazers {
        totalCount
      }
      owner {
        login
      }
      url
      isArchived
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 1) {
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
    `;
}

// Function to read GitHub repositories list and make the GraphQL query
async function queryRepos(reposList, batchSize = 100, maxRetries = 3, retryDelay = 1000) {
  let result = {};

  for (let i = 0; i < reposList.length; i += batchSize) {
    // Construct the query for a batch of repositories
    const reposQuery = reposList.slice(i, i + batchSize).map(({ owner, repo }) => buildRepoQuery(owner, repo)).join(' ');
    const query = queryTemplate.replace('{repos}', reposQuery);
    let retries = 0;
    let success = false;
    let responseData = null;

    while (retries < maxRetries && !success) {
      try {
        // Send the GraphQL query
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': headers.Authorization
          },
          body: JSON.stringify({ query: query })
        });

        if (response.ok) {
          responseData = await response.json();
          const { data, errors } = responseData;

          if (data) {
            result = { ...result, ...data };
            success = true;
          }
        }

        if (!success) {
          throw new Error(`Query attempt ${retries + 1} failed with status code ${response.status}: ${response.statusText}`);
        }
      } catch (fetchError) {
        console.error(`Fetch error on attempt ${retries + 1}:`, fetchError);
        retries++;
        if (retries < maxRetries) {
          const delay = retryDelay * Math.pow(2, retries - 1);
          console.log(`Retrying in ${delay/1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error(`Failed to query batch after ${maxRetries} attempts. Abort.`);
          process.exit(1);
        }
      }
    }
  }
  return result;
}

async function validate(type) {
  const list = load(type);
  const repos = [];
  list.forEach(({ file, content }) => {
    const { link } = content;
    if (!link.startsWith('https://github.com/')) {
      console.log('Skip', link);
    } else {
      // Extract owner and repo from github url
      const parts = link.split('/');
      repos.push({
        owner: parts[3],
        repo: parts[4].replace(/\.git$/, '')
      });
    }
  });
  const result = await queryRepos(repos);
  list.forEach(({ file, content }) => {
    const { link } = content;
    if (!link.startsWith('https://github.com/')) {
      console.log('Skip', link);
    } else {
      // Extract owner and repo from github url
      const parts = link.split('/');
      const owner = parts[3];
      const repo = parts[4].replace(/\.git$/, '');
      const repoKey = getKey(owner, repo);
      if (result[repoKey]) {
        const entry = result[repoKey];
        const stars = entry.stargazers.totalCount;
        const isArchived = entry.isArchived;
        const lastCommitDate = entry.defaultBranchRef.target.history.edges[0].node.committedDate;
        console.log(`Repo: ${owner}/${repo}, Stars: ${stars}, Archived: ${isArchived}, Last Commit Date: ${lastCommitDate}`);
        const newOwner = entry.owner.login;
        const newRepo = entry.name;
        if (owner !== newOwner || repo !== newRepo) {
          console.log(`Repo: ${owner}/${repo} has been renamed to ${newOwner}/${newRepo}`);
          content.link = `https://github.com/${newOwner}/${newRepo}`;
          fs.writeFileSync(file, yaml.dump(content));
        }
      } else {
        console.log(`Repo: ${owner}/${repo} does not exist or is private.`);
        console.log(`Remove: ${file}`);
        fs.unlinkSync(file);
        if (type === 'themes') {
          const screenshotsPath = 'source/themes/screenshots';
          const screenshot = join(screenshotsPath, basename(file).replace('yml', 'png'));
          console.log(`Remove: ${screenshot}`);
          fs.unlinkSync(screenshot);
        }
      }
    }
  });
}

validate('themes');
validate('plugins');
