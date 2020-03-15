import React from 'react';
import TextInput from '../common/TextInput';

const LoginBox = ({onKeyPress, user, loginButton, onChange}) => {
    return(
        <div className="login-box">
            <div className="login-title-area border">
                LOGIN
            </div>
            <div className="login-user-pass-area border">
                
                <TextInput 
                    label="Username"
                    name="username"
                    value={user.username}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    
                
                />

                <TextInput 
                    label="Password"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                
                />

                <button onKeyPress={onKeyPress} className="login-button margin-top" onClick={loginButton}>Login</button>

            </div>
            

        </div>
    );
};

export default LoginBox; 