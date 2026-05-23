export default function Contact() {
  return (
    <section className="container py-5">
        <h2 className="text-center mb-4">Contactez-moi</h2>

        <div className="row">
            <div className="col-md-6">
                <form className="p-4 shadow-sm bg-light rounded">

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                </form>
            </div>

            <div className="col-md-6">
                <h4 className="mb-4 mb-md-0">Coordonnées</h4>
                <p>Adresse : Rue de l'Aigoual, 34130 Carnon</p>
                <p>Téléphone : 01 23 45 67 89</p>
                <p>Email : john.doe@example.com</p>

                <iframe
                    title="OpenStreetMap"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=3.9842,43.5492,4.0042,43.5532&layer=mapnik&marker=43.5512,3.9942"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>
        </div>
    </section>
  );
}