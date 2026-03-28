import { Link } from "react-router-dom";
import "./css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm header">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center logo-section"
          to="/"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo-img"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            {[
              { name: "Home", path: "/" },
              { name: "Markets", path: "/markets" },
              { name: "Grain", path: "/grain" },
              { name: "Merchant", path: "/merchant-login" },
              { name: "Farmer", path: "/farmer-login" },
              { name: "About", path: "/about" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link nav-link-custom"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;