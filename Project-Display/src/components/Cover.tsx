import { useEffect } from 'react'
import './Cover.css'
import { animate } from 'animejs'
type Props = {
    isCovered: boolean
}
function Cover({isCovered}: Props) {
    useEffect(() => {
        if(!isCovered) {
                animate(".coverCover",{
                    "background-color": "rgba(251, 150, 110, 0)",
                    "backdrop-filter": "blur(0px)",
                    duration: 800
                })
                setTimeout(() => {
                    document.querySelector(".coverCover")?.remove()
                }, 800)
        }else{
            document.body.appendChild(document.querySelector(".coverCover")!)
            animate(".coverCover",{
                "background-color": "rgba(251, 150, 110, 0.8)",
                "backdrop-filter": "blur(15px)",
                duration: 800
            })
        }
        
    },[isCovered])
    return (
        <div className='coverCover'></div>
    )
}
export default Cover