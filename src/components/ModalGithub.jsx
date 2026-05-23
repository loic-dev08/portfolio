import { useEffect, useState } from "react";
import modalImg from "../assets/images/avatar-github.jpg";

export default function ModalGithub() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/ton-username-ici")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    if (!data) return null;

    return (
        <div className="modal fade" id="githubModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content p-3">
                    <img src={modalImg} alt="Illustration GitHub" className="img-fluid mb-3" />
                    <h3>{data.name}</h3>
                    <p>{data.bio}</p>
                    <p>Repos publics : {data.public_repos}</p>
                    <a href={data.html_url} target="_blank" rel="noreferrer">Voir sur GitHub</a>
                </div>
            </div>
        </div>
    );
}