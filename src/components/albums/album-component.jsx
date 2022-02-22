import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import albumImg from "../../img/album.png";
import { Albums, Title, AlbumLink } from "./album-styled";

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
                
                <Albums className="album" key={album.id}>
                    <img src={albumImg} alt="Album cover" />
                    <Title>{ album.title }</Title>
                    <Link to={`/photos/${album.id}`}>View Album</Link>
                </Albums>
                
            ) }
        </div>        
    );

}

export default Album;