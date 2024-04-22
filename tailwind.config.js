import { mantine_tw_preset } from './src/shared/tailwind.mantine.preset';

const config = {
  presets: [mantine_tw_preset],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', ,],
  plugins: [],
};

export default config;
