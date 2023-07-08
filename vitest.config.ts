/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// @ts-ignore
// https://vitejs.dev/config/
export default defineConfig({
    // @ts-ignore
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
