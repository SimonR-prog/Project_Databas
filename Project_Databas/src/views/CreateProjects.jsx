import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CreateProjects = () => {
  const [newProjectNumber, setNewProjectNumber] = useState();

  useEffect(() => {
    setNewProjectNumber(100)

  }, [])


  return (
    <>
      <section className='section-title'>
        <div className="container">
          <h1>Project {newProjectNumber} - Skapa nytt</h1>
          <nav>
            <Link className='btn btn-gray' to={"/projects/create"}>Gray</Link>
            <Link className='btn btn-yellow' to={"/projects/create"}>Yellow</Link>
          </nav>



        </div>
      </section>
    
    </>
  )
}

export default CreateProjects