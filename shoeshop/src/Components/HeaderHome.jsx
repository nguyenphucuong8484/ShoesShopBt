import React from 'react'
import { NavLink } from "react-router-dom";
const HeaderHome = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" href="/">Cybersoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
    <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-white" : "nav-link"
              }
              to="/ProductFeature"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
      <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-white" : "nav-link"
              }
              to="#"
              aria-current="page"
            >
              Men <span className="visually-hidden">(current)</span>
            </NavLink>
      <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-white" : "nav-link"
              }
              to="#"
              aria-current="page"
            >
              Women <span className="visually-hidden">(current)</span>
            </NavLink>
      <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-white" : "nav-link"
              }
              to="#"
              aria-current="page"
            >
              Kid <span className="visually-hidden">(current)</span>
            </NavLink>
     <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-white" : "nav-link"
              }
              to="#"
              aria-current="page"
            >
              Sport <span className="visually-hidden">(current)</span>
            </NavLink>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
     
    </ul>

    <div className="d-flex align-items-center ms-auto gap-3"> 
  

  <div className="d-flex align-items-center text-white cursor-pointer me-2">
    <i className="bi bi-search fs-5 me-2"></i>
    <i className="d-none d-md-inline me-3">Search</i>
    <div className="position-relative">
      <i className="bi bi-cart3 fs-4"></i>
      <span className="badge rounded-pill">(1)</span>
    </div>
  </div>

  
  <NavLink
    className={({ isActive }) =>
      isActive ? "nav-link text-white fw-bold" : "nav-link text-white-50"
    }
    to="/login"
    style={{ paddingRight: '1px' }}
  >
    Login
  </NavLink>

  <NavLink
    className={({ isActive }) =>
      isActive ? "nav-link text-white fw-bold" : "nav-link text-white-50"
    }
    to="/profile"
  >
    Register
  </NavLink>
  
</div>
    </div>
</nav>
</div>
  )
}

export default HeaderHome