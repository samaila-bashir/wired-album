import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gallery, GalleryImage, Description } from "./photos-styled";

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
                    <Gallery className="gallery" key={photo.id}>
                        <GalleryImage src={`${photo.url}`} alt={`${photo.title}`} />
                        <Description className="description">
                        {photo.title}
                        </Description>
                    </Gallery>
                )
            }
        </div>
    );
}

export default Photos;