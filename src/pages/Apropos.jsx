import about from "../assets/images/john-doe-about.jpg";

export default function APropos() {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={about} alt="John Doe" className="img-fluid rounded shadow-lg" />
                </div>

                <div className="col-md-6">
                    <h2>À propos</h2>
                    <p>Développeur web passionné...</p>

                    <h3>Me contacter</h3>
                    <form>
                        {/* champs obligatoires */}
                    </form>

                    <h3>Localisation</h3>
                    <iframe
                        src="https://www.google.com/maps/place/Carnon,+Mauguio/@43.5455664,3.9751996,16z/data=!3m1!4b1!4m6!3m5!1s0x12b6bb4323d2abcd:0x2f1cdecb734b927b!8m2!3d43.5488256!4d3.9799375!16s%2Fg%2F120wktg5?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Localisation Carnon"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}