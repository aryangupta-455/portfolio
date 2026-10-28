import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar md:navbar-expand bg-warning">
        <div className="container-fluid p-2">
          <Link className="navbar-brand" to="/"><h3>Aryan Gupta</h3></Link>
          <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

        <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
          </div>

          <div className="drawer-body mb-2 ms-auto">
            <ul className="nav navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>

              <li className="nav-item"><Link className="nav-link active" to="/projects">Projects</Link></li>

              <li className="nav-item">
                <button className="nav-link active" type="button" data-bs-toggle="menu" aria-expanded="false">Menu</button>
                  <div className="menu">
                    <a className="menu-item" href="#">Action</a>
                    <a className="menu-item" href="#">Another action</a>
                    <hr className="menu-divider"/>
                    <a className="menu-item" href="#">Something else here</a>
                  </div>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </dialog>

        </div>
      </nav>
    </div>
  )
}
