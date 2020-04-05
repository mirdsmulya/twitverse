import DataApi from '../api/dataApi';
import *  as types from './actionTypes';


export function loadDataSuccess(datas) {
    return {type: types.LOAD_DATA_SUCCESS, datas};
}

export function addPostSuccess(data) {
    return {type: types.ADD_POST_SUCCESS, data};
}

export function deletePostSuccess(datas) {
    return {type: types.DELETE_POST_SUCCESS, datas};
}

export function postCommentSuccess(data) {
    return {type: types.ADD_COMMENT_SUCCESS, data}
}

export function deleteCommentSuccess(datas) {
    return {type: types.DELETE_COMMENT_SUCCESS, datas}
}

export function loadData() {
    return function(dispatch) {
        return DataApi.getAllData().then( datas => {
            dispatch(loadDataSuccess(datas));
        }).catch( error => {
            throw(error);
        });
    };
}
export function addPost(postValue, id) {
    debugger;
    return function(dispatch) {
        return DataApi.addPost(postValue, id).then( data => {
            dispatch(addPostSuccess(data));
        }).catch( error => {
            throw(error);
        });
    };
}

export function deletePost(username, postId) {
    debugger;
    return function(dispatch) {
        return DataApi.deletePost(username, postId).then( datas => {
            dispatch(deletePostSuccess(datas));
        }).catch( error => {
            throw(error);
        });
    };
}

export function postComment(value, username, postId) {
    debugger;
    return function(dispatch) {
        return DataApi.postComment(value, username, postId).then( data => {
            dispatch(postCommentSuccess(data));
        }).catch( error => {
            throw(error);
        });
    };

}

export function deleteComment(eventValue) {
    debugger;
    return function(dispatch) {
        return DataApi.deleteComment(eventValue).then( datas => {
            dispatch(deleteCommentSuccess(datas));
        }).catch( error => {
            throw(error);
        });
    };
}
