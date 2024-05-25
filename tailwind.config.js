/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rookitt': ['Rokkitt', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'courier':['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      const styles = ['normal', 'italic'];

      styles.forEach((style) => {
        weights.forEach((weight) => {
          newUtilities[`.rokkitt-${style}-${weight}`] = {
            fontFamily: 'Rokkitt, serif',
            fontWeight: weight,
            fontStyle: style,
          };
        });
      });

      styles.forEach((style) => {
        weights.forEach((weight) => {
          newUtilities[`.oswald-${style}-${weight}`] = {
            fontFamily: 'Oswald, sans-serif',
            fontWeight: weight,
            fontStyle: style,
          };
        });
      });

      styles.forEach((style) => {
        weights.forEach((weight) => {
          newUtilities[`.courier-${style}-${weight}`] = {
            fontFamily: 'Courier Prime, monospace',
            fontWeight: weight,
            fontStyle: style,
          };
        });
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}


