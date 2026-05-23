import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";

export default function Router({ openModal }) {
    return (
        <Routes>
            <Route path="/" element={<Hero openModal={openModal} />} />
        </Routes>
    );
}