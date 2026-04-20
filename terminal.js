export function addLine(line) {
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
