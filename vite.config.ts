import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { configDotenv } from 'dotenv'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [react()]
  }
})
