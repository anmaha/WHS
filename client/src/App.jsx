import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import useGetArtist from "./hooks/useGetArtist";

import "./css/main.css";

function App() {
  const [artist, setArtist] = useGetArtist();

  return (
    <>
      <div className="canvas">
        <NavBar artist={artist} setArtist={setArtist} />
        <Outlet artist={artist} />
      </div>
    </>
  );
}

export default App;
