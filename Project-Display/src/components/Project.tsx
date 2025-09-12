import './Project.css'
type Project = {
    name: string;
    alias: string;
    link: string;
    stack: string[];
    tags: string[];
    description: string;
};

function ProjectBlock({ name, alias, link, stack, tags, description }: Project){
    return (
        <>
            <div id="project">
                <div id="name">{name}</div>
                <div id="alias">{alias}</div>
                <div id="link">{link}</div>
                <div id="stack">{stack.join(", ")}</div>
                <div id="tags">{tags.join(", ")}</div>
                <div id="description">{description}</div>
            </div>
        </>
    )   
}

export default ProjectBlock