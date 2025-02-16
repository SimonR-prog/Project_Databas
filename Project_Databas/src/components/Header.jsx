import React from 'react'
import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header>
            <NavLink to="/projects">Projects</NavLink>
            <br />
            <NavLink to="/create">CreateProjects</NavLink>
        </header>
    </div>
  )
}

export default Header