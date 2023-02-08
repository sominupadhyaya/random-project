const startAnimation = document.querySelector("[button-main]")
const stopAnimation = document.querySelector("[button-sec]")

const squares = document.querySelectorAll(".square")

startAnimation.addEventListener("click", () =>
  squares.forEach((el) => el.classList.add("special-square"))
)

stopAnimation.addEventListener("click" , () =>
    squares.forEach(el => el.classList.remove("special-square"))
)
