import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="container py-5">
                <h2 className="text-center mb-4">À propos </h2>

                <p className="text-center">
                    Je suis un développeur web passionné par la création d'applications web modernes et réactives.
                </p>
            </section>
        </>
    );
}
