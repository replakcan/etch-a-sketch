import eraserBtn from "../ui/eraserBtn.js"
import gridSetterBtn from "../ui/gridSetterBtn.js"

const btnGroup = document.createElement('div')
btnGroup.classList.add('btn-group')

btnGroup.appendChild(gridSetterBtn)
btnGroup.appendChild(eraserBtn)

export default btnGroup