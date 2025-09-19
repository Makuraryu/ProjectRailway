import './App.css'
import projects from './assets/projects.json'
import { useEffect,useState } from 'react';
import Station from './components/Station'
import Signal from './components/Signal'
import Footer from './components/Footer'
import Frame from './components/Frame'
import Content from './components/Content';
import Cover from './components/Cover';
function App() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isFliped, setIsFliped] = useState(false);
  const [isCover, setIsCover] = useState(true);

  async function giveIndex(target: number, setIndex: (val: number) => void, current: number) {
    setIsOpen(false);
    setIsFliped(true);
    await new Promise(res => setTimeout(res, 1500));

    let i = current;
    while (i !== target) {
        i += i < target ? 1 : -1;
        setIndex(i);
        await new Promise(res => setTimeout(res, 400));
    }
    setIsFliped(false);
    setIsOpen(true);

  }
  async function Initail(){
    await new Promise(res => setTimeout(res, 1000));
    setIsCover(false);
    await new Promise(res => setTimeout(res, 1500));
    setIsOpen(true);
  }


  useEffect(() => {
    Initail();

  }, []);

  return (
    <>
      <Content 
        name={projects[index].name}
        alias={projects[index].alias}
        link={projects[index].link}
        links = {projects[index].links as Record<string, string>}
        stack={projects[index].stack}
        tags={projects[index].tags}
        imgs={projects[index].imgs as Record<string, string>}
        description={projects[index].description}
      />
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
      <Cover isCovered={isCover}/>
      

    </>
  )
}

export default App
