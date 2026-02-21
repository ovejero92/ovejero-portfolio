/*
 * PostCSS configuration has been simplified for CSS-only project.
 * Tailwind CSS plugins have been removed.
 * 
 * Current setup only includes autoprefixer for cross-browser compatibility.
 */

const config = {
  plugins: {
    autoprefixer: {},
  },
};

export default config;
