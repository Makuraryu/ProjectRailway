import './App.css'
import projects from './assets/projects.json'
import { useEffect,useState } from 'react';
import Station from './components/Station'
import Signal from './components/Signal'
import Footer from './components/Footer'
import Frame from './components/Frame'
function App() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isFliped, setIsFliped] = useState(false);

  function plusIndex(){
    setIndex((index + 1) % projects.length)
  }
  function minusIndex(){
    setIndex((index + projects.length - 1) % projects.length)
  }

  async function giveIndex(target: number, setIndex: (val: number) => void, current: number) {
    setIsOpen(false);
    setIsFliped(true);
    await new Promise(res => setTimeout(res, 1500));

    let i = current;
    while (i !== target) {
        i += i < target ? 1 : -1;
        setIndex(i);
        await new Promise(res => setTimeout(res, 400)); // 每步延迟 100ms
    }
    setIsFliped(false);
    setIsOpen(true);

  }


  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      
      <div className="header">
        <Signal 
          current={index}
          nowTitle = {projects[index].name} 
          nowLink={projects[index].link} 
          nowAlias={projects[index].alias} 
          nextTitle={projects[index + 1] ? projects[index + 1].name : undefined}
          nextAlias={projects[index + 1] ? projects[index + 1].alias : undefined}
          prevTitle={projects[index - 1] ? projects[index - 1].name : undefined}
          prevAlias={projects[index - 1] ? projects[index - 1].alias : undefined} 
          setIndex={setIndex}
          giveIndex={giveIndex}
          isFliped={isFliped}
        />

        <Station index={index} projects= {projects.map(p => p.name)} setIndex={setIndex} giveIndex={giveIndex}/>
      </div>

      
      <Footer />
      <Frame isOpen={isOpen}  />

      

    </>
  )
}

export default App
