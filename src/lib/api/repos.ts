import type { Repo } from "@/types";
import { Octokit } from "octokit";
import { cache } from "./caching";

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_SECRET,
});

export const getRepos = async () => {
  const cached = cache.get("repos");

  if (cached) return cached;

  const reposResp: { search: { nodes: Repo[] } } = await octokit.graphql(`
query {
  search(query: "user:WhyNeet topic:portfolio", type: REPOSITORY, first: 20) {
    nodes {
      ... on Repository {
        id,
        createdAt,
        name,
        description,
        homepageUrl,
        url,
        repositoryTopics(first: 20) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  }
}
`);

  const repos = reposResp.search.nodes;

  cache.set("repos", repos);

  return repos;
};
