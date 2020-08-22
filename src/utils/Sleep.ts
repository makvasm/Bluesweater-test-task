export function Sleep(sec: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000 * sec)
    })
}