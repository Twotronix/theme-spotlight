let indx = 0
const Btn = document.querySelector("#themeChange")
const themes = [
    "dark",
    "light",
    "crimson",
    "night",
    "day",
    "coffee"
]
const lastTheme = themes.length

document.body.classList.toggle(themes[indx])

function nextTheme() {
    indx += 1
    if (indx == lastTheme) {
        indx = 0
    }
    document.body.className = themes[indx];    
}
Btn.addEventListener("click", () => {
    nextTheme()
})