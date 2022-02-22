import axios from 'axios';
import { useEffect, useState } from 'react';

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
        <div>
            <ul>
                {
                    albums.map(album => <li key={album.id}>{ album.title }</li>)
                }
            </ul>
        </div>
    );

}

export default Album;