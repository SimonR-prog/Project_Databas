import React from 'react'

const ProjectListItem = ({project}) => {
  return (
    <>
    <div>{project.id}</div>
    <div>{project.ProjectName}</div>
    <div>{project.customer.customerName}</div>
    </>
  )
}

export default ProjectListItem