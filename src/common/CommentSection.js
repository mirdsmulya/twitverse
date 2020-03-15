

import React from 'react';


const CommentSection = ({comment}) => {
    return (
        <div className='comment-box'>
            <div>
            <img className="comment-img border" />
            </div>
            <h5 className="price">{comment.name}:</h5>
            <p className="prices">{comment.text}</p> 
            <div className="comment-button">
            <button>x</button>
            <button>e</button>
            </div>
                
            
				
        </div>
    );
};
export default CommentSection;