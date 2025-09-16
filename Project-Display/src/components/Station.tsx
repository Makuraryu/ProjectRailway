import { useEffect } from 'react';
import './Station.css'
type StationProps = {
    index: number;
    projects: string[];
    setIndex: (t: number) => void;
    giveIndex: (t: number, setIndex: (t: number) => void, current: number)=>void;
}



function Station({index, projects, setIndex, giveIndex}: StationProps){
    useEffect(() => {
    })
    return(
        <>
            <div className="stationStations">
                {projects.map((project, i) => (
                    <div key={i} onClick={() => {giveIndex(i, setIndex, index)}}>
                        <div id={i === index ? "stationActive" : "stationInactive"} className="stationBubble"></div>    
                        <span className="stationStation">
                            {project}
                        </span>
                    </div>

                ))}
            </div>
        </>
    )

}
export default Station