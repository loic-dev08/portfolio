import CardRealisation from "../components/CardRealisation";

import resto from "../assets/images/restaurant-japonais.jpg";
import coder from "../assets/images/coder.jpg";
import screens from"../assets/images/screens.jpg";
import seo from "../assets/images/seo.jpg";
import fresh from "../assets/images/fresh-food.jpg";
import zen from "../assets/images/espace-bien-etre.jpg";

const projets = [
    {img:resto, title:"Restaurant Japonais", description:"Création d'un site vitrine pour un restaurant japonais."},
    {img:coder, title:"Plateforme de Cours en Ligne", description:"Développement d'un éditeur de texte optimisé."},
    {img:screens, title:"Application de Gestion de Projets", description:"Maquettes responsives pour divers format d'écran."},
    {img:seo, title:"Optimisation SEO pour un Site E-commerce", description:"Améloiration du référencement d'un site professionnel."},
    {img:fresh, title:"Site Web pour une Épicerie Bio", description:"Création d'un site web pour une épicerie bio locale."},
    {img:zen, title:"Espace Bien-être en Ligne", description:"Développement d'une plateforme en ligne pour un espace bien-être."},

];

export default function Realisations() {
    return (
        <section className="container py-5">
            <h2 className="text-center mb-5">Mes Réalisations</h2>  

            <div className="row">
                {projets.map((projet, index) => (
                    <CardRealisation key={index}
                    img={projet.img}
                    title={projet.title}
                    description={projet.description}
                    />
                ))}
            </div>
        </section>
    );
}
