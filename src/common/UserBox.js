import React from 'react';


const UserBox = ({userData, deleteButton}) => {
    return(
        <div className="menu-box"> 
            <div className="border">
            <img className="img" src={userData.profilePicture} alt={userData.name}></img>
            </div>
            
            <div className="detail-menu">
            <h4 className="dish-name "> {userData.name}</h4>
                <p className="description"> 
                    {userData.biodate}
                </p>               
            </div>
            <div className="price-qty">
                <h5 className="price "> {userData.location} </h5>
                <div className="qty-box" >  
                                            
                </div>
            </div>
            <button className="none" onClick={deleteButton} name={userData.name}>Delete</button>

        </div>

    );
};
export default UserBox;