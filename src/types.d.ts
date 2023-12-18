export type Repo = {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
};

export type ApiTopics = {
  repositoryTopics: { nodes: { topic: { name: string } }[] };
};
export type Topics = { topics: string[] };
