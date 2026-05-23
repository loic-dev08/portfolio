import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalGitHub from "./components/ModalGitHub";
import Router from "./components/Router";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header />
            <Router openModal={() => setIsModalOpen(true)} />
            <Footer />
            <ModalGitHub
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

export default App;