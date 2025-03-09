import eraserBtn from '../ui/eraserBtn.js'
import gridSetterBtn from '../ui/gridSetterBtn.js'
import toggleThemeBtn from '../ui/toggleThemeBtn.js'

let theme = JSON.parse(localStorage.getItem('darkTheme'))

const btnGroup = document.createElement('div')
btnGroup.classList.add('btn-group')

btnGroup.style.backgroundColor = theme ? '#1e201e' : 'rgb(67, 55, 136)'

btnGroup.appendChild(gridSetterBtn)
btnGroup.appendChild(eraserBtn)
btnGroup.appendChild(toggleThemeBtn)

export default btnGroup
