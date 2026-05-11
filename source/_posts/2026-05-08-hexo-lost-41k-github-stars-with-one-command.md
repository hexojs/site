---
title: Hexo Lost 41k GitHub Stars with One Command
date: 2026/05/08 12:00
---

On May 8, 2026, an owner of the [hexojs][hexojs] organization accidentally changed the **visibility** of the [hexojs/hexo][hexorepo] repository from public to **private** while using [GitHub CLI][githubcli].

Because of this mistake, the [hexojs/hexo][hexorepo] repository in GitHub lost around 41k stars that had been collected over nearly 14 years. The repository also lost around 5k forks and 800 watchers.

The repository was changed back to public about 3 hours later, but the stars, forks, and watchers won't be restored.

{% asset_img star-history.webp %}

## About Hexo

[Hexo][hexoio] is a static site generator written in JavaScript / TypeScript. It runs on Node.js.
[@tommy351][tommy351] started the first commit in 2012 and released the first version in the same year.
By [April 2026][archive], the main repository [hexojs/hexo][hexorepo] had gained around:

- 41k stars
- 5k forks
- 800 watchers

[Hexo][hexoio] is loved by many people around the world. Many users use [Hexo][hexoio] to build their own blogs and websites. Over the years, many contributors helped improve [Hexo][hexoio] and build its community.

## What happened

On May 8, 2026, one owner of the [hexojs][hexojs] organization was programming on his personal computer. He was doing local development inside a clone of the [hexojs/hexo][hexorepo] repository. At the same time, he was also using one of his own personal repositories for testing. After finishing his work, he wanted to temporarily hide his personal repository. He used the interactive `gh repo edit` command from [GitHub CLI][githubcli] to change his own personal repository's visibility to private.

This is where the problem happened.

He switching between multiple shell windows, he forgot to carefully confirm the current working directory before running the dangerous command.

{% asset_img github-cli-repo-edit.webp %}

As a result, he accidentally ran the [GitHub CLI][githubcli] command inside the local directory of [hexojs/hexo][hexorepo]. The visibility of [hexojs/hexo][hexorepo] was changed from public to **private** unexpectedly.

**At that moment, around 41k stars, 5k forks and 800 watchers disappeared.**

About three hours later, he noticed something unusual on the GitHub website. There was a lock icon trailing to the [hexojs/hexo][hexorepo] repository name, and it was obviously not the HTTPS lock icon. At first, he thought that another member might have changed the repository to private, either for some reason or by accident. So he checked the audit log and realized that the person was himself.

{% asset_img hexojs-audit-log.webp %}

However, after changing the repository back to **public**, it did not restore the lost stars, forks, or watchers.

## Impact

### For Hexo users

For users who build websites with [Hexo][hexoio], this should not cause any significant problems. Your website build process should continue to work normally. Most users install Hexo packages from [npmjs][hexopkg], so the package distribution itself was not affected.

### For people sho starred or watched [hexojs/hexo][hexorepo]

If you starred [hexojs/hexo][hexorepo] repository during the past many years, you may notice that the repository disappeared from your star list unless you star the repository again.

The same is true for watchers. You may no longer receive [hexojs/hexo][hexorepo] updates in your GitHub feed page unless you watch the repository again.

### For people who forked [hexojs/hexo][hexorepo]

If you forked the [hexojs/hexo][hexorepo] repository before, you may notice strange changes in your fork relationship. For example, GitHub may show that fork relationship disappeared or your repository was forked from another user's hexo repository instead of from [hexojs/hexo][hexorepo] repository.

In most cases, this should not be a serious problem. If necessary, you can simply fork a new one again.

### For contributors

For everyone who contributed to Hexo, this may be very sad news. Today's Hexo exists because many community members worked together for many years. Stars are not only numbers. They also represent effort of contributors and recognition from users. We truly feel deeply sorry and upset about what happened. We sincerely apologize to every contributor of Hexo community.

If possible, We truly hope these data could be recovered.

## Additional findings

### A deleted Github repository could be restored

I noticed that there is a tab called [“Deleted repositories”](https://github.com/settings/deleted_repositories) in the GitHub account settings page, where deleted repositories can be restored. So I did a small experiment:

- I created a repository with account A, and then starred the repository with account B.
- After that, I deleted the repository and then restored it.
- I found that the repository stars did not being erased after the restoration.

This means that, according to GitHub's current behavior, changing a repository's visibility to private may actually be more dangerous than deleting the repository!

## Advice

- Don't change GitHub repository to private.
  As [Qovery once said][qovery] , we should never change a public GitHub repository to private. As shown by the experiences of [HTTPie][httpiestar], [Qovery][qoverystar], and now [Hexo][hexostar], changing repository visibility from public to private may cause permanent loss of community data. [GitHub documentation][githubdoc] also warns about this problems.

- Declare target repository explicitly.
  When using [GitHub CLI][githubcli], we should clearly specify the target repository via command line arguments instead of relying on the default remote repository which is set by yourself or [GitHub CLI][githubcli]. This is especially important when performing risky operations.

- Keep your software updated.
  As discussion in [hexojs#5775](https://github.com/orgs/hexojs/discussions/5775#discussioncomment-16848884), I was using an old version of [GitHub CLI][githubcli] at that time. This may have caused me to miss some GitHub reminders and warnings, which may have partly contributed to this Hexo incident.

- Restrict permissions to reduces the risk of accidental changes.
  There is a setting in Github organization's settings which called "Repository visibility change". If disabled, only organization owners can change repository visibilities. Although it did not help in this Hexo incident (the person involved is one of owners), it may help others reduce the risk of accidental changes.

- Hope GitHub can improve this issue.
  As mentioned earlier, this is not the first time something like this has happened. If there is no way to improve this issue, then similar incidents are very likely not going to be the last. As mentioned before, deleted repositories can be restored. So why can’t repositories with changed visibility be restored as well? I hope GitHub can improve such issue by providing a recovery feature.

In general, before doing any dangerous operation, we should always check carefully again and again. A small mistake may cause irreversible results.

[archive]: https://web.archive.org/web/20260406140512/https://github.com/hexojs/hexo
[githubcli]: https://cli.github.com/manual/gh
[githubdoc]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-from-public-to-private
[hexoio]: https://hexo.io/
[hexojs]: https://github.com/hexojs
[hexopkg]: https://www.npmjs.com/package/hexo
[hexorepo]: https://github.com/hexojs/hexo
[hexostar]: https://hexo.io/news/2026/05/08/hexo-lost-41k-github-stars-with-one-command/
[httpiestar]: https://httpie.io/blog/stardust
[qovery]: https://www.qovery.com/blog/we-lost-3800-stars-on-github-in-1-click#never-switch-public-repository-to-private
[qoverystar]: https://www.qovery.com/blog/we-lost-3800-stars-on-github-in-1-click
[tommy351]: https://github.com/tommy351
