import { useEffect } from 'react'
import './Cover.css'
import { animate } from 'animejs'
type Props = {
    isCovered: boolean,
    content: string
}
function Cover({isCovered, content}: Props) {
    useEffect(() => {
        if(!isCovered) {
            animate(".coverCover",{
                "background-color": "rgba(251, 150, 110, 0)",
                "backdrop-filter": "blur(0px)",
                duration: 800
            })
        }else{
            animate(".coverCover",{
                "background-color": "rgba(251, 150, 110, 0.8)",
                "backdrop-filter": "blur(15px)",
                duration: 800
            })
        }
        
    },[isCovered])
    return (
        <div className='coverCover'>
            <p>{ content }</p>
        </div>
    )
}
export default Cover