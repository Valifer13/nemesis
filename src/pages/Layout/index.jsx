import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
        <div className="container-fluid navbar-content">
            <Link to="/" className="brand-logo">
              <img
                src={require("../../assets/icon/Nemesis Black.png")}
                alt="Nemesis Logo"
              />
              <p className="navbar-brand text-decoration-none" href="/">
                Nemesis
              </p>
            </Link>
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link text-center active" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link text-center" href="/service">
                  Service
                </a>
                <a className="nav-link text-center" href="/product">
                  Product
                </a>
                <a className="nav-link text-center" href="/about">
                  About
                </a>
                <a className="nav-link text-center" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
