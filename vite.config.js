import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Sem prefixo VITE_: o token fica só no servidor do Vite, nunca vai pro navegador.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Contorna o CORS em desenvolvimento: o navegador chama /cms/... (mesma origem)
        // e o Vite repassa para a API já com o token.
        '/cms': {
          target: 'https://api.formacms.com.br',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/cms/, '/api'),
          headers: { Authorization: `Bearer ${env.FORMACMS_TOKEN}` },
        },
      },
    },
  }
})
