import type { Repo, Topics } from "@/types";
import { For, createSignal, onMount } from "solid-js";
import { TopicButton } from "./TopicButton";
import { RepoCard } from "./RepoCard";
import { useSearchParamsState } from "@/lib/hooks/useSearchParamsState";

export type ProjectListProps = { repos: (Repo & Topics)[] };

export const ProjectsList = ({ repos: initialRepos }: ProjectListProps) => {
  const { state, setState } = useSearchParamsState<{ topic: string | null }>({
    topic: null,
  });
  const [repos, setRepos] = createSignal(initialRepos);
  const topics = new Set<string>();

  repos().forEach(({ topics: repositoryTopics }) =>
    repositoryTopics.forEach((topic) =>
      topic !== "portfolio" ? topics.add(topic) : null
    )
  );

  const updateRepos = (topic: string | null) =>
    topic && topics.has(topic)
      ? setRepos(() =>
          initialRepos.filter((repo) => repo.topics.includes(topic))
        )
      : setRepos(initialRepos);

  onMount(() => {
    updateRepos(state().topic);
  });

  const selectTopic = (topic: string | null) => {
    setState({ topic });

    updateRepos(topic);
  };

  return (
    <div>
      <div class="text-secondary mb-2 font-bold">Topics</div>
      <div class="flex gap-2 mb-6 flex-wrap items-center font-bold">
        <For each={[...topics]}>
          {(topic) => (
            <TopicButton
              topic={topic}
              isActive={() => topic === state().topic}
              onSelect={() => selectTopic(topic)}
              onDeselect={() => selectTopic(null)}
            />
          )}
        </For>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <For each={repos()}>{(repo) => <RepoCard repo={repo} />}</For>
      </div>
    </div>
  );
};
