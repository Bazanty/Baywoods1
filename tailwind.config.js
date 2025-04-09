module.exports = {
    theme: {
      extend: {
        colors: {
          baywoods: {
            primary: '#1a1a1a',
            accent: '#d4af37',
          }
        },
        animation: {
          marquee: 'marquee 15s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [],
  };