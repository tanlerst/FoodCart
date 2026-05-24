interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
  // add any other custom variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
