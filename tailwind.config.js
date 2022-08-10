module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'Sans-serif'],
    },
    extend: {
      height: {
        '85vh': '85vh',
      },
      width: {
        'sidebar-collapsed': 'var(--whppt-sidebar-collapsed)',
        'sidebar-extended': 'var(--whppt-sidebar-extended)',
      },
      colors: {
        whpptLightMode: '#fff',
        whpptDarkMode: '#121212',
        whpptActive: '#3B86FF',
        whpptLightBorder: '#F0F0F7',
        whpptDarkBorder: '#292929',
        whpptStandard: '#9998BA',
      },
      minWidth: {
        400: '400px',
      },
      transitionProperty: {
        width: 'width',
      },
      gridTemplateColumns: {
        galleryImages: 'repeat(auto-fit, 22.5rem)',
        gallerySvgs: 'repeat(auto-fit, 12.5rem)',
      },
      gridAutoRows: {
        gallery: 'fit-content(1rem)',
      },
      height: {
        galleryItem: '12.5rem',
      },
      width: {
        settingsSidebar: '24rem',
        galleryImage: '22.5rem',
      },
      zIndex: {
        editorPanel: '1000',
        settingsPanel: '1500',
        mainNav: '2000',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
