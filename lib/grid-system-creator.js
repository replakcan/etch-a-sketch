const createGridSystem = (gridWidth, container, colorGenerator) => {
  const longSide = Math.floor(window.innerWidth / gridWidth)
  const shortSide = Math.floor(window.innerHeight / gridWidth)

  const totalGrids = longSide * shortSide

  for (let i = 0; i < totalGrids; i++) {
    let div = document.createElement('div')
    div.classList.add('sketch-div')
    div.style.width = `${gridWidth}px`

    let opacity = 0.1

    div.addEventListener('mouseover', () => {
      if (div.style.backgroundColor) {
        opacity += 0.1
        div.style.backgroundColor = colorGenerator(opacity)
      } else {
        div.style.backgroundColor = colorGenerator(opacity)
      }
    })

    container.appendChild(div)
  }
}

export default createGridSystem
