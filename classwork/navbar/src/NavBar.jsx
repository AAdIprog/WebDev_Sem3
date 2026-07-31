import {Link}  from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
         <nav className="nav">
      <ul>
        <li>
          <Link to="/">
          Home
          </Link>
        </li>
        <li>
          <Link to="/about">
          About
          </Link>
        </li>
        <li>
          <Link to="/list">
          Product List
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar