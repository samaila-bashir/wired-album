import axios from 'axios';

async function getAlbums(userId=1){
    try{
      const {data} =  await axios.get(`/users/${userId}/albums`);
      return {success: true,payload: data};
    }catch(e){
      return {success: false, payload: e.message};
    }
}

async function getAlbum(id){
    try{
      const {data} =  await axios.get(`/albums/${id}/photos`);
      return {success: true,payload: data};
    }catch(e){
      return {success: false, payload: e.message};
    }
}


const Actions = {
    getAlbums,
    getAlbum
}

export default Actions