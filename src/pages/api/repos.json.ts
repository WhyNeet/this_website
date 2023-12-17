import { getRepos } from "@/lib/api/repos";

export async function GET({}) {
  const repos = await getRepos();

  return new Response(
    JSON.stringify({
      repos,
    })
  );
}
