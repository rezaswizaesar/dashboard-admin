// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   const env = loadEnv(mode, process.cwd(), '');
//   plugins: [react()],
// })
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');
    return {
        // vite config
        plugins: [
            react(),
            ViteEjsPlugin({
              VITE_MSW: env.VITE_MSW,
                
            })
        ],
    };
});
