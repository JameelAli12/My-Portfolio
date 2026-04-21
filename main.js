import {runTransition} from './transition.js'
import {addLine} from "./terminal.js"
import { enterToContinue } from "./entering.js"

const terminal = document.getElementById("terminal")

async function run() {
    await addLine('Loading...')
    await addLine('Enter to Continue ↵')
    await enterToContinue()
    await runTransition() //fix this: how to import the newEl here to run the glitch effect on the lines only!!!!!!
}

run()