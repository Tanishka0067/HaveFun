import { useState, useEffect } from "react";
import Loader from "./pages/Loader/Loader";
import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./pages/Nav/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DownloadButton from "./pages/Home/DownloadButton";
import star from "./assets/star3.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timeoutId);

  }, []);
  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = document.getElementById("audio");
      if (audio) {
        audio.play().catch((e) => {
          console.error("Autoplay failed:", e);
        });
      }
      // Remove listener after first interaction
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

 return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ backgroundImage: `url(${star})` }}>
          {/* Infinite loop audio (autoplayed after click) */}
          <audio src="audio.mp3" id="audio" loop />
          <Nav />
          <Home />
          <About />
          <Contact />
        </div>
      )}
    </>
  );
}


export default App;