const eraserBtn = document.createElement('button')
eraserBtn.textContent = 'clear'.toUpperCase()

eraserBtn.addEventListener('click', () => {
  const sketchDivs = [...document.querySelectorAll('.sketch-div')]

  sketchDivs.map((div) => {
    div.style.backgroundColor = 'transparent'
  })
})

export default eraserBtn
