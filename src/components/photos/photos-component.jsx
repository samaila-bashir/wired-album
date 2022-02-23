import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gallery, GalleryImage, Description } from "./photos-styled";
import Navbar from "../navbar/Navbar-component";
import AlbumActions from '../../actions/albums/albums';

const Photos = () => {

    const { id } = useParams();
    const [photos, setPhotos] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    // const [filter, setFilter] = useState([]);

    const handleGetAlbum = async ()=> {
        const albums = await AlbumActions.getAlbum(id);
        if(albums.success){
            setPhotos(albums.payload)
        }else{
            setErrorMessage(albums.payload);
        }
    }
    useEffect(() => {
       handleGetAlbum();
    }, []);

    return (
       <>
        <Navbar showSearch={true} />
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
        </>
    );
}

export default Photos;