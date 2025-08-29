// //import path from "path"
// import tailwindcss from "@tailwindcss/vite"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: import.meta.env.VITE_BASE_PATH || "e-panchayat"
// })


// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig(({ mode }) => {
//   // Load env file based on the current mode (development or production)
//   const env = loadEnv(mode, process.cwd(), '')

//   return {
//     plugins: [react(), tailwindcss()],
//     base: env.VITE_BASE_PATH || '/e-panchayat/'
//   }
// })


import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load env variables (works without process)
  const env = loadEnv(mode, '', '')

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || '/'
  }
})


