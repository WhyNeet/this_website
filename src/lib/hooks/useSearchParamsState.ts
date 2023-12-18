import { createEffect, createSignal, onMount } from "solid-js";

export const useSearchParamsState = <T extends Record<string, string | null>>(
  initial: T
) => {
  const [state, setState] = createSignal<T>(initial);
  let url: URL = null!;

  onMount(() => {
    url = new URL(window.location.toString());
    const state: Record<string, string> = {};
    for (const [param, value] of url.searchParams.entries()) {
      state[param] = value;
    }

    setState({ ...initial, ...state } as any);
  });

  createEffect(() => {
    const _state = state();
    for (const key in _state) {
      if (!_state[key]) {
        url.searchParams.delete(key);
        continue;
      }

      url.searchParams.set(key, _state[key]!);
    }

    window.history.pushState({}, "", url);
  });

  return { state, setState };
};
