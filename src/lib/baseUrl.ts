export const baseurl = () =>
  import.meta.env.BASE_URL === "/"
    ? "http://localhost:4321"
    : "https://whyneet.vercel.app";
