module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#ef4444',
          secondary: '#3b82f6',
          accent: '#facc15',
          neutral: '#3730a3',
          'base-100': '#f3f4f6',
          info: '#4AA8BF',
          success: '#84cc16',
          warning: '#ea580c',
          error: '#b91c1c',
        },
      },
      'dracula',
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
