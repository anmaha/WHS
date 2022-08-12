import React, { useState, useEffect } from 'react'
import { Buffer } from 'buffer';
import axios from 'axios';

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

const Gallery = () => {
    const [artists, setArtists] = useState([]);

    const getAllArtists = async () => {
        const response = await axios.get('project/allimages');
        console.log(response.data);
        if (response.data) {
            const responseArtists = response.data;
            console.log("responseArtists", responseArtists);
            for (const artist of responseArtists) {
                for (let i = 0; i < artist.images.length; i++) {
                    const image = artist.images[i];
                    const decodedImage = {
                        ...image,
                        data: `data:${image.contentType};base64,${Buffer.from(
                            image.data,
                            "base64"
                        ).toString("base64")}`,
                    };
                    artist.images[i] = decodedImage;
                }
            }
            setArtists(responseArtists);
        }
    };

    useEffect(() => {
        getAllArtists();
    }, []);

    return (
        <>
            <h1>Gallery</h1>
            {
                artists && artists.map((artist, index) => (
                    <div key={index}>
                        <h3>{artist.firstName} {artist.lastName}</h3>
                        {artist.images.map((image, index) => (
                            <div>
                                <CardComponent key={index} image={image} />
                            </div>
                        ))}
                    </div>
                ))
            }
        </>
    );
};
export default Gallery