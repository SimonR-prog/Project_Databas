import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='header'>
      <nav>
        <Link className='btn btn-one' to={"/projects/create"}>+ Create a Project</Link>
        <Link className='btn btn-two' to={"/projects"}>Show All Projects</Link>
      </nav>
    </header>
    </>
  )
}

export default Header