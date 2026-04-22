import {runTransition} from './transition.js'
import {addLine} from "./terminal.js"
import { enterToContinue } from "./entering.js"

const terminal = document.getElementById("terminal")
const container = document.getElementById("container")

async function run() {
    await addLine('Loading...')
    await addLine('Enter to Continue ↵')
    await enterToContinue()
    await runTransition(container) //fix this: how to import the newEl here to run the glitch effect on the lines only!!!!!!
}

run()