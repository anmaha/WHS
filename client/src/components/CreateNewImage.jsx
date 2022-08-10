import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Upload = (props) => {
  const location = useLocation();

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const sendFormData = async (e) => {
    console.log("location", location);
    console.log("e", e);
    const { artist, setArtist } = location.state;
    const artistId = artist._id;
    const newFormData = new FormData(e.currentTarget);
    const response = await axios.post(
      `/project/create?artistId=${artistId}`,
      newFormData
    );
    if (response.data) {
      setUploadSuccess(true);
      setArtist(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(e);
  };

  return (
    <div>
      <h2>Add New Art</h2>
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label>
          Image
          <input type="file" name="file"></input>
        </label>

        <label>
          Title
          <input type="text" name="title"></input>
        </label>

        <label>
          Date
          <input type="text" name="date"></input>
        </label>

        <label>
          Media
          <input type="text" name="media"></input>
        </label>

        <label>
          Size
          <input type="text" name="size"></input>
        </label>

        <label>
          Description
          <input type="text" name="description"></input>
        </label>

        <input type="submit" value="Submit"></input>
      </form>

      <p>{uploadSuccess ? "Upload Success" : ""}</p>
    </div>
  );
};

export default Upload;
