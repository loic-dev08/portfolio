import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Services from "../pages/Services";
import Realisations from "../pages/Realisations";
import Contact from "../pages/Contact";
import MentionsLegales from "../pages/MentionsLegales";

export default function Router({ openModal }) {
    return (
        <Routes>
            <Route path="/" element={<Hero openModal={openModal} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
    );
}