import {Routes, Route} from 'react-router';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';    
import MentionsLegales from './pages/MentionsLegales';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Réalisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
    );
}