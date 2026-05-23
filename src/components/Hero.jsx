import hero from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="hero d-flex-column justify-content-center align-items-center text-white"
    style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>

        <h1 className="text-center fw-bold">John Doe</h1>
        <h2 className="text-center mb-4 ">Développeur Web</h2>

        <button className="btn btn-danger px-4 py-2">
            data-toggle="modal" data-target="#githubModal"
            En Savoir plus

        </button>
      
    </section>
  );
}