import "./Signal.css"
import { createTimeline } from 'animejs';
import { useEffect } from "react"

type Props = {
    current: number,
    nowTitle: string,
    nowLink: string,
    nowAlias: string,
    nextTitle?: string,
    nextAlias?: string,
    prevTitle?: string,
    prevAlias?: string,
    setIndex: (t: number) => void;
    giveIndex: (t: number, setIndex: (t: number) => void, current: number)=>void;
    isFliped: boolean,
}

function Signal({current, nowTitle, nowLink, nowAlias, nextTitle, nextAlias, prevTitle, prevAlias, setIndex, giveIndex, isFliped}: Props) {
    function flipback(){
        createTimeline({defaults: {duration:1500}})
        .add('.signalOff',{
            opacity: 0.8,
            duration: 500,
        },0)
        .add('.signalOff',{
            opacity: 1,
            duration: 600,
        },500)
        .add('.signalSign',{
            rotateX: 180,
            duration: 1000,
        },500)
    }
    function flipforward(){
        createTimeline({defaults: {duration:1500}})
        .add('.signalOff',{
            opacity: 0.8,
            duration: 500,
        },500)
        .add('.signalSign',{
            rotateX: 0,
            duration: 1000,
        },0)
        .add('.signalOff',{
            opacity: 0,
            duration: 500,
        },1000)
    }
    function plusIndex(){
        giveIndex(current + 1, setIndex, current)
    }
    function minusIndex(){
        giveIndex(current - 1, setIndex, current)
    }

    useEffect(() => {
        if(isFliped){
            flipback()
        }else{
            flipforward()
        }

    }, [isFliped]);
    return (
        <div className="signalSign">
                <div className="signalTitle">

                    <a className="signalStationTitle" href={nowLink}>{nowTitle}</a>
                </div>
                <div className="signalDirection">
                    <a className="signalNext signalNav" onClick={plusIndex} >{nextTitle}</a>
                    <a className="signalPrev signalNav" onClick={minusIndex}>{prevTitle}</a>
                </div>
                <div className="signalAlias">
                    <p className="signalTitleAlia signalAlia">{nowAlias}</p>
                    <p className="signalNextAlia signalAlia">{nextAlias}</p>
                    <p className="signalPrevAlia signalAlia">{prevAlias}</p>
                </div>
                <div className="signalOff"></div>
            </div>
    );
}
export default Signal