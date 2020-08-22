import * as React from 'react'
import { makeStyles } from "@material-ui/styles"
import { Button } from "@material-ui/core"


interface Props {
    name: string,
    position: number,
    time: number,
    speed: number,
    fromTop: number
}


export const User: React.FC<Props> = (props) => {

    const style = makeStyles({
        userWrapper: {
            position: "absolute",
            maxWidth: "1920px",
            width: "100%",
            minWidth: "320px",
            height: "80px",
            padding: "5px",
            boxSizing: "border-box",
            top: `${props.fromTop}px`,
            transitionDuration: "0.3s",
        },
        userMain: {
            height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            borderRadius: "5px",
            margin: "auto",

            overflow: "hidden",
            whiteSpace: "pre",
        },
        userPosition: {
            width: "20px",
            margin: "0 20px",
            fontSize: "0.85em"
        },
        userAvatar: {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
        },
        userInfoWrapper: {
            margin: "0 10px",
        },
        userInfoName: {
            textOverflow: "ellipsis",
        },
        userInfoStatsWrapper: {
            width: "200px",
            display: "inline-flex",
            justifyContent: "left",
            fontSize: "0.85em"
        },
        userInfoStatsTime: {
            color: "violet"
        },
        userInfoStatsSpeed: {
            color: "#51c0fc",
            "&::after": {
                content: `" км/ч"`,
                display: "inline",
            }

        },
        verticalSpliter: {
            width: "2px",
            backgroundColor: "#51c0fc",
            margin: "0 5px"
        },
    })()


    return (
        <div className={style.userWrapper}>
            <div className={style.userMain}>

                <h3 className={style.userPosition}>
                    {props.position}
                </h3>

                <img className={style.userAvatar} src="./helmet.svg" />

                <div className={style.userInfoWrapper}>
                    <div className={style.userInfoName}>
                        {props.name}
                    </div>

                    <div className={style.userInfoStatsWrapper}>
                        <div className={style.userInfoStatsTime}>
                            {props.time/60}
                        </div>

                        <div className={style.verticalSpliter}></div>

                        <div className={style.userInfoStatsSpeed}>
                            {props.speed}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
