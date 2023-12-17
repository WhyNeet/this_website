export type Repo = {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  repositoryTopics: { nodes: Topic[] };
};

export type Topic = { topic: { name: string } };
