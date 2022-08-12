import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import { useNavigate, useLocation } from "react-router-dom";
import useGetArtist from "../hooks/useGetArtist";

const CardComponent = ({ image }) => {
  return (
    <>
      <div className="paintingCard">
        <h3></h3>
        <div>
          <img src={image.data} alt="paintingCardArt"></img>
        </div>
        <div className="paintingCardInfo">
          <p>
            <strong>
              <em>Title: {image.title},</em> Year: {image.year}{" "}
            </strong>
          </p>
          <p>
            Medium: {image.media}
            <br /> Dimensions: {image.size}
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
};

const Images = () => {
  const [artist, setArtist] = useGetArtist();
  const [decodedImages, setDecodedImages] = useState([]);

  const getAllImages = () => {
    if (artist.images) {
      for (const image of artist.images) {
        const decodedImage = {
          ...image,
          data: `data:${image.contentType};base64,${Buffer.from(
            image.data,
            "base64"
          ).toString("base64")}`,
        };
        setDecodedImages([...decodedImages, decodedImage]);
      }
    }

    // const { artist } = location.state;
    // const artistId = artist._id;
    // console.log("artist", artist, "artistId", artistId);

    // let newDecodedImages = [];
    // for (let i = 0; i < artist.images.length; i++) {
    //   const image = artist.images[i];

    //   const decodedImage = {
    //     ...image,
    //     data: `data:${image.contentType};base64,${Buffer.from(
    //       image.data,
    //       "base64"
    //     ).toString("base64")}`,
    //   };

    //   // console.log(
    //   //   i,
    //   //   "decodedImage properties ",
    //   //   Object.getOwnPropertyNames(decodedImage)
    //   // );

    //   // newDecodedImages = [...newDecodedImages, decodedImage];
    //   // console.log("for i=", i, "newDecodedImages", newDecodedImages);
    // }
    // setDecodedImages(newDecodedImages);
  };

  useEffect(() => {
    getAllImages();
    console.log(artist);
  }, [artist]);

  return (
    <>
      <h1>Paintings</h1>
      {decodedImages &&
        decodedImages.map((image, index) => {
          return (
            <>
              <div>
                <CardComponent key={index} image={image} />
              </div>
            </>
          );
        })}
    </>
  );
};

export default Images;
