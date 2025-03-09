const eraserBtn = document.createElement('button')
eraserBtn.textContent = 'eraser'.toUpperCase()

eraserBtn.addEventListener('click', () => {
  const sketchDivs = [...document.querySelectorAll('.sketch-div')]

  sketchDivs.map((div) => (div.style.backgroundColor = 'white'))
})

export default eraserBtn
