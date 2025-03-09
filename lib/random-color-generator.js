export const randomRGBGenerator = (a_ = 0.0) => {
  var r_, g_, b_

  const randomClr = () => Math.floor(Math.random() * 256)

  r_ = randomClr()
  g_ = randomClr()
  b_ = randomClr()

  return `rgba(${r_}, ${g_}, ${b_}, ${Math.min(a_, 1.0)})`
}
