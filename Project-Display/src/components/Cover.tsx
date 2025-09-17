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
                    "background-color": "rgba(33, 30, 85, 0)",
                    "backdrop-filter": "blur(0px)",
                    duration: 800
                })
                animate(".coverIcon",{
                    opacity: 0,
                    duration: 800
                })
                setTimeout(() => {
                    document.querySelector(".coverCover")?.remove()
                }, 800)
        }else{
            document.body.appendChild(document.querySelector(".coverCover")!)
            animate(".coverCover",{
                "background-color": "rgba(33, 30, 85, 0.8)",
                "backdrop-filter": "blur(15px)",
                duration: 800
            })
        }
        
    },[isCovered])
    return (
        <div className='coverCover'>
            <p className="coverIcon">🚇</p>
        </div>
    )
}
export default Cover