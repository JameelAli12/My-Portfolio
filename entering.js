export function enterToContinue() {
    return new Promise((resolve) => {
        document.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            resolve()
            console.log("w")
        }},{once:true})
    })
}