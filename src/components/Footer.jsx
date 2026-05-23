import twitter from "../assets/images/twitter-x.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row text-center text-md-start">

                    {/* Colonne 1 — Infos contact */}
                    <div className="col-md-4 mb-3">
                        <h4>John Doe</h4>
                        <p>Rue de l'Aigoual, 34130 Carnon</p>
                        <p>01 23 45 67 89</p>
                        <p>Email : john.doe@example.com</p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" height="30" />
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" height="30" />
                            </a>
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" height="30" />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 — Navigation */}
                    <div className="col-md-4 mb-3">
                        <h4>Navigation</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="text-white text-decoration-none">Accueil</NavLink></li>
                            <li><NavLink to="/services" className="text-white text-decoration-none">Services</NavLink></li>
                            <li><NavLink to="/realisations" className="text-white text-decoration-none">Réalisations</NavLink></li>
                            <li><NavLink to="/contact" className="text-white text-decoration-none">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Colonne 3 — Dernières réalisations */}
                    <div className="col-md-4 mb-3">
                        <h4>Dernières réalisations</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/realisations" className="text-white text-decoration-none">Restaurant Japonais</NavLink></li>
                            <li><NavLink to="/realisations" className="text-white text-decoration-none">Fresh Food Bio</NavLink></li>
                            <li><NavLink to="/realisations" className="text-white text-decoration-none">Espace Bien-être</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}