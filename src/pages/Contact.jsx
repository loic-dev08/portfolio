export default function Contact() {
  return (
    <section className="container py-5">
        <h2 className="text-center mb-4">Contactez-moi</h2>

        <div className="row">
            <div className="col-md-6">
                <form className="p-4 shadow-sm bg-light rounded"> {/* cp-4 → p-4 */}

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
                <h4 className="mb-4 mb-md-0">Coordonnées</h4> {/* mb-4-md-0 → mb-4 mb-md-0 */}
                <p>10 Rue Exemple, 75000 Paris</p>
                <p>Téléphone : 01 23 45 67 89</p>
                <p>Email : john.doe@example.com</p>

                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/place/Carnon,+Mauguio/@43.5455664,3.9751996,16z/data=!3m1!4b1!4m6!3m5!1s0x12b6bb4323d2abcd:0x2f1cdecb734b927b!8m2!3d43.5488256!4d3.9799375!16s%2Fg%2F120wktg5?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
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