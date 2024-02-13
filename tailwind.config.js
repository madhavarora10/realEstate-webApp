
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primaryRegular: ['Poppins-regular', 'sans-serif'],
      secondaryRegular: ['Rubik-regular', 'sans-serif'],
  
    
    },
    screens: {
      xs:'280px',
      // => @media (min-width: 320px) { ... }  
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '800px',
      // => @media (min-width: 800px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
         // primary colors
      'primary':'var(--clr-primary)',
      'primaryDark':'var(--clr-primaryDark)',
      'signPageBg':'var(--clr-F5F2EB)',
       // card
       'card-border': 'var(--clr-cardborder-color)',
       'card-descp':'var(--clr-card-descp)',
       'e3e3e3':'var(--clr-e3e3e3)',
       'card-button-hover':'(--clr-primary)',
       '575757':'var(--clr-575757)',

        // base colors
        'gray-100': 'var(--clr-gray-100)', // 'color-13'
        'gray-200': 'var(--clr-gray-200)', // 'color-15'
        'gray-300': 'var(--clr-gray-300)',
        'gray-400': 'var(--clr-gray-400)', // 'color-16'
        'gray-500': 'var(--clr-gray-500)', // 'color-9'
        'gray-600': 'var(--clr-gray-600)', // 'color-8'
        'gray-700': 'var(--clr-gray-700)', // 'color-6'
        'gray-800': 'var(--clr-gray-800)', // 'color-12'
        'gray-900': 'var(--clr-gray-900)',

        // page bg
       'primary-bg':'var( --clr-primary-bg)',
       'd4fff0':'var(--clr-d4fff0)',
       'F7f7FD':'var(--clr-F7f7FD)',
       'C1DEE8':'var(--clr-C1DEE8)',
       'DDDCD1':'var(--clr-DDDCD1)',
       'C1DEE8':'var(--clr-C1DEE8)',
       

        // colors map
        blue: 'var(--clr-009ef6)',
        indigo: 'var(--clr-6610f2)',
        purple: 'var(--clr-6f42c1)',
        pink: 'var(--clr-d63384)',
        red: 'var(--clr-dc3545)',
        orange: 'var(--clr-fd7e14)',
        yellow: 'var(--clr-ffc107)',
        green: 'var(--clr-198754)',
        teal: 'var(--clr-20c997)',
        cyan: 'var(--clr-0dcaf0)',
        gray: 'var(--clr-gray)',
        'gray-dark': 'var(--clr-gray-dark)',

        // dark colors
        dark: 'var(--clr-gray-900)',
        'dark-active': 'var(--clr-dark-active)',
        'dark-light': 'var(--clr-gray-200)',
        'dark-inverse': 'var(--clr-dark-inverse)',

       
      
  

        // secondary colors
        secondary: 'var(--clr-secondary)',
       'secondary-bg':'var(--clr-secondary-bg)',
        'secondary-active': 'var(--clr-gray-400)',
        'secondary-light': 'var(--clr-gray-100)',
        'secondary-inverse': 'var(--clr-gray-800)',

        // light colors
        light: 'var(--clr-light)',
        'light-active': 'var(--clr-light-active)',
        'light-inverse': 'var(--clr-light-inverse)',
        'kt-light-inverse': 'var(--clr-gray-600)',

        // success colors
        success: 'var(--clr-1bc5bd)',
        'success-active': 'var(--clr-0bb7af)',
        'success-light': 'var(--clr-success-light)',
        'success-inverse': 'var(--clr-white)',
        'kt-success': 'var(--clr-50cd89)',
        'kt-success-light': 'var(--clr-e8fff3)',

        // info colors
        info: 'var(--clr-8950fc)',
        'info-active': 'var(--clr-7337ee)',
        'info-light': 'var(--clr-info-light)',
        'info-inverse': 'var(--clr-white)',

        // warning colors
        warning: 'var(--clr-ffa800)',
        'warning-active': 'var(--clr-ee9d01)',
        'warning-light': 'var(--clr-warning-light)',
        'warning-inverse': 'var(--clr-white)',
        'kt-warning': 'var(--clr-ffc700)',
        'kt-text-warning': 'var(--clr-ffc700)',
        'kt-warning-light': 'var(--clr-fff8dd)',

        // danger colors
        danger: 'var(--clr-f64e60)',
        'danger-active': 'var(--clr-ee2d41)',
        'danger-light': 'var(--clr-danger-light)',
        'danger-inverse': 'var(--clr-white)',
        'kt-danger': 'var(--clr-f1416c)', // 'color-11'
        'kt-danger-dark': 'var(--clr-ee2d41)',
        'kt-danger-light': 'var(--clr-fff5f8)',
        'kt-danger-inverse': 'var(--clr-white)',

        'kt-gray-900': 'var(--clr-gray-900)',
        'kt-text-gray-900': 'var(--clr-gray-900)',

        // white colors
        white: 'var(--clr-white)',
        'white-active': 'var(--clr-gray-100)',
        'white-inverse': 'var(--clr-gray-600',

        'kt-secondary-inverse': 'var(--clr-gray-800)',

        // success
        'kt-light-success': 'var(--clr-gray-200)',
        'kt-light': 'var(--clr-gray-100)',
        'kt-secondary-light': 'var(--clr-gray-100)',

        // text
      '8E8E8E':'var(--clr-8E8E8E)',
      'descp-color':'var( --clr-descp-color)',

        // grays
        'kt-gray-100': 'var(--clr-gray-100)',
        'kt-gray-200': 'var(--clr-gray-200)',
        'kt-gray-400': 'var(--clr-gray-400)',
        'kt-gray-500': 'var(--clr-gray-500)',
        'kt-gray-600': 'var(--clr-gray-600)',
        'kt-gray-800': 'var(--clr-gray-800)',

        // form
        'kt-form-text': 'var(--clr-gray-500)',
        'kt-form-label': 'var(--clr-gray-800)',
        'kt-form-select': 'var(--clr-gray-700)',
        'kt-form-file-button': 'var(--clr-gray-700)',
        'kt-form-select-indicator': 'var(--clr-gray-600)',
        'kt-form-check-input-bg-solid': 'var(--clr-gray-200)',
        'kt-form-file-button-bg': 'var(--clr-gray-100)',
        'kt-form-file-button-hover-bg': 'var(--clr-gray-100)',

        // tooltip
        'kt-tooltip': 'var(--clr-gray-800)',

        // popover
        'kt-popover-header-color': 'var(--clr-gray-800)',
        'kt-popover-body-color': 'var(--clr-gray-800)',
        'kt-popover-border': 'var(--clr-gray-200)',

        // symbol
        'kt-symbol-label': 'var(--clr-gray-800)',

        'kt-gray-700': 'var(--clr-gray-700)',

        // table
        'kt-table-loading-message': 'var(--clr-gray-700)',
        'kt-table-caption': 'var(--clr-gray-500)',
        'kt-table-border': 'var(--clr-gray-200)',
        'kt-table-active-bg': 'var(--clr-gray-100)',
        'kt-table-hover-bg': 'var(--clr-gray-100)',

        // input
        'kt-input': 'var(--clr-gray-700)',
        'kt-input-plaintext': 'var(--clr-gray-700)',
        'kt-input-focus': 'var(--clr-gray-700)',
        'kt-input-solid': 'var(--clr-gray-700)',
        'kt-input-group-addon': 'var(--clr-gray-700)',
        'kt-input-focus-border': 'var(--clr-gray-400)',
        'kt-input-solid-placeholder': 'var(--clr-gray-500)',
        'kt-input-disabled-bg': 'var(--clr-gray-200)',
        'kt-input-solid-bg': 'var(--clr-gray-100)',
        'kt-input-group-addon-bg': 'var(--clr-gray-100)',

        // modal
        'kt-modal-header-footer-border': 'var(--clr-gray-200)',

        // thumbnail
        'kt-thumbnail-border': 'var(--clr-gray-200)',

        // nav
        'kt-nav-tabs-link-active': 'var(--clr-gray-700)',
        'kt-nav-tabs-border': 'var(--clr-gray-200)',
        'kt-nav-tabs-link-hover-border': 'var(--clr-gray-200)',

        // pagination
        'kt-pagination': 'var(--clr-gray-700)',
        'kt-pagination-disabled': 'var(--clr-gray-400)',

        // list
        'kt-list-group-action': 'var(--clr-gray-700)',
        'kt-list-group-action-hover': 'var(--clr-gray-700)',
        'kt-list-group-disabled-color': 'var(--clr-gray-600)',

        // buttons
        'kt-btn-link-disabled': 'var(--clr-gray-600)',

        // dropdown
        'kt-dropdown-header-color': 'var(--clr-gray-600)',
        'kt-dropdown-link-disabled': 'var(--clr-gray-500)',
        'kt-dropdown-divider-bg': 'var(--clr-gray-100)',

        // toast
        'kt-toast-header-color': 'var(--clr-gray-600)',

        // figure
        'kt-figure-disabled': 'var(--clr-gray-600)',

        // breadcrumb
        'kt-breadcrumb-divider': 'var(--clr-gray-600)',

        // carousel
        'kt-carousel-custom-bullet-indicator': 'var(--clr-gray-600)',
        'kt-carousel-custom-indicator-active-bg': 'var(--clr-gray-400)',
        'kt-carousel-custom-bullet-indicator-default-bg': 'var(--clr-gray-200)',

        // menu
        'kt-menu-heading': 'var(--clr-gray-500)',
        'kt-menu-title': 'var(--clr-9899ac)', // color-4
        'kt-menu-bullet': 'var(--clr-9899ac)', // color-4
        'kt-menu-arrow': 'var(--clr-9899ac)', // color-4

       

        // app
        'kt-app-sidebar-light-scrollbar': 'var(--clr-gray-200)',
        'kt-app-toolbar-base-border-top': 'var(--clr-gray-200)',

        // accordion
        'kt-accordion-border': 'var(--clr-gray-200)',
        'kt-accordion-button-active-bg': 'var(--clr-gray-100)',

        // misc
        'kt-dark-light': 'var(--clr-gray-200)',
        'kt-border': 'var(--clr-gray-200)',
        'kt-headings-color': 'var(--clr-181c32)', // color-10
        'kt-primary': 'var(--clr-5865F2)', // accent
        'kt-primary-dark': 'var(--clr-187de4)',
        'kt-primary-light': 'var(--clr-f1faff)', // color-7
        'kt-component-hover-bg': 'var(--clr-f4f6fa)',
        'kt-bg': 'var(--clr-bg)',

        'bs-btn-hover-bg': 'var(--clr-light)',
        'color-2': '#1a1a27',
        'color-3': '#a2a5b7',
        'color-5': '#f2f4f6',
        'color-7': '#edf5fb',
        'color-8': '#a0a3a966',
        'color-14': '#eef3f7',
        'drawer-overlay': 'white',
        amber: 'var(--clr-amber)',
        'flowkit-green': 'var(--clr-flowkit-green)',
        'flowkit-red': 'var(--clr-flowkit-red)',
      },
      rotate: {
        270: '270deg',
      },
      keyframes: {
        'slide-in-from-right': {
          '0%': {
            transform: 'translateX(100%)',
            display: 'none',
          },
          '100%': {
            transform: 'translateX(0%)',
            display: 'inherit',
          },
        },
        'slide-out-to-right': {
          '0%': {
            transform: 'translateX(0%)',
            display: 'inherit',
          },
          '100%': {
            transform: 'translateX(100%)',
            display: 'none',
          },
        },
        'slide-in-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
            display: 'none',
          },
          '100%': {
            transform: 'translateX(0%)',
            display: 'inherit',
          },
        },
        'slide-out-to-left': {
          '0%': {
            transform: 'translateX(0%)',
            display: 'inherit',
          },
          '100%': {
            transform: 'translateX(-100%)',
            display: 'none',
          },
        },
        'warn-icon': {
          '0%': {
            transform: 'rotateX(100deg)',
            opacity: 1,
          },
          '100%': {
            transform: 'rotateX(0deg)',
            opacity: 1,
          },
        },
        'warn-icon-content': {
          '0%': {
            transform: 'rotateZ(45deg)',
            opacity: 0,
          },
          '25%': {
            transform: 'rotateZ(-25deg)',
            opacity: 0.4,
          },
          '50%': {
            transform: 'rotateZ(15deg)',
            opacity: 0.8,
          },
          '75%': {
            transform: 'rotateZ(-5deg)',
            opacity: 1,
          },
          '100%': {
            transform: 'rotateZ(0)',
            opacity: 1,
          },
        },
        'error-icon': {
          '0%': {
            transform: 'rotateX(100deg)',
            opacity: 0,
          },
          '100%': {
            transform: 'rotateX(0deg)',
            opacity: 1,
          },
        },
        'error-icon-content': {
          '0%': {
            'margin-top': '1.625em',
            transform: 'scale(0.4)',
            opacity: 0,
          },

          '50%': {
            'margin-top': '1.625em',
            transform: 'scale(0.4)',
            opacity: 0,
          },
          '80%': {
            'margin-top': '-0.375em',
            transform: 'scale(1.15)',
          },
          '100%': {
            'margin-top': 0,
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      animation: {
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-in-out forwards',
        'slide-out-to-right': 'slide-out-to-right 0.5s ease-in-out forwards',
        'slide-in-from-left': 'slide-in-from-left 0.3s ease-in-out forwards',
        'slide-out-to-left': 'slide-out-to-left 0.5s ease-in-out forwards',
        'warn-icon': 'error-icon 0.5s ease-in-out',
        'warn-icon-content': 'error-icon-content 0.5s ease-in-out',
        'error-icon': 'error-icon 0.5s ease-in-out',
        'error-icon-content': 'error-icon-content 0.5s ease-in-out',
      },
      width:{
        '100':'400px',
        '104':'450px',
        '106':'480px',
        '108':'500px',
        '110':'520px',
        '112':'540px',
        '114':'600px',
        '116':'620px',
        '118':'640px',
      },
      height:{
        '100':'400px',
        '104':'450px',
        '106':'480px',
        '108':'500px',
        '110':'520px',
        '112':'540px',
        '114':'600px',
        '116':'620px',
        '118':'640px',
      },
      fontSize: {
        tiny: '0.5rem',
        '9px': '9px',
        'fs-4': '4rem',
        'fs-3.5': '3.5rem',
        'fs-3': '3rem',
        'fs-2': '2rem',
        'fs-1.5': '1.5rem',
        'fs-1.25': '1.25rem',
        'fs-1.15': '1.125rem',
        'fs-1': '1rem',
        'fs-0.875': '0.875rem',
        'fs-0.7': '0.7rem',
        'fs-0.5': '0.5rem',
      },
      fontWeight: {
        'wt-900': '900',
        'wt-800': '800',
        'wt-700': '700',
        'wt-600': '600',
        'wt-500': '500',
        'wt-400': '400',
        'wt-300': '300',
        'wt-200': '200',
        'wt-100': '100',
      },
      lineHeight: {
        'lh-7': '6rem',
        'lh-5': '5rem',
        'lh-4': '4rem',
        'lh-3.5': '3.5rem',
        'lh-3': '3rem',
        'lh-2.5': '2.5rem',
        'lh-2': '2rem',
        'lh-1.75': '1.75rem',
        'lh-1.5': '1.5rem',
        'lh-1': '1rem',
      },
      dropShadow: {
        'text': '0 0 4px rgba(0, 0, 0, 0.25)',
        'box': '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
        '7xl': '17.7px 17.74px 0px rgba(0, 0, 0, 1)',
        '3xl': '0px 0px 2.6px rgba(0, 0, 0, 0.25)',
        'box2': '0px 0px 4px  #00000040',
        'buttonType1': '0px 0px 65px rgba(105, 185, 157, 0.32)',
        'buttonType2': '24px 24px 65px rgba(81, 140, 119, 0.24)',
        
        
        

        
      },
      padding: {
          '13': '3.25rem',
          '14': '3.5rem',
          '15': '3.75rem',
        }
     
    },
  },
  plugins: [],
};
