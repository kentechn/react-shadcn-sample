import ky from "ky";

// Pass data to hooks
export const api = ky.create({
  prefixUrl: import.meta.env.VITE_BACKEND_BASE_URL,
  retry: 3,
});
