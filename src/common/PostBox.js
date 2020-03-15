import React from 'react';
import { Link } from 'react-router';
import { userInfo } from 'os';

const PostBox = ({post, userData, editButton, deleteButton}) => {
    let commentNumbers = post.comments.length
    debugger;

    return(
        
           
        
        <div className="post-box ">
            <div className="">
                <img className="post-img" src={userData.profilePicture} alt={userData.name}></img>
            </div>
            
            <div className="profileUsername ">
            <h4>{userData.name} @{userData.username}</h4>
            
            <p className=""> {post.content}</p>
                            
            </div>

            <div className="content-date ">
                
                <div className="" > 
                    <Link to="/"> Comments ({commentNumbers}) </Link> 
                    <div> {post.date} </div>
                    <button onClick={deleteButton} name={userData.username} id={post.id}>x</button>
                    <button onClick={editButton} name={userData.username} id={post.id}>Edit</button>
                 </div>
                
            </div>


        </div>
        
        
    );

};
export default PostBox;