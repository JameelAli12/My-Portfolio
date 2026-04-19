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
    terminal.appendChild(newEl)

    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if(i < line.length) {
                newEl.textContent += line[i]
                i++
            }
            else {
                clearInterval(interval)
                resolve()
            }
        }, 100);
    })
}

async function run() {
    await addLine('>>>>>')
    await addLine('......')
}

run()