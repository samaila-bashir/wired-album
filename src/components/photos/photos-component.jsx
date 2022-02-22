import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

const Photos = () => {

    const { id } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/albums/${id}/photos`)
            .then(response => {
                setPhotos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            {
                photos.map(photo => 
                    <div className="gallery" key={photo.id}>
                        <img src="https://via.placeholder.com/400x300.png" alt="Placeholder images" />
                        <div className="description">
                            Add the image title here...
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Photos;