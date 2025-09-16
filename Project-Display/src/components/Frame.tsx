import './Frame.css'
import { createTimeline } from 'animejs'
import { useEffect } from 'react'

type FrameProps = {
    isOpen: boolean
}
function Frame({isOpen}: FrameProps){
    function doorOpen(){
        createTimeline({defaults: {duration:1500}})
        .add('.frameFrame',{
            '--doorshadow': 0.2,
            '--windowblur': 0,
            duration: 200,
        },0)
        .add('.frameLeft',{
            x: '-100%',
            duration:1000,
        },500)
       .add('.frameRight',{
            x: '100%',
            duration:1000,
        },500)

    }
    function doorClose(){
        createTimeline({defaults: {duration:1000}})

        .add('.frameLeft',{
            x: '0%',
            duration:800,
        },0)
       .add('.frameRight',{
            x: '0%',
            duration:800,
        },0)
        .add('.frameFrame',{
            '--doorshadow': 0.1,
            '--windowblur': 5 + 'px',
            duration: 200,
        },800)
    }


    useEffect(() => {
        if(isOpen){
            doorOpen()
        }else{
            doorClose()
        }
    },[isOpen])
    return(
        <div className="frameFrame">
            <div className="frameDoors">
                <div className="frameDoor frameLeft">
                    <div className="frameDoorPanel framePanelLeft"></div>
                    <div className="frameWindow"></div>
                </div>
                <div className="frameDoor frameRight">
                    <div className="frameDoorPanel framePanelRight"></div>
                    <div className="frameWindow"></div>

                </div>
            </div>

            <div className="frameBorder"></div>


        </div>
    )
}
export default Frame