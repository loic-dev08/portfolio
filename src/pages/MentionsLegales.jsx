import { Helmet } from "react-helmet";

export default function MentionsLegales() {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <title>Mentions Légales</title>
            </Helmet>

            <div className="container py-5">
                <h2 className="text-center mb-4">Mentions Légales</h2>

                <div className="accordion" id="accordionMentions">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIdentite" aria-expanded="true">
                                Éditeur du site
                            </button>
                        </h2>
                        <div id="collapseIdentite" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                John Doe - Développeur web.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHebergement">
                                Hébergeur
                            </button>
                        </h2>
                        {/* id corrigé pour correspondre au data-bs-target */}
                        <div id="collapseHebergement" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Hébergement par : Nom de l'hébergeur.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredits">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseCredits" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                Images : <a href="https://www.pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a> —
                                Icônes : <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}