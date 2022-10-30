import { mergeConfig } from 'vite';
 
export default {
 stories: [
   '../stories/**/*.stories.mdx',
   '../stories/**/*.stories.@(js|jsx|ts|tsx)',
 ],
 addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],
 framework: '@storybook/nextjs',
 async viteFinal(config) {
   // Merge custom configuration into the default config
   return mergeConfig(config, {
     // Add storybook-specific dependencies to pre-optimization
     optimizeDeps: {
       include: ['storybook-addon-designs'],
     },
   });
 },
};
