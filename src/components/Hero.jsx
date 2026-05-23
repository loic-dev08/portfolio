import hero from "../assets/images/hero-bg.jpg";

export default function Hero({ openModal }) {
    return (
        <section
            className="hero d-flex flex-column justify-content-center align-items-center text-white"
            style={{
                backgroundImage: `url(${hero})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="text-center">John Doe</h1>
            <h2 className="text-center mb-4">Développeur Web</h2>
            <button className="btn btn-danger text-white px-4 py-2" onClick={openModal}>
                En savoir plus
            </button>
        </section>
    );
}