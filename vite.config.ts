import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    resolve: {
        alias: {
            fe: path.resolve(import.meta.dirname, './src'),
        },
    },
    plugins: [
        react({
            jsxImportSource: 'fe',
        }),
    ],
})
