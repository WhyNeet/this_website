/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GITHUB_SECRET: string;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
