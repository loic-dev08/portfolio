export default function CardService({ icon, titre, text }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card card-hover shadow-sm p-3 h-100 text-center">
                <div className="display-4 mb-3">
                    {icon}
                </div>
                <h3 className="h5">{titre}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
