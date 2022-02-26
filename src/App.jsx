import './App.css';
import {useState,useEffect} from 'react'
import Components from './components';
import AlbumActions from './actions/albums/albums';
import {Menu,ArrowBack} from '@material-ui/icons'
import Utils from './utils/utils';

function App() {
  
  const [albums, setAlbums] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [album, setAlbum] = useState([]);
  const [selectedAlbum,setSelectedAlbum] = useState(null);
  const [rawAlbum,setRawAlbum] = useState([]);

  const handleGetAlbums = async ()=> {
      setIsLoading(true)
      const albums = await AlbumActions.getAlbums();
      if(albums.success){
          setAlbums(albums.payload)
      }else{
          setErrorMessage(albums.payload);
      }
      setIsLoading(false);
  }

  const handleGetAlbum = async (id)=> {
    setIsLoading(true)
    const album = await AlbumActions.getAlbum(id);
    if(album.success){
        setAlbum(album.payload);
        setRawAlbum(album.payload)
    }else{
        setErrorMessage(album.payload);
    }
    setIsLoading(false);
}

  useEffect(() => {   
      handleGetAlbums();
  }, []);

  const handleBackAction = ()=> {
       if(selectedAlbum){
         setSelectedAlbum(null)
       }
  }


  const DoSearch = (search)=> {
    if(!search.trim()) return setAlbum(rawAlbum)
    const searchResult = Utils.SearchAlbum(search,rawAlbum);
    setAlbum(searchResult)
  }

  const HeaderComponent = ()=> {
    const title = selectedAlbum ? selectedAlbum.title : 'WiredAlbum';
    const icon = selectedAlbum ? <ArrowBack/> : <Menu/>;
    const search = selectedAlbum ? true : false;

    return (
          <Components.AppBar
             title={title}
             IconComponent={icon}
             onClick = {handleBackAction}
             onChangeText={DoSearch.bind(null)}
             search = {search}
          />    
    )
  }

  const ErrorMessageComponent = ()=> {
    return (
      <Components.Alert onClick={handleGetAlbums} message={errorMessage}/>
    )
  }

  const SpinnerLoadingComponent = ()=> {
    return (
     <Components.Spinner/>
    )
  }

  const handleSelectedAblum = (album)=> {
      setSelectedAlbum(album);
      handleGetAlbum(album.id)
  }

  const AlbumsRenderComponent = ()=> {
    return (
      <div className="container">         
        {
            albums.map((album) => 
            <Components.Card 
              key={album.id}  
              title={album.title}
              onClick={handleSelectedAblum.bind(null,album)}
            />
          ) 
        }
      </div>  
    )
  }

  const AlbumRenderComponent = ()=> {
    return (
      <div className="container">         
        {
            album.map((album) => 
            <Components.Card 
              isAlbum={true}
              key={album.id}  
              title={album.title}
              imageUri={album.url}
            />
          ) 
        }
      </div>  
    )
  }

  

  return (
      <>
        {HeaderComponent()}
        {errorMessage && !isLoading && ErrorMessageComponent()}
        {isLoading && SpinnerLoadingComponent()}
        {!errorMessage && !isLoading && !selectedAlbum && AlbumsRenderComponent()}
        {!errorMessage && !isLoading && selectedAlbum && AlbumRenderComponent()} 
 
      </>
  );
}

export default App;
