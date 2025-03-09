import askUserGridAmount from "../../lib/ask-user-grid-amount.js"
import emptyGridSystem from "../../lib/empty-grid-system.js"
import createGridSystem from "../../lib/grid-system-creator.js"

const gridSetterBtn = document.createElement('button')
gridSetterBtn.textContent = 'grids per row'.toUpperCase()

gridSetterBtn.addEventListener('click', () => {
  let divCountOneSide
  do {
    divCountOneSide = askUserGridAmount()
  } while (divCountOneSide > 100 || divCountOneSide < 10)

  emptyGridSystem(sketchDivContainer)
  createGridSystem(window.innerWidth / divCountOneSide, sketchDivContainer, randomRGBGenerator)
})

export default gridSetterBtn