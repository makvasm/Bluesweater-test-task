import { EmitLoad } from "./EmitLoad"
import { UIEvent } from "react"

let throttle: NodeJS.Timeout

export async function ScrollHandler(event: UIEvent, addUsers: Function, users: Array<any>, setScroll: Function) {
    event.persist()
    let trg = event.currentTarget

    if (trg.scrollTop + trg.clientHeight == trg.scrollHeight) {
        await EmitLoad(addUsers, users)
    }
    
    clearTimeout(throttle)
    throttle = setTimeout(() => {
        setScroll(trg.scrollTop)
    }, 50)
}