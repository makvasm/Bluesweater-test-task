import * as React from 'react'
import * as ReactDOM from "react-dom"
import { User } from "./components/User"
import { EmitLoad } from "./utils/EmitLoad"
import { ScrollHandler } from "./utils/ScrollHandler"
import { makeStyles } from '@material-ui/styles'

export default function App(): React.ReactElement {

  const [users, addUsers] = React.useState([])
  const [scrollY, setScroll] = React.useState(0)

  let rowHeight = 80

  let getElementForRender = () => {
    // Начать с 0 или с ближайшего к верхней границе экрана элемента
    let start: number = Math.max(0, Math.floor((scrollY - 160) / rowHeight)) // scrollY - x для того чтобы загрузить чуть больше элементов
    let render: any[] = []

    // рендерим элементы до конца массива, либо некоторое количество, помещающееся на экране + ещё несколько
    for (let i = start; i < Math.min(users.length, (scrollY + window.innerHeight + 200) / rowHeight); i++) {
      if (i >= (scrollY - 1000) / rowHeight) render.push(users[i])
    }
    return render.map(e => {
      // переменная start нужна для сохранения позиции элемента в массиве, чтобы правильно рассчитать его отступ 
      let ind = start
      start++
      return <User fromTop={ind * rowHeight} key={ind} {...e} />
    })
  }

  React.useEffect(() => {
    EmitLoad(addUsers, users)
  }, [])

  const style = makeStyles({
    scoreboard: {
      height: `${80 * users.length}px`,
      position: "relative"
    },
    scoreboardWrapper: {
      height: "800px",
      overflowY: "auto"
    }
  })()

  if (!users.length) return <div>Пусто</div>
  return (
    <div className={style.scoreboardWrapper} onScroll={event => ScrollHandler(event, addUsers, users, setScroll)}>
      <div className={style.scoreboard} >
        {getElementForRender()}
      </div>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById("main"))