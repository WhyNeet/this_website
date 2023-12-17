import type { Repo } from "@/types";
import { component$, useSignal } from "@builder.io/qwik";

export type ProjectListProps = { repos: Repo[] };

export default component$<ProjectListProps>(({ repos }) => {
  const selectedTopic = useSignal<string | null>(null);
  const topics = new Set<string>();

  repos.forEach(({ repositoryTopics: { nodes } }) =>
    nodes.forEach(({ topic: { name } }) => topics.add(name))
  );

  return (
    <div>
      <div class="flex gap-2">
        {[...topics].map((topic) => (
          <button
            key={topic}
            class={`px-4 py-2 rounded-xl ${
              topic === selectedTopic.value
                ? "bg-primary"
                : "bg-secondary-background"
            }`}
            onClick$={() => (selectedTopic.value = topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div class="grid grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            class="p-4 rounded-xl border border-secondary-background"
          >
            <h3 class="font-bold text-lg">{repo.name}</h3>
            <p class="text-sm text-secondary mb-2">
              {repo.description ?? "No description provided."}
            </p>
            <div class="flex gap-2">
              {repo.repositoryTopics.nodes.map(({ topic: { name } }) => (
                <button
                  key={name}
                  class="rounded-full text-sm bg-secondary-background px-3 py-1"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
