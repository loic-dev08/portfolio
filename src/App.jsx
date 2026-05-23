import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalGitHub from "./components/ModalGitHub";
import Router from "./components/Router";


function App() {
    return (
      <>

       <Header />
            <Router />
            <Footer />

            {/* Modal GitHub */}
            <ModalGitHub />

      </>
        
    );
}

export default App;
