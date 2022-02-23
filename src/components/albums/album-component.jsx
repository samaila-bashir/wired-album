import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import albumImg from "../../img/album.png";
import { Albums, Title } from "./album-styled";
import Navbar from "../navbar/Navbar-component";
import AlbumActions from '../../actions/albums/albums';
import Components from '../../components/index';



const Album = () => {

    const [albums, setAlbums] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');


    const handleGetAlbums = async ()=> {
        const albums = await AlbumActions.getAlbums();
        if(albums.success){
            setAlbums(albums.payload)
        }else{
            setErrorMessage(albums.payload);
        }
    }

    useEffect(() => {   
        handleGetAlbums();
    }, []);

    return (
        <>
            <Navbar showSearch={false} />
            <div className="container">
                {errorMessage && 
                <Components.Alert 
                  onClick={handleGetAlbums} 
                  message={errorMessage}
                 />}
                {!errorMessage && albums.map(album => 
                    
                    <Albums className="album" key={album.id}>
                        <img src={albumImg} alt="Album cover" />
                        <Title>{ album.title }</Title>
                        <Link to={`/photos/${album.id}`}>View Album</Link>
                    </Albums>
                    
                ) }
            </div>       
        </> 
    );

}

export default Album;

