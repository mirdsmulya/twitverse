

import React from 'react';


const CommentSection = ({comment, delComment, editComment, userData, post}) => {

    const eventInfo = JSON.stringify({username: userData.username, postId: post.id, commentId: comment.id }) ;
    debugger;
    return (
        <div className='comment-box'>
            <div>
            <img className="comment-img border" />
            </div>
            <h5 className="price">{comment.name}:</h5>
            <p className="prices">{comment.text}</p> 
            <div className="comment-button">
            <button onClick={delComment} value={eventInfo} >x</button>
            <button onClick={editComment} value={eventInfo}>e</button>
            </div>
                
            
				
        </div>
    );
};
export default CommentSection;