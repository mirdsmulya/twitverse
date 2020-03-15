
import React from 'react';
import LoginBox from '../common/LoginBox';
import Toastr from 'toastr';
import dataApi from '../api/dataApi';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {username:"", password:""}
        };
        this.dataInputChange = this.dataInputChange.bind(this);
        this.loginButton = this.loginButton.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
    }
    



    dataInputChange(event) {
        debugger;
        const field = event.target.name;
        let user = Object.assign({}, this.state.user);
        user[field] = event.target.value;
        return this.setState({user: user});

    }

    enterPressed(event) {
		const code = event.keyCode || event.which;
		if (code === 13) { // work when hit enter
			event.preventDefault();
			this.loginButton();
        }
        debugger;
	}

    loginButton() {
        dataApi.checkCredentials(this.state.user)
        .then(result => {
            debugger;
            if (!result) {
                return Toastr.error('User or password might be wrong :(');
                          
            }
            sessionStorage.setItem("currentUserLogin", this.state.user.username);
            Toastr.success('Login success! as ' + sessionStorage.getItem("currentUserLogin"));
            this.props.history.push('/');
        });

        debugger;
        
        
    }



    render() {
        debugger;
        
        return(
            <div className="main login-page">

                <LoginBox 
                    user={this.state.user}
                    onChange={this.dataInputChange}
                    loginButton={this.loginButton}
                    onKeyPress={this.enterPressed}
                
                />

            </div>
        );
    }


}
export default LoginPage;
