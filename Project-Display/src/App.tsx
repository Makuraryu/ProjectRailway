import Project from './components/Project'
import projects from './assets/projects.json'
function App() {
  

  return (
    <>
      {projects.map((project) => (
        <Project 
          key={project.name}
          name={project.name}
          alias={project.alias}
          link={project.link}
          stack={project.stack}
          tags={project.tags}
          description={project.description}
        />
      ))}
    </>
  )
}

export default App
