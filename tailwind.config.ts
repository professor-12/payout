import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#FAFAFA",
        secondary: "#1E2640",
        primaryLightBlue: "#353C53",
      }
    },
  },
  plugins: [],
}
export default config
