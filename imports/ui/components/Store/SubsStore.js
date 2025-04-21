import { writable } from "svelte/store";

function createCounter() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set,
        update,
        add: (ids) => update(value => [...new Set([...value, ...ids])]),
        reset: () => set([]),
    };
}

export const appsSubscribeIds = createCounter();
export const knowledgeBaseSubscribeByAppIds = createCounter();
export const knowledgeIds = createCounter();
