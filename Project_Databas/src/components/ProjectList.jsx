import React, { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const result = await fetch('https://localhost:7141/api/Projects');
    const data = await result.json();

    setProjects(data.content)
  }

  useEffect(() => {
    getProjects();
  }, [])

  console.log(projects)

  return (
    <>
      <section id="project-list">
        <div className="container">
          <h2>Projects</h2>
          <section className='projects-header-section'>
            <ul className='projects-header-list'>
              <li><h3>Id</h3></li>
              <li><h3>Customer</h3></li>
              <li><h3>Project</h3></li>
              <li><h3>Description</h3></li>
            </ul>
          </section>
          
          {projects.map(project => (<ProjectListItem key={project.id} project={project}/>))}
        </div>
      </section>
    </>
  )
}

export default ProjectList