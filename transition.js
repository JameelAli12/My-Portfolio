import {delay} from './utils.js'

export async function runTransition(wrapper) {
    wrapper.classList.add("glitch")
    await delay(200)
    wrapper.classList.remove("glitch")
}