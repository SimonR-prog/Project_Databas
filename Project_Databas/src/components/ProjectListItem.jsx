import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({ project }) => {
  return (
    <>
      <section className="projects-list-section">
        <ul className="projects-u-list">
          <li className="projects-list-item">{project.id}</li>
          <li className="projects-list-item">{project.customer.customerName}</li>
          <li className="projects-list-item">{project.projectName}</li>
          <li className="projects-list-item">{project.description}</li>

          <li><Link to={`/Projects/${project.id}`}><button className='btn btn-two'>Edit</button></Link></li>
          
          
        </ul>
      </section>



    </>
  )
}

export default ProjectListItem