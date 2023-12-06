import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Sarah Liang
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li key="projects" className="nav-item">
              <Link to="/" className="nav-link">
                Projects
              </Link>
            </li>
            <li key="playground" className="nav-item">
              <Link to="/playground" className="nav-link">
                Playground
              </Link>
            </li>
            <li key="about" className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li key="contact" className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
