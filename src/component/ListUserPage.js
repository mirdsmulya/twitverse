

import React from 'react';
import UserBox from '../common/UserBox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../actions/dataAction';
import Toastr from 'toastr';

class ListUserPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            userData: this.props.datas
        } ;

    }

    componentWillReceiveProps() {
        debugger;
        this.setState({userData: this.props.datas})
    }

    userCheck() {
        debugger;
        if (sessionStorage.getItem("currentUserLogin") == null ) {
            this.props.history.push('/login');
            Toastr.info("Login Required")  
        }
    }

    render() {
        this.userCheck();
        let users = this.props.datas;
        debugger;
        return(
            <div className="line-menu">
                Hellow World!
                {users.map(user => 
                    <UserBox userData={user} key={user.id}/>
                    )}
            </div>
        )
    }
}

export function mapStateToProps(state, ownProps) {
    debugger;
    return {
        datas: state.datas
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(dataAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUserPage);