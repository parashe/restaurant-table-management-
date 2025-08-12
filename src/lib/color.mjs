// src/constants/color.mjs

// 1. First define your color object
const colorDefinitions = {
    // Black & Dark Theme
    backgrounds: {
      primary: '#000000',
      secondary: '#121212',
      tertiary: '#1E1E1E',
      card: '#1A1A1A',
      modal: 'rgba(0, 0, 0, 0.9)'
    },
    
    // Text Colors
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      disabled: '#757575',
      inverted: '#000000'
    },
    
    // Accent Colors
    accents: {
      primary: '#BB86FC',
      primaryDark: '#3700B3',
      secondary: '#03DAC6',
      secondaryDark: '#018786',
      error: '#CF6679',
      warning: '#FFA000',
      success: '#4CAF50'
    },
    
    // Table Status Colors
    tables: {
      available: '#4CAF50',
      occupied: '#F44336',
      reserved: '#FFC107',
      maintenance: '#9E9E9E',
      selected: '#BB86FC'
    },
    
    // UI Elements
    ui: {
      border: '#333333',
      divider: '#424242',
      overlay: 'rgba(0, 0, 0, 0.8)',
      shadow: 'rgba(255, 255, 255, 0.1)'
    }
  };
  
  // 2. Create the theme object
  const theme = {
    colors: colorDefinitions,
    fonts: {
      primary: '"Inter", sans-serif',
      secondary: '"Roboto", sans-serif'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px'
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  };
  
  // 3. Export as named exports
  export const colors = colorDefinitions;
  export { theme };
  
  // 4. Optionally export as default
  export default theme;