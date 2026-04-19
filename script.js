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

const terminal = document.getElementById("terminal")

function addLine(line) {
    const newEl = document.createElement("p")
    newEl.textContent = line;
    terminal.append(newEl)
}

addLine("> Initializing...")
addLine("> Loading Modules...")
