import {delay} from "./utils.js"
export async function createBox() {
    const box = document.createElement("div")
    const horizontalLine1 = document.createElement("hr")
    const horizontalLine2 = document.createElement("hr")
    horizontalLine1.classList.add("horizontal-line")
    horizontalLine2.classList.add("horizontal-line")
    box.classList.add("box")
    box.textContent = "WELCOME"
    const terminal = document.getElementById("terminal")
    terminal.appendChild(box)
    terminal.appendChild(horizontalLine1)
    terminal.appendChild(horizontalLine2)
    
    horizontalLine1.classList.add("split1")
    horizontalLine2.classList.add("split2")
    box.classList.add("zoom-out")
    await delay(1000)
    horizontalLine1.remove()
    horizontalLine2.remove()
    box.remove()
}