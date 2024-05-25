/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          background: 'hsl(var(--background))',
          background_white: 'hsl(var(--background_white))',
          primary: 'hsl(var(--primary))',
          textStrong: 'hsl(var(--textStrong))',
          textWeak: 'hsl(var(--textWeak))',
          strokeStrong: 'hsl(var(--strokeStrong))',
          strokeWeak: 'hsl(var(--strokeWeak))',
          fill: 'hsl(var(--fill))',
          bgRaised: 'rgba(var(--bgRaised))',
          bgOverlay: 'rgba(var(--bgOverlay))',
          '-d-bgDashboard': 'hsl(var(--d-bgDashboard))',
          '-d-bgSecondaryDashboard': 'hsl(var(--d-secondaryDashboard))',
          '-d-border--clr': 'hsl(var(--d-border--clr))',
          '-d-Primary': 'hsl(var(--d-primary))',
          '-d-textStrong': 'hsl(var(--d-textStrong))',
          '-d-textWeak': 'hsl(var(--d-textWeak))',
          '-d-strokeStrong': 'hsl(var(--d-strokeStrong))',
          '-d-strokeWeak': 'hsl(var(--d-strokeWeak))',
          '-d-fill': 'hsl(var(--d-fill))',
          '-d-bgRaised': 'rgba(var(--d-bgRaised))',
          '-d-bgOverlay': 'rgba(var(--d-bgOverlay))',
        },

        system: {
          error: {
            primary: 'rgba(var(--errorPrimary))',
            fill: 'rgba(var(--errorFill))',
            strokeStrong: 'rgba(var(--errorStrokeStrong))',
          },
          warning: {
            primary: 'rgba(var(--warningPrimary))',
            fill: 'rgba(var(--warningFill))',
            strokeStrong: 'rgba(var(--warningStrokeStrong))',
          },
          success: {
            primary: 'rgba(var(--successPrimary))',
            fill: 'rgba(var(--successFill))',
            strokeStrong: 'rgba(var(--successStrokeStrong))',
          },
          special: {
            primary: 'rgba(var(--specialPrimary))',
            fill: 'rgba(var(--specialFill))',
            strokeStrong: 'rgba(var(--specialStrokeStrong))',
          },
        },
      },

      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        bold: 500,
        normal: 400,
      },
    },

    boxShadow: {
      raised: 'var(--raised)',
      overlay: 'var(--overlay)',
    },
  },

  plugins: [],
};
