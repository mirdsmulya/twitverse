

import React from 'react';
import {Link} from 'react-router';


const AlbumList = ({album, profileData}) => {
    let coverPhoto = album.photos[0].link;
    let username = profileData.username;
    let linkAlbum = "/album/"+username+"/"+album.id;
    return (
        <div className=''>
			
            <Link to={linkAlbum}>
            <div className="price">
            <h4>{album.name}</h4>
            <img className="img" src={coverPhoto} alt={album.name}></img>
            </div>
            </Link >

 
                
		
				
        </div>
    );
};
export default AlbumList;