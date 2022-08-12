import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";

import "./css/main.css";

function App() {
  const [artist, setArtist] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setArtist(location.state.artist);
    }
    console.log(location.state);
  }, [location.state]);

  return (
    <>
      <div className="canvas">
        <NavBar artist={artist} setArtist={setArtist} />
        <Outlet artist={artist} />
        <Gallery />
      </div>
    </>
  );
}

export default App;
