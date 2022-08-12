import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGetArtist = () => {
    const [artist, setArtist] = useState({});
    const location = useLocation();

    useEffect(() => {
        const sessionArtist = JSON.parse(sessionStorage.getItem("artist"));
        if (sessionArtist) {
            setArtist(sessionArtist);
        } else if (location.state) {
            const { artist } = location.state;
            setArtist(artist);
            sessionStorage.setItem("artist", JSON.stringify(artist));
        }
    }, [location.state]);

    return [artist, setArtist];
}

export default useGetArtist;