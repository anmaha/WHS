import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Update = (props) => {
  const [image, setImage] = useState({});
  const [index, setIndex] = useState(-1);

  const location = useLocation();

  useEffect(() => {
    setImage(location.state.image);
    setIndex(location.state.index);
    console.log("image", image, "index", index);
  }, [location]);

  const sendFormData = async (e) => {
    const newFormData = new FormData(e.currentTarget);
    const response = await axios.put(
      `/project/update?lastName=Hafer&artworkIndex${index}`,
      newFormData
    );
    console.log(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location.state);
    sendFormData(e);
  };

  return (
    <div>
      <h2>Update</h2>
      <div className="paintingCard">
        <div>
          <img src={image.data} alt="image"></img>
        </div>
        <div className="paintingInfo">
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}>
            <label>
              Image
              <input type="file" name="file"></input>
            </label>

            <label>
              Title
              <input type="text" name="title" value={image.title}></input>
            </label>

            <label>
              Date
              <input type="text" name="date" value={image.date}></input>
            </label>

            <label>
              Media
              <input type="text" name="media" value={image.media}></input>
            </label>

            <label>
              Size
              <input type="text" name="size" value={image.size}></input>
            </label>

            <label>
              Description
              <input
                type="text"
                name="description"
                value={image.description}></input>
            </label>

            <input type="submit" value="Submit"></input>
          </form>
          {/* <p>
            <strong>
              <em>{image.title},</em> {image.year}{" "}
            </strong>
          </p>
          <p>
            {image.media}
            <br /> {image.size}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Update;
