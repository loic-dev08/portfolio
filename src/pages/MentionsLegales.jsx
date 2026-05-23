import {Helmet} from "react-helmet";

export default function MentionsLegales() {
    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <title>Mentions Légales</title>
            </Helmet>

            <h1>Mentions Légales</h1>
            
            <div className="accordeon">
                
                <p>Contenu des mentions légales...</p>
            </div>
        </>
    );
}
