import banner from "../assets/images/banner.jpg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <header className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={banner} alt="Bannière" height="40" className="me-2" />
                    JOHN DOE
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav id="navbarNav" className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav text-uppercase gap-3">
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/realisations">Réalisations</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/mentions-legales">Mentions Légales</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}