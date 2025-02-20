import React from 'react'

const ProjectListItem = ({project}) => {
  return (
    <>
      <section className="projects-list-section">
        <ul className="projects-u-list">
          <li className="projects-list-item">{project.id}</li>
          <li className="projects-list-item">{project.customer.customerName}</li>
          <li className="projects-list-item">{project.projectName}</li>
          <li className="projects-list-item">{project.description}</li>
        </ul>
      </section>



    </>
  )
}

export default ProjectListItem





// <div>{project.id}</div>
// <div>{project.ProjectName}</div>
// <div>{project.customer.customerName}</div>
// <div>{project.description}</div>

