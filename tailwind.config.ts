import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { accent: '#00E5FF' } } }, plugins: [] };
export default config;
