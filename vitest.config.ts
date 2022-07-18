/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    // @ts-expect-error Type error: Type 'PluginOption[]' is not assignable to type 'PluginOption'.
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
