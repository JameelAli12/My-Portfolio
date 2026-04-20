export function addLine(line) {
    const newEl = document.createElement("p")
    const textSpan = document.createElement("span")
    textSpan.classList.add("text")
    const cursorSpan = document.createElement("span")
    cursorSpan.textContent = '|'
    cursorSpan.classList.add('cursor')
    newEl.append(textSpan, cursorSpan)
    terminal.appendChild(newEl)
    
    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if(i < line.length) {
                textSpan.textContent += line[i]
                i++
            }
            else {
                clearInterval(interval)
                cursorSpan.remove()
                resolve()
            }
        }, 100);
    })
}
