const toggleThemeBtn = document.createElement('button')

const body = document.querySelector('body')
let theme = JSON.parse(localStorage.getItem('darkTheme'))

toggleThemeBtn.textContent = (theme ? 'light' : 'dark').toUpperCase()

toggleThemeBtn.addEventListener('click', () => {
  localStorage.setItem('darkTheme', `${JSON.stringify(!theme)}`)

  theme = !theme
  toggleThemeBtn.textContent = (theme ? 'light' : 'dark').toUpperCase()
  const btn_group = document.querySelector('.btn-group')
  const gridContainer = document.querySelector('.container')
  const sketch_divs = [...document.querySelectorAll('.sketch-div')]

  sketch_divs.map((div) => {
    div.style['borderColor'] = theme ? '#697565' : 'pink'
  })

  gridContainer.style.backgroundColor = theme ? '#3c3d37' : 'white'
  body.style.backgroundColor = theme ? '#3c3d37' : 'rgb(202, 238, 220)'
  btn_group.style.backgroundColor = theme ? '#1e201e' : 'rgb(67, 55, 136)'
})

export default toggleThemeBtn
