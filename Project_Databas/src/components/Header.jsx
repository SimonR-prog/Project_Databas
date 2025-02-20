import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='header'>
      <h2>Projects</h2>
      <nav>
        <Link className='btn btn-one' to={"/projects/create"}>+ Create Project</Link>
        <Link className='btn btn-two' to={"/projects"}>Show Projects</Link>
        <Link className='btn btn-two' to={"/projects/update"}>Update Project</Link>
      </nav>
    </header>
    </>
  )
}

export default Header