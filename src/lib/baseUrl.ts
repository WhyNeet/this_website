export const baseurl = () =>
  import.meta.env.PROD ? "https://whyneet.vercel.app" : "http://localhost:4321";
