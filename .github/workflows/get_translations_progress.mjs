const LABEL = 'get_translations_progress.mjs';
console.time(LABEL);

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile, readFile } from 'node:fs/promises';

// eslint-disable-next-line node/no-unpublished-import
import { default as Crowdin } from '@crowdin/crowdin-api-client';
// eslint-disable-next-line node/no-unpublished-import
import { parse, stringify } from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const languagesCodeMapping = {
  'zh-CN': 'zh-cn',
  'zh-TW': 'zh-tw',
  'pt-BR': 'pt-br'
};

const convertLanguageCode = (languageId, twoLettersCode) => {
  let code = '';
  if (languageId in languagesCodeMapping) {
    code = languagesCodeMapping[languageId];
  } else {
    code = twoLettersCode;
  }
  return code;
};

const writeToLanguageData = (
  languageProgress = {},
  languagesYml = join(__dirname, '../../', 'source/_data/languages.yml')
) => {
  return readFile(languagesYml, 'utf8').then(content => {
    const langData = parse(content);
    for (const code of Object.keys(langData)) {
      if (code === 'en') {
        continue;
      }
      if (code in languageProgress) {
        langData[code].translationProgress
          = languageProgress[code].translationProgress;
      }
    }
    return writeFile(languagesYml, stringify(langData)).then(() => {
      console.timeLog(LABEL, 'write language progress to: ' + languagesYml);
    });
  });
};

const getLanguageProgress = async () => {
  const crowdinToken = process.env.CROWDIN_PERSONAL_TOKEN || '';
  const projectId = process.env.CROWDIN_PROJECT_ID || 646964 || '';
  const credentials = {
    token: crowdinToken
  };
  // eslint-disable-next-line new-cap
  const { translationStatusApi } = new Crowdin.default(credentials);
  console.timeLog(LABEL, 'initialization of crowdin client');

  const progressResponse = await translationStatusApi.getProjectProgress(
    projectId,
    { limit: 25 }
  );
  console.timeLog(LABEL, 'get crowdin project translation progress');

  const languageProgress = progressResponse.data.reduce((acc = {}, item) => {
    const { data } = item;
    const { languageId, translationProgress, approvalProgress } = data;
    const { twoLettersCode } = data.language;

    const languageCode = convertLanguageCode(languageId, twoLettersCode);
    acc[languageCode] = { translationProgress, approvalProgress };

    return acc;
  }, {});

  return languageProgress;
};

const main = () => {
  return getLanguageProgress().then(languageProgress => {
    console.table(languageProgress);
    return writeToLanguageData(languageProgress);
  });
};

main().finally(() => {
  console.timeEnd(LABEL);
});
