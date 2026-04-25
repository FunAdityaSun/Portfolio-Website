import { useState } from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/Hero'
import ProjectVideo from './components/ProjectVideo'

function App() {

  const [activeProject, setActiveProject] = useState(null)

  let videoPlayer = null;
  if (activeProject) {
    videoPlayer = <ProjectVideo activeProject={activeProject} />;
  }

  const handleProjSel = (project) => {
    setActiveProject(project);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <div className="h-8" />
      <div className="mx-auto px-10 py-12 flex flex-col md:flex-row items-start gap-12">
        <div id="home" className="flex-1 lg:sticky">
          <Hero />
          {videoPlayer}
          
        </div>
        <div id="projects" className="flex-1 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto hide-scrollbar">
          <Projects onProjectSel={handleProjSel} />
        </div>
      </div>
    </div>
  )
}

export default App