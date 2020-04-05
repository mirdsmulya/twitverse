import React from 'react';
import { Link } from 'react-router';
import CommentSection from '../common/CommentSection';


const PostBox = ({post, userData, editButton, postComment, deleteButton, commentValue, commentChange, delComment, editComment}) => {
    let commentNumbers = post.comments.length
    let hideCommentSection = ""
    let haha = "pointer"
    debugger;

    return(
        
        <div>
        <div className="post-box pointer" onClick={postComment}>
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
        <div className={hideCommentSection}>
        <div className="comment-box">
        <div>
            <img className="comment-img border" />
            </div>
            <input className="prices" onChange={commentChange} value={commentValue} />
            <div className="comment-button">
            <button onClick={postComment} name={userData.username} id={post.id}>Post</button>

            </div>
        </div>
        
        {post.comments.map( comment => 
            <CommentSection comment={comment} key={comment.id} editComment={editComment} delComment={delComment} userData={userData} post={post}/> 
        )}
        </div>
        </div>   
        
    );

};
export default PostBox;