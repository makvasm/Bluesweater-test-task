export async function EmitLoad(addUsers: Function, users: Array<any>) {
  return new Promise((resolve, reject) => {
    let res = []
    for (let i = users.length + 1; i <= users.length + 50; i++) {
      res.push({
        name: `Test test`,
        position: i,
        time: 123,
        speed: Math.floor(Math.random() * 150),
      })
    }
    addUsers([...users, ...res])
    resolve()
  })
}