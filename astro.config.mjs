import { defineConfig, envField } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import path from 'node:path';

export default defineConfig({
  vite: {
    plugins: [yaml()],
    server: {
      fs: {
        allow: [
          process.cwd(),
          path.resolve('../..')
        ]
      }
    }
  },
  env: {
    schema: {
      API_URL: envField.string({ context: "client", access: "public", default: "example" }),
      PORT: envField.number({ context: "client", access: "public", optional: true }),
      API_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  }
});
