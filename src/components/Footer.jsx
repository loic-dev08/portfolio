import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4">
                        <h4>John Doe</h4>
                        <p>Adresse....</p>
                        <p>Téléphone...</p>
                        <p>Email...</p>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" height="30" className="icon-footer" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" height="30" className="icon-footer" />
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" height="30" className="icon-footer" />
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/realisations">Réalisations</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h4>Dernières réalisations</h4>
                    <ul>
                        <li><a href="/realisations">Projet 1</a></li>
                        <li><a href="/realisations">Projet 2</a></li>
                        <li><a href="/realisations">Projet 3</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
