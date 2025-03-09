import askUserGridAmount from '../../lib/ask-user-grid-amount.js'
import emptyGridSystem from '../../lib/empty-grid-system.js'
import createGridSystem from '../../lib/create-grid-system.js'
import randomRGBGenerator from '../../lib/random-color-generator.js'
import sketchGridContainer from '../layout/sketchGridContainer.js'

const isParsedStringNaN = (str) => isNaN(str) && isNaN(parseFloat(str))

const gridSetterBtn = document.createElement('button')
gridSetterBtn.textContent = 'new grid'.toUpperCase()

gridSetterBtn.addEventListener('click', () => {
  let divCountOneSide
  do {
    divCountOneSide = askUserGridAmount()
  } while (isParsedStringNaN(divCountOneSide) || divCountOneSide > 100 || divCountOneSide < 10)

  emptyGridSystem(sketchGridContainer)
  createGridSystem(window.innerWidth / divCountOneSide, sketchGridContainer, randomRGBGenerator)
})

export default gridSetterBtn
