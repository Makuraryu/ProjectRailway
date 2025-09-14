import projects from './assets/projects.json'
import { useEffect,useState } from 'react';
import Projects from './components/Projects'
import Station from './components/Station'
import './App.css'
import Signal from './components/Signal'
function App() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    
  }, []);
  function plusIndex(){
    setIndex((index + 1) % projects.length)
  }
  function minusIndex(){
    setIndex((index + projects.length - 1) % projects.length)
  }
  function giveIndex(i : number){
    setIndex(i)
  }
  return (
    <>

      {/* <Projects viewwidth={40} index={index} data={projects} plusIndex={plusIndex} minusIndex={minusIndex}/>
      
      <Station index={index} projects= {projects.map(p => p.name)} setIndex={giveIndex} />

      <div style={{top: '30vh',position: 'absolute'}}>
        index: {index}
        <button onClick={plusIndex}>+</button>
        <button onClick={minusIndex}>-</button>
      </div>  */}

      
      <Signal now={{title:projects[0].name, link:projects[0].link, alias:projects[0].alias}} next={{title:projects[1].name, link:projects[1].link, alias:projects[1].alias}} prev={{title:projects[4].name, link:projects[4].link, alias:projects[4].alias}} />

    </>
  )
}

export default App
