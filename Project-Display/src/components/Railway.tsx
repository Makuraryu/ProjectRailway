import { useEffect } from 'react'
import './Railway.css'
import { animate } from 'animejs'
type RailwayProps = {
    height: number,
    doorwidth: number,
    kabewidth: number,
    openpercent: number,
    doorinsha: number
}

function Kabe(){
    return (
        <>
            <div className="kabewrapper">
                <div className="wall kabe"></div>
                <div className="window"></div>
            </div>
            <div className="doorslot">
                <div className="wall door"></div>
                <div className="doorframe"></div>

            </div>
            <div className="kabewrapper">
                <div className="wall kabe"></div>
                <div className="window"></div>
            </div>
        </>
    )
}

function Door(){
    return (
        <div className="doorwrapper">
            <div className="doors">
                <div className="doorpanel leftdoor">
                    <div className="doa"></div>
                    <div className="doaglass"></div>
                </div>
                <div className="doorpanel rightdoor">
                    <div className="doa"></div>
                    <div className="doaglass"></div>
                </div>

            </div>
        </div>
    )
}



function Railway({height, doorwidth, kabewidth, openpercent, doorinsha}: RailwayProps) {
    useEffect(()=>{
        animate(".leftdoor",{
            x: - (doorwidth / 2) * openpercent +'vw',
        })
        animate(".rightdoor",{
            x: + (doorwidth / 2) * openpercent +'vw',
        })
    },[openpercent])
    return (
        <div id="railway" style={{'--height': height + 'vh', "--doorwidth": doorwidth + 'vw', "--kabewidth": kabewidth + 'vw', "--doorinsha": doorinsha} as React.CSSProperties}>
            <Door/>
            <Kabe/>
        </div>

    )
}

export default Railway