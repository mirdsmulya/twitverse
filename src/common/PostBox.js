import React from 'react';
import { Link } from 'react-router';
import CommentSection from '../common/CommentSection';


const PostBox = ({post, userData, editButton, deleteButton}) => {
    let commentNumbers = post.comments.length
    debugger;

    return(
        
        <div>
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
                    <div> Comments ({commentNumbers}) </div> 
                    <div> {post.date} </div>
                    <button onClick={deleteButton} name={userData.username} id={post.id}>x</button>
                    <button onClick={editButton} name={userData.username} id={post.id}>Edit</button>
                 </div>
                
            </div>

        
        </div>
        <div className="comment-box">
        <div>
            <img className="comment-img border" />
            </div>
            <input className="prices"/>
            <div className="comment-button">
            <button>Post</button>

            </div>
        </div>
        {post.comments.map( comment => 
            <CommentSection comment={comment} key={comment.id} /> 
        )}
        </div>   
        
    );

};
export default PostBox;