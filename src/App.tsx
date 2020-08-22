import * as React from 'react'
import * as ReactDOM from "react-dom"
import { User } from "./components/User"
import { EmitLoad } from "./utils/EmitLoad"
import { ScrollHandler } from "./utils/ScrollHandler"
import { makeStyles } from '@material-ui/styles'

export default function App(): React.ReactElement {

    const [users, addUsers] = React.useState([])
    const [scrollY, setScroll] = React.useState(0)

    let getElementForRender = () => {
        let start: number = -1
        let render: any[] = []
        for(let i = 0; i < Math.min(users.length, (scrollY + 1800) / 80); i++){
            if(i >= (scrollY - 1000) / 80){
                if(start < 0) start = i
                render.push(users[i])
            }
        }
        return render.map(e => {
            let ind = start
            start++
            return <User fromTop={ind * 80} key={ind} {...e} />
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