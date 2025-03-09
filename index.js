import btnGroup from './components/layout/btnGroup.js'
import sketchGridContainer from './components/layout/sketchGridContainer.js'
import isUserSystemDark from './lib/set-theme-local-storage.js'

isUserSystemDark()

const theme = JSON.parse(localStorage.getItem('darkTheme'))

const body = document.querySelector('body')

body.style.backgroundColor = theme ? '#3c3d37' : 'rgb(202, 238, 220)'

body.appendChild(btnGroup)
body.appendChild(sketchGridContainer)
