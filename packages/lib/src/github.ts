import { Octokit, App } from 'octokit'

const octokit = new Octokit({
  auth: `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`,
})

export class GitHub {
  async fetchRepository({ owner, repo }: { owner: string; repo: string }) {
    return octokit.rest.repos.get({
      repo,
      owner,
    })
  }

  async fetchRepositoryReadme({
    owner,
    repo,
  }: {
    owner: string
    repo: string
  }) {
    return octokit.rest.repos.getContent({
      repo,
      owner,
      path: 'README.md',
    })
  }
}
