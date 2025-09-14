import './Station.css'
type StationProps = {
    index: number;
    projects: string[];
    setIndex: (t: number)=>void;
}

function Station({index, projects, setIndex}: StationProps){
    return(
        <>
            <div className="stations">
                {projects.map((project, i) => (
                    <div key={i} onClick={() => {setIndex(i)}}>
                        <div id={i === index ? "active" : "inactive"} className="bubble"></div>    
                        <p className="station">
                            {project}
                        </p>
                    </div>

                ))}
            </div>
        </>
    )

}
export default Station