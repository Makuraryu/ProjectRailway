import './Content.css'
type project = {
    name: string;
    alias: string;
    link: string;
    links: Record<string, string>;
    stack: string[];
    tags: string[];
    imgs?: Record<string, string>;
    description: string;
}
function Content({name, alias, links, stack, tags, imgs,description}: project){
    return(
        <div className="contentContent">
            <div className="contentSlot">
                <div className="contentInformation">
                    <div className="contentBasic">
                        <div className="contentName">{name}</div>
                        <div className="contentAlias">{alias}</div>
                    </div>

                    <div className="contentTags">
                        <p className="contentTagsTitle">Tags</p>
                        {tags && tags.map((tag)=>(
                            <p key={tag}className="contentTag">{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="contentLine"></div>

                <div className="contentDescription">{description}</div>
                <div className="contentLine"></div>

                <p className="contentStacksTitle">Tech Stack</p>
                <div className="contentStacks">
                    {stack && stack.map((stack)=>(
                        <p key={stack} className="contentStack">{stack}</p>
                    ))}
                </div>
                <div className="contentLinks">
                    {Object.entries(links).map(([k, u]) => (
                        <a key={k}href={u} className='contentLink'>{k}</a>
                    ))}
                </div>
                <div className="contentLine"></div>






                {imgs && Object.entries(imgs).map(([desc, src], i) => (
                    <div key={i}>
                        <img src={src} alt={desc} className="contentImg" />
                        <p className="contentImgDesc">{desc}</p>
                    </div>
                ))}
            </div>
         </div>  
    )
}
export default Content