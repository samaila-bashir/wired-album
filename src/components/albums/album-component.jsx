import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                
                    <div className="album" key={album.id}>
                        <img src={albumImg} alt="Album cover" />
                        <Link to={`/photos/${album.id}`}>{ album.title }</Link>
                    </div>
                
            ) }
        </div>        
    );

}

export default Album;