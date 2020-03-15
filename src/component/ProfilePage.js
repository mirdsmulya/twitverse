import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../actions/dataAction';
import UserBox from '../common/UserBox';
import PostBox from '../common/PostBox';
import AddPostBox from '../common/AddPostBox';
import Toastr from 'toastr';



class ProfilePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: [],
            postBox: "hide",
            postValue: ""
        };
    this.postTwit = this.postTwit.bind(this);
    this.onType = this.onType.bind(this);
    this.deletePost = this.deletePost.bind(this);

    }

    componentDidMount() {
        if (this.props.ownProfileCheck) {
            this.setState({postBox: "post-box"});
        }

    }

    postTwit() {
        let postValue = this.state.postValue
        let id = this.props.id
        this.props.action.addPost(postValue, id);
        this.setState({postValue: ""});
        debugger;
        
    }

    deletePost(event) {
        let user = event.target.name;
        let postId = event.target.id;
        debugger;
        this.props.action.deletePost(user, postId);
    }

    onType(event) {
        let postValue = event.target.value;

        debugger;
        this.setState({postValue: postValue});
        debugger;


    }

    userCheck() {
        debugger
        if (sessionStorage.getItem("currentUserLogin") == null ) {
            this.props.history.push('/login');
            Toastr.info("Login Required")  ;
        }
    }

    render() {
        this.userCheck();
        let profileData = this.props.profileData;
        let posts = this.props.posts;
        this.state;
        debugger;
        return(
            <div className="line-menu">
                <UserBox userData={profileData} />
                <div></div>
                <AddPostBox userData={profileData} onChange={this.onType} value={this.state.postValue} display={this.state.postBox} saveButton={this.postTwit}/>
                
                {posts.map(post => 
                    <PostBox  key={post.id} post={post} userData={profileData} deleteButton={this.deletePost}/> 
                )}

            </div>
        );
    }
}

function searchProfile(datas, username) {
    debugger;
    let data = datas.find( list => list.username == username);
    return data;

}

export function mapStateToProps(state, ownProps) {
    let profileData, posts;
    let username = ownProps.params.id;
    let ownProfileCheck = false;
    let currentSession = sessionStorage.getItem("currentUserLogin")
    if (!currentSession){
        return;
    }
    debugger;
    if (!username) {
        username = currentSession;
        ownProfileCheck = true;
    }

    if (username == currentSession) {
        ownProfileCheck = true;
    }

    profileData = searchProfile(state.datas, username);
    posts = profileData.post;   


    
    debugger;

    return {
        datas: state.datas,
        profileData: profileData,
        posts: posts,
        ownProfileCheck: ownProfileCheck,
        id: username
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(dataAction, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);