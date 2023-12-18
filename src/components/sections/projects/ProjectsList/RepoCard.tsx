import type { Repo, Topics } from "@/types";
import { For } from "solid-js";

export const RepoCard = ({ repo }: { repo: Repo & Topics }) => (
  <div class="p-4 rounded-xl border border-secondary-background relative pr-8">
    {repo.homepageUrl === "" ? (
      <h3 class="font-bold text-lg mb-1">{repo.name}</h3>
    ) : (
      <a
        href={repo.homepageUrl}
        class="font-bold text-lg mb-1 flex items-center gap-2 hover:text-primary w-fit"
        target="_blank"
      >
        {repo.name}
        <span class="icon text-lg text-secondary/80">open_in_new</span>
      </a>
    )}
    <p class="text-sm text-secondary mb-4 line-clamp-3">
      {repo.description ?? "No description provided."}
    </p>
    <div class="flex gap-2 flex-wrap">
      <For each={repo.topics}>
        {(topic) =>
          topic !== "portfolio" ? (
            <div class="rounded-full text-sm bg-secondary-background px-3 py-1">
              {topic}
            </div>
          ) : null
        }
      </For>
    </div>
    <a
      href={repo.url}
      class="absolute top-4 right-4 h-6 w-6 opacity-40 hover:opacity-60"
      target="_blank"
    >
      <img src="/logos/GitHub.svg" alt="GitHub logo" />
    </a>
  </div>
);
