export default function CardRealisation({ icon, titre, text }) {
    return (    
        <div className="col-md-4 mb-4">
            <div className="card card-hover shadow-sm p-3 h-100 text-center">
               <img src={img} alt={titre} className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{titre}</h4>
                    <p className="card-text">{desc}</p>

                    <button className="btn btn-primary btn-realisation">
                        Voir le projet
                    </button>

                </div>
            </div>
        </div>
    );
}