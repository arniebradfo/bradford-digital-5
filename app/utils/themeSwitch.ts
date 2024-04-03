export const initializeTheme = /*js*/ `

if (document != null && window != null && window.matchMedia) {

  function updateTheme(e) {
    if (e.matches) {
      // Dark mode
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      // Light mode
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  updateTheme(prefersDarkScheme);
  prefersDarkScheme.addEventListener('change', updateTheme);
  
}

`;
