const config = {
  theme: {
    extend: {
      fontFamily: {
        foundersGrotesk: ["var(--font-founders)"],
        foundersGroteskText: ["var(--font-founders-text)"],
        foundersGroteskMono: ["var(--font-founders-mono)"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
