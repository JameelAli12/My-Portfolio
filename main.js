// const content = document.getElementById("content")

// const navBar = document.createElement("nav")
// const homeButton = document.createElement("button")
// homeButton.textContent = "Home"
// const projectsButton = document.createElement("button")
// projectsButton.textContent = "Projects"
// const contactButton = document.createElement("button")
// contactButton.textContent = "Contact"
// navBar.append(homeButton,projectsButton,contactButton)
// content.appendChild(navBar)

import {addLine} from "./terminal.js"
const terminal = document.getElementById("terminal")

async function run() {
    await addLine('>>>>>')
    await addLine('......')
}

run()