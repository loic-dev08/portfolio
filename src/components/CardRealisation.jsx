export default function CardRealisation({ img, title, description }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-hover shadow-sm h-100">
                <img src={img} alt={title} className="card-img-top" />
                <div className="card-body text-center">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary btn-realisation">
                        Voir le projet
                    </button>
                </div>
            </div>
        </div>
    );
}