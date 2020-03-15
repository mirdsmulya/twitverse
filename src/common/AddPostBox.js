
import React, { useState } from 'react';
import TexInput from '../common/TextInput';


const AddPostBox = ({uploadTextButton, post,onChange, display,  saveButton, value}) => {
   
    debugger;
    return(
        <div className={display} >
            <div className="post-img border">
            
                
            </div>

            <div className="detail-menu  ">
       


            <textarea
                name="description"
                type="text"
                placeholder="What's happening?"
                className="form-control content-posting border"
                onChange={onChange}
                value={value} 
            />
            </div>

            <div className="price-qty  ">
           
            <div className="qty-box save-button ">
                    
            <button className=""   onClick={saveButton}>Post</button>
            </div>
            </div>
           
           
        </div>
    );
    
    
}
export default AddPostBox;
