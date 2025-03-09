const emptyGridSystem = (container) => {
  let gridsToBeDeleted = [...document.querySelectorAll('.sketch-div')]

  if (gridsToBeDeleted.length > 0) {
    for (let i = 0; i < gridsToBeDeleted.length; i++) {
      container.removeChild(gridsToBeDeleted[i])
    }
  }
}

export default emptyGridSystem
