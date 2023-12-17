/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GITHUB_SECRET: string;
  readonly PROD: boolean;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
