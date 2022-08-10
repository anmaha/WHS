import { useState, useEffect } from "react";
import axios from "axios";

import "./css/main.css";

import NavBar from "./components/NavBar";
import Images from "./components/Images";
import { Outlet } from "react-router-dom";
import NewForm from "./components/NewForm";

function App() {
  const [artist, setArtist] = useState({});

  const getArtist = async () => {
    const response = await axios.get(`/project?lastName=Hafer`);
    const artist = response.data;
    setArtist(artist);
  };

  useEffect(() => {
    getArtist();
    console.log(artist);
  }, []);

  return (
    <>
      <div className="canvas">
        <NavBar artist={artist} setArtist={setArtist} />
        <Outlet artist={artist} />
        <Images artist={artist} />
      </div>
    </>
  );
}

export default App;
