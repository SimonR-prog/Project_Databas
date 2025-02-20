import React, { useState, useEffect } from 'react'
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const result = await fetch('https://localhost:7141/api/Projects');
    const data = await result.json();

    setProjects(data)
  }

  useEffect(() => {
    getProjects();
  }, [])

  console.log(projects)

  return (
    <>
      <section id="project-list">
        <div className="container">
          {projects.map(project => (<ProjectListItem key={project.id} project={project} />))}
        </div>
      </section>
    </>
  )
}

export default ProjectList