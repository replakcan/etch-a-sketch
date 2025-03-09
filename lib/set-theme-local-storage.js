const isUserSystemDark = () => {
  const themeTest = window.matchMedia('(prefers-color-scheme: dark)')

  return themeTest.matches
}

localStorage.setItem('darkTheme', JSON.stringify(isUserSystemDark()))

export default isUserSystemDark
