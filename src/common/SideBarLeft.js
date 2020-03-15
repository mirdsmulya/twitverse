
import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router';

const SidebarLeft = () => {
    let buttonText = "Sign Out";
    let username =  sessionStorage.getItem("currentUserLogin");
    let user = username ? "@"+username : ""
    let linkAlbum = "/album/"+ username;
    
    
    return (
 
        <div className="fixed-sidebar ">
				<div className="sticky ">
				<div className="header-logo ">
                <div className=" ">
                                    <h3 className="sidebar-text price">//Twitverse </h3>

                </div>  

                </div>
                <div className="sidebar ">

                    <div className="sidebar-text" > 
                    <h4 className="signout">{user} </h4>
                    </div>
                            
                    <IndexLink to="/profile"  activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">My Profile</div>
                    </IndexLink>
                    
                    <Link to={linkAlbum} activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">Albums</div>
                    </Link>

                    <Link to="/" activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">Friends</div>
                    </Link>

                    <button className="signout" onClick={() => {sessionStorage.removeItem("currentUserLogin"); }}>{buttonText}</button>

                            
                </div>
            </div>
            
        </div>
    );
};

export default SidebarLeft;