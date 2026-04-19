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

function addLine(line, callback) {
    const newEl = document. createElement("p")
    terminal.appendChild(newEl)
    let index = 0;
    const interval = setInterval(() => {
        if(index < line.length) {
            newEl.textContent += line[index]
            index++
        }
        else {
            clearInterval(interval)
            if(typeof callback === "function") {
                callback()
            }
        }
    }, 100);
}

addLine("> Initializing...", () => {
    addLine("> Loading modules...", () => {
        addLine("> Connecting...", () => {
            addLine("> Welcome, Jameeel Ali.")
        })
    })
})

