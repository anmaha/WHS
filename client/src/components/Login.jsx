import React, { useState, useEffect } from "react";
import NewForm from "./NewForm";
import axios from "axios";

const LogIn = () => {
  const [formData, setFormData] = useState({});
  const [artist, setArtist] = useState([]);

  const getAllArtists = async () => {
    const response = await axios.get(`/project?lastName=Hafer`);
    // console.log(response.data);
    setArtist(response.data);
  };

  useEffect(() => {
    getAllArtists();
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    [e.target.id] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handleSubmit");
  };

  return (
    <div>
      <h1> Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input id="email" />
        <input type="submit" value="Submit" />
      </form>
      <h3> Adiministrate Database or login</h3>
      <div>
        <h3>
          {artist.firstName} {artist.lastName}
        </h3>
      </div>
      <NewForm artist={artist} />
    </div>
  );
};

export default LogIn;
