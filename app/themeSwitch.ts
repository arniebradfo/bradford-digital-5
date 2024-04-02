export const initializeTheme = /*js*/ `

if (document != null && window != null && window.matchMedia) {
  function updateThemeBasedOnPreference(e) {
    if (e.matches) {
      // Dark mode
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      // Light mode
      document.documentElement.classList.remove('dark-mode')
      document.documentElement.classList.add('light-mode')
    }
  }
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  updateThemeBasedOnPreference(prefersDarkScheme);
  prefersDarkScheme.addEventListener('change', updateThemeBasedOnPreference);
}

`;
