import { useState, useEffect } from "react";
import axios from "axios";

import "./css/main.css";

import NavBar from "./components/NavBar";
import Images from "./components/Images";
import { Outlet } from "react-router-dom";
import NewForm from "./components/NewForm";
import Gallery from "./components/Gallery";

function App() {
  const [artist, setArtist] = useState({});

  const getArtist = () => {
    const artist = JSON.parse(sessionStorage.getItem("artist"));
    setArtist(artist);
  };

  useEffect(() => {
    getArtist();
  }, []);

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
