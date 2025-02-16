import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CreateProjects = () => {
  const [newProjectNumber, setNewProjectNumber] = useState(100);

  useEffect(() => {
    setNewProjectNumber(newProjectNumber + 1)

  }, [])


  return (
    <>
      <section className='section-title'>
        <div className="container">
          <h1>Project {newProjectNumber} - Create new project</h1>
          <nav>
            <Link className='btn btn-one' to={"/projects/create"}>+ Create Project</Link>
            <Link className='btn btn-two' to={"/projects/create"}>Show Projects</Link>
          </nav>
        </div>
      </section>
    
    </>
  )
}

export default CreateProjects