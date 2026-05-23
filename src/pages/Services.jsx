import CardServices from "../components/CardServices";
import {CodeSlash, Globe, Palette } from "react-bootstrap-icons";

export default function Services() {
    return (
        <section className="container py-5">
            <h2 className="text-center mb-5">Mes Services</h2>

            <div className="row">
                <CardServices
                    icon={<CodeSlash/>}
                    titre="Développement Web"
                    texte="Création de sites modernes, réactifs et optimisés."
                />

                <CardServices
                    icon={<Globe/>}
                    titre="Référencement SEO"
                    texte="Optimisation pour les moteurs de recherche et stratégies de marketing digital."
                />
                <CardServices
                    icon={<Palette/>}
                    titre="Web Design"
                    texte="Création d'interfaces claires; élégantes et adaptées aux besoins de vos utilisateurs."
                />
            </div>

            </section>
        
    );
}
