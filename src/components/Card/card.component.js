import { Albums, Title, Gallery, GalleryImage, Description, Link  } from "./card";
import PropType from "prop-types";


const CardComponent = ({isAlbum, onClick, title, imageUri}) => {


    if(!isAlbum){
        return (
            <Albums>
                <img src="/img/album.png" alt="Album cover" />
                <Title>{ title }</Title>
                <Link onClick={onClick}>View Album</Link>
            </Albums>
        );
    }

    return (
        <Gallery className="gallery">
        <GalleryImage src={`${imageUri}`} alt={`${title}`} />
        <Description className="description">
        {title}
        </Description>
    </Gallery>
    )

}

CardComponent.propTypes = {
    isAlbum: PropType.bool,
    onClick: PropType.func, 
    title: PropType.string.isRequired,
    imageUri: PropType.string 
}

export default CardComponent;

