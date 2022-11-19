import { writable } from "svelte/store";

export const toasts = writable([]);

export const addToast = (toast: { timeout: number | undefined; }) => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = Math.floor(Math.random() * 10000);

  // Setup some sensible defaults for a toast.
  const defaults = {
    id,
    title: "Toast",
    type: "info",
    dismissible: true,
    timeout: 3000,
  };
  // @ts-ignore
  // Push the toast to the top of the list of toasts
  toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

// @ts-ignore
export const dismissToast = (id) => {
  // @ts-ignore
  toasts.update((all) => all.filter((t) => t.id !== id));
};
