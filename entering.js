export function enterToContinue() {
    return new Promise((resolve) => {
        document.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            resolve() //declaraing resolve here means that we are kinda giving permission to run the current/next expression
        }},{once:true})
    })
}