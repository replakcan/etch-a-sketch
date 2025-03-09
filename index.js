const body = document.querySelector('body')
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const sketchDivContainer = document.createElement('div')
const btn = document.createElement('button')

btn.classList.add('btn')
btn.textContent = 'div amount per row on width'.toUpperCase()
sketchDivContainer.classList.add('container')

body.appendChild(btn)
body.appendChild(sketchDivContainer)

const divsOnOneSide = () => prompt('Type the desired grid number in widthwise (min: 0, max: 100)')

const updateSketchBoard = (divWidth) => {
  const longSide = Math.floor(windowWidth / divWidth)
  const shortSide = Math.floor(windowHeight / divWidth)

  const totalDivAmount = longSide * shortSide

  for (let i = 0; i < totalDivAmount; i++) {
    let div = document.createElement('div')
    div.classList.add('sketch-div')
    div.style.width = `${divWidth}px`
    sketchDivContainer.appendChild(div)
  }
}

const deletePreviousSetup = () => {
  let divsToBeDeleted = document.querySelectorAll('.sketch-div')
  divsToBeDeleted = [...divsToBeDeleted]

  if (divsToBeDeleted.length > 0) {
    for (let i = 0; i < divsToBeDeleted.length; i++) {
      sketchDivContainer.removeChild(divsToBeDeleted[i])
    }
  }
}

btn.addEventListener('click', () => {
  let divCountOneSide
  do {
    divCountOneSide = divsOnOneSide()
  } while (divCountOneSide > 100 || divCountOneSide < 0)

  deletePreviousSetup()
  updateSketchBoard(windowWidth / divCountOneSide)
})
