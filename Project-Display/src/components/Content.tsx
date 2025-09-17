import './Content.css'
type project = {
    name: string;
    alias: string;
    link: string;
    stack: string[];
    tags: string[];
    description: string;
}
function Content({name, alias, link, stack, tags, description}: project){
    return(
        <div className="contentContent">
            <div className="contentSlot">
                <div className="contentName">{name}</div>
                <div className="contentAlias">{alias}</div>
                <div className="contentLink"><a href={link}>{link}</a></div>
                <div className="contentStack">{stack}</div>
                <div className="contentTags">{tags}</div>
                <div className="contentDescription">{description}</div>
            </div>
         </div>  
    )
}
export default Content