

import React from 'react';
import UserBox from '../common/UserBox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../actions/dataAction';
import Toastr from 'toastr';
import AlbumList from '../common/AlbumList';


class AlbumPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {  
        } ;

    }

    componentWillReceiveProps() {
        debugger;
        
    }

    userCheck() {
        debugger;
        if (sessionStorage.getItem("currentUserLogin") == null ) {
            this.props.history.push('/login');
            Toastr.info("Login Required")  
        }
    }

    render() {
        let profileData = this.props.profileData;
        this.userCheck();
        let users = this.props
        debugger;
        return(
            <div className="line-menu">
                Hellow World!
                <UserBox userData={profileData} />
                <h3>Albums</h3>
                <div  className="menu-box">
                {profileData.albums.map( album => 
                    <AlbumList album={album} key={album.id} profileData={profileData}/>)}
                </div>
            </div>
        )
    }
}

function searchProfile(datas, username) {
    debugger;
    let data = datas.find( list => list.username == username);
    return data;

}

export function mapStateToProps(state, ownProps) {
    let username = ownProps.params.id;
    let currentSession = sessionStorage.getItem("currentUserLogin")
    if (!currentSession){
        return;
    }

    let profileData = searchProfile(state.datas, username);
    debugger;
    return {
        datas: state.datas,
        username: username,
        profileData: profileData
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(dataAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);