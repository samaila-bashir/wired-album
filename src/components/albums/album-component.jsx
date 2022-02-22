import axios from 'axios';
import { useEffect, useState } from 'react';
import albumImg from "../../img/album.png";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

const Album = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axiosInstance.get("/users/1/albums")
            .then(response => {
                setAlbums(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            { albums.map(album => 
                <div className="album">
                    <img src={albumImg} alt="Album cover" />
                    <h1>{ album.title }</h1>
                </div>
            ) }
        </div>        
    );

}

export default Album;