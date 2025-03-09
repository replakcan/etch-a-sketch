const createGridSystem = (gridWidth, container, colorGenerator) => {
  const row = Math.floor(screen.width / gridWidth)
  const col = Math.floor(screen.height / gridWidth)

  let theme = JSON.parse(localStorage.getItem('darkTheme'))

  const totalGrids = row * col

  for (let i = 0; i < totalGrids; i++) {
    let div = document.createElement('div')
    div.classList.add('sketch-div')
    div.style.width = `${gridWidth}px`
    div.style.backgroundColor = theme ? '#3c3d37' : 'white'
    div.style['borderColor'] = theme ? '#697565' : 'pink'

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
