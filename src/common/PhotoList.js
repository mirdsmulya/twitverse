

import React from 'react';
import {Link} from 'react-router';


const PhotoList = ({album, photo, profileData}) => {
    let coverPhoto = photo.link;
    let username = profileData.username;
    let linkAlbum = "/album/"+username+"/"+album.id+"/"+photo.id;
    return (
        <div className=''>
			
            <Link to={linkAlbum}>
            <div className="price">
            <h4>{photo.title}</h4>
            <img className="img" src={coverPhoto} alt={photo.title}></img>
            </div>
            </Link >

				
        </div>
    );
};
export default PhotoList;