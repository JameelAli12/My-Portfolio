import {runTransition} from './transition.js'
import {addLine} from "./terminal.js"
import { enterToContinue } from "./entering.js"
import { delay } from "./utils.js"
import { createBox } from "./box.js"

const terminal = document.getElementById("terminal")
const container = document.getElementById("container")

async function run() {
    await addLine('Loading...')
    await addLine('Enter to Continue ↵')
    await enterToContinue()
    await runTransition(container)
    container.classList.add("fade-out")
    container.remove()
    createBox()
}

run()