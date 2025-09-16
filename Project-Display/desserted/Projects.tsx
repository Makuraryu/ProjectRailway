import React, { useEffect,useState } from 'react';
import { createTimeline, onScroll } from 'animejs';
import './Projects.css'
import Project from './Project';
import Railway from './Railway';

type Project = {
    name: string;
    alias: string;
    link: string;
    stack: string[];
    tags: string[];
    description: string;
};

type Data = {
    viewwidth: number;
    index: number;
    plusIndex: () => void;
    minusIndex: () => void;
    data : Project[];
}



function Projects({ viewwidth, index, data, plusIndex, minusIndex }: Data){
    const height = 100,centerwidth = viewwidth / 0.7,kabewidth = 75,wholewidth = centerwidth + (2 * kabewidth);
    const offset = (100 - wholewidth) / 2,viewoffset = (wholewidth - viewwidth) / 2;
    let [openpercent, setOpenpercent] = useState(0);
    let [doorinsha, setdoorinsha] = useState(0.05);

    useEffect(() => {


        createTimeline({defaults: {duration:5000}})
        .add({
            duration:200,
            onUpdate: () => {
                setOpenpercent(0)
            }
        }, 0)
        .add({
            duration:200,
            onUpdate: () => {
                setdoorinsha(0.05)
            }
        }, 800)
        .add('.projects',{
            duration: 3000,
            x: index * wholewidth + "vw",
        }, 1000)
        .add({
            duration:200,
            onUpdate: () => {
                setdoorinsha(0.2)
            }
        }, 4000)
        .add({
            duration:200,
            onUpdate: () => {
                setOpenpercent(1)
            }
        }, 4500)

 


    },[index])
    return (
        <>
            <div className="projects" style={{right: offset + "vw"}}>
                {data.map((datum, i) => (
                        <div className="project" key={i} style={{width: wholewidth + "vw"}}>
                            <div id="content" style={{left: viewoffset + "vw", width: viewwidth + "vw"} as React.CSSProperties}>
                                <Project proj={datum} plusIndex={plusIndex} minusIndex={minusIndex}/>
                            </div>

                            
                            <Railway height={height}  doorwidth={viewwidth} kabewidth={kabewidth} openpercent={openpercent} doorinsha={doorinsha}/>

                        </div>
                ))}

            </div>

        </>
    ) 

}

export default Projects