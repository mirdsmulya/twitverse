

import React from 'react';
import UserBox from '../common/UserBox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../actions/dataAction';
import Toastr from 'toastr';
import PhotoList from '../common/PhotoList';


class PhotosPage extends React.Component {
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
        let albumPicked = this.props.album;
        this.userCheck();
        let users = this.props
        debugger;
        return(
            <div className="line-menu">
                Hellow World!
                <UserBox userData={profileData} />
        <       h3>Photos: {albumPicked.name}</h3>
                <div  className="menu-box">
                {albumPicked.photos.map( photo => 
                    <PhotoList photo={photo} key={photo.id} profileData={profileData} album={albumPicked}/>)}
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

function searchAlbum(albums, albumId) {
    debugger;
    let album = albums.find( list => list.id == albumId);
    return album;

}

export function mapStateToProps(state, ownProps) {
    let username = ownProps.params.id;
    let albumId = ownProps.params.albumId;
    let currentSession = sessionStorage.getItem("currentUserLogin")
    if (!currentSession){
        return;
    }

    let profileData = searchProfile(state.datas, username);
    let album = searchAlbum(profileData.albums, albumId);
    debugger;
    return {
        datas: state.datas,
        username: username,
        profileData: profileData,
        album: album
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(dataAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);