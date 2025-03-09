const sketchGridContainer = document.createElement('div')
sketchGridContainer.classList.add('container')

let theme = JSON.parse(localStorage.getItem('darkTheme'))

sketchGridContainer.style.backgroundColor = theme ? '#1e201e' : 'rgb(67, 55, 136)'

export default sketchGridContainer
