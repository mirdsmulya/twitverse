
import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router';

const SidebarLeft = () => {
    let buttonText = "Sign Out";
    let username =  sessionStorage.getItem("currentUserLogin")
    
    
    return (
 
        <div className="fixed-sidebar ">
				<div className="sticky ">
				<div className="header-logo ">
                <div className=" ">
                <button className="" onClick={() => {sessionStorage.removeItem("currentUserLogin"); this.props.history.push('/login');}}>{buttonText}</button>
                                    <p className="sidebar-text">{username}</p>
                </div>  

                </div>
                <div className="sidebar ">

                    <div className="sidebar-text" > 
                    <h4 className="sidebar-text-box"> //Twitverse </h4>
                    </div>
                            
                    <IndexLink to="/myProfile"  activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">My Profile</div>
                    </IndexLink>
                    
                    <Link to="/" activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">Friends</div>
                    </Link>

                    <Link to="/album" activeClassName="active" className="sidebar-text" > 
                    <div className="sidebar-text-box">Albums</div>
                    </Link>
     
                            
                </div>
            </div>
            
        </div>
    );
};

export default SidebarLeft;