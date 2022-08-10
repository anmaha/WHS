import { useEffect, useState } from "react";
import axios from "axios";
//import NavBar from "./components/NavBar";

function NewForm(props) {
  const [files, setFiles] = useState([]);

  const [imageData, setImageData] = useState({
    file: null,
    // media: "test",
    // size: "test",
    // title: "test",
    // date: "test",
    // description: "test",
  });

  //   const [artist, setArtist] = useState({
  //     firstName: "test",
  //     lastName: "test",
  //     images: [],
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();

    // for (let key in artist) {
    //   formData.append(key, artist[key]);
    // }

    // formData.append("file", file);

    // const response = await axios.post("/project/create", artist);
    //console.log(response.data);

    // const res = await axios.get("/projects/upload");
    // setImage(res.data);
    // console.log(image);
  };

  //   useEffect(() => {
  //     const newArtist = { ...artist, images: files };
  //     setArtist(newArtist);
  //   }, [files]);

  const handleOnChange = (e) => {
    e.preventDefault();
    // const newArtist = { ...artist, [e.target.name]: e.target.value };
    // setArtist(newArtist);
    //newArtist.images = e.target.files;

    // setFile(e.target.files[0]);

    // setState({
    //   [e.target.name]: e.target.value,
    // });
    // console.log("Summary before change:", summary);
    // const newSummary = { ...summary };
    // newSummary.total = 20;
    // setSummary(newSummary);
    // console.log("Summary After change:", summary);
  };

  const handleOnChangeFile = (e) => {
    e.preventDefault();
    const newImage = {
      ...imageData,
      //   [e.target.name]: e.target.value,
      file: e.target.files[0],
    };
    setImageData(newImage);
    // console.log(newImage);
  };

  const handleOnSubmitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", imageData.file);

    const response = await axios.post(
      `/project/upload?artistId=${props.artist._id}`,
      formData
    );
    console.log("updated artist", response.data);

    // const res = await axios.get("/projects/upload");
    // setImage(res.data);
    // console.log(image);
  };

  return (
    <div>
      <h2>Artist</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={handleOnChange}></input>
          </label>
        </p>
        <p>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={handleOnChange}></input>
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>

      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleOnSubmitFile}>
        <p>
          <label>
            Images
            <input
              type="file"
              name="file"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>
        <p>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>
        <p>
          <label>
            Date
            <input
              type="text"
              name="date"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>

        <p>
          <label>
            Media
            <input
              type="text"
              name="media"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>
        <p>
          <label>
            Size
            <input
              type="text"
              name="size"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>

        <p>
          <label>
            Description
            <input
              type="text"
              name="description"
              onChange={handleOnChangeFile}></input>
          </label>
        </p>
        <p>
          <input type="submit" value="Submit"></input>
        </p>
      </form>

      {/* <img src={image} alt="preview" /> */}
    </div>
  );
}

export default NewForm;
