export function createBox() {
    const box = document.createElement("div")
    const horizontalLine = document.createElement("hr")
    horizontalLine.classList.add("horizontal-line")
    box.classList.add("box")
    box.textContent = "WELCOME"
    const terminal = document.getElementById("terminal")
    terminal.appendChild(box)
    terminal.appendChild(horizontalLine)
}