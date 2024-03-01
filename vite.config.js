import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     // Specify the host to bind the Vite server to
//     host: '192.168.1.37',

//     port: 3000,
//   },
//   assetsInclude: ['**/*.glb'],
// });
