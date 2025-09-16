import { useEffect } from 'react';
import { onScroll } from 'animejs';
import './Project.css'

type Project = {
    name: string;
    alias: string;
    link: string;
    stack: string[];
    tags: string[];
    description: string;
};

type In = {
    proj: Project;
    plusIndex: () => void;
    minusIndex: () => void;
}

function project({proj: {name, alias, link, stack, tags, description}, plusIndex, minusIndex}: In){
    useEffect(() => {

        
    })
    return(
        <>  
            <div className="proj">
                <div className="project-name">{name}</div>
                <div className="project-alias">{alias}</div>
                <div className="project-link"><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></div>
                <div className="project-stack">{stack}</div>
                <div className="project-tags">{tags}</div>
                <div className="project-description">{description}</div>

            </div>
        </>
    )
}

export default project