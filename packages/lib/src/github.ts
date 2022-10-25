import { Octokit } from 'octokit'
import api from './test'

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

  async fetchRepositoryStarHistory({
    owner,
    repo,
  }: {
    owner: string
    repo: string
  }) {
    return api.getRepoStarRecords(
      `${owner}/${repo}`,
      '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',
      100
    )
  }
}
