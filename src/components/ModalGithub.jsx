import { useEffect, useState } from "react";
import modalImg from "../assets/images/avatar-github.jpg";

export default function ModalGitHub({ isOpen, onClose }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/github-johndoe")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    if (!isOpen || !data) return null;

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content p-3">
                    {/* Bouton fermeture */}
                    <button
                        className="btn-close align-self-end"
                        onClick={onClose}
                    />
                    <img src={modalImg} alt="Illustration GitHub" className="img-fluid mb-3" />
                    <h3>{data.name}</h3>
                    <p>{data.bio}</p>
                    <p><strong>Repos publics : </strong>{data.public_repos}</p>
                    <a href={data.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Voir sur GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}