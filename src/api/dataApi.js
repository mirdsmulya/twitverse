
import Data from '../../dataUser';

let datas = Object.assign([], Data.data);

class DataApi {
    static getAllData() {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                fetch('https://my-json-server.typicode.com/mirdsmulya/fake-json-db/data/')
                        .then(response => response.json())
                        .then(json =>  {resolve(json); } );
            },0);
        });
    }


    static addPost(postValue, id) {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                const newDate = new Date();
                const dateString = newDate.getDate() + "/" + (newDate.getMonth()+1)  + "/" + newDate.getFullYear();
                let userData = datas.find( data => data.username == id);
                let dataIndex = datas.findIndex( data=> data.username == id);
                debugger;
                const post = {
                    date: dateString,
                    id: newDate,
                    content: postValue,
                    comments: []
                };
                let userDataPost = userData.post;
                userDataPost = [post, ...userDataPost];
                let findalData = Object.assign({}, userData, {post: userDataPost});
                datas.splice(dataIndex, 1, findalData)
                debugger;
                resolve(Object.assign([], findalData));
            },0);
        });
    }

    static deletePost(username, postId) {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                let userData = datas.find( data=> data.username == username);
                let dataIndex = datas.findIndex( data=> data.username == username);
                debugger;
                let userDataPost = userData.post;
                debugger;
                userDataPost = [...userDataPost.filter( post => post.id != postId)];
                let findalData = Object.assign({}, userData, {post: userDataPost});
                datas.splice(dataIndex,1, findalData);

                debugger;

                resolve(Object.assign([], datas));
            },0);
        });
    }




    static checkCredentials(credentials) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = false;
                let dataIndex = datas.findIndex(a => a.username == credentials.username );
                if (dataIndex !== -1) {
                    let tempData = datas[dataIndex];
                    if (tempData['username'] == credentials.password) {
                        result = true;
                    }
                }
                resolve(result);
                debugger;
            },0);
        });

    
    }
    static postComment(postValue, username, postId ) {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                const newDate = new Date();
                const dateString = newDate.getDate() + "/" + (newDate.getMonth()+1)  + "/" + newDate.getFullYear();
                let userData = datas.find( data => data.username == username);
                let dataIndex = datas.findIndex( data => data.username == username);
                let postData = userData.post.find( post => post.id == postId)
                let postIndex = userData.post.findIndex( data=> data.id == postId);
                let currentAccount = sessionStorage.getItem('currentUserLogin')
                const newComment = {
                    time: dateString,
                    id: newDate,
                    text: postValue,
                    name: currentAccount
                };
                
                let commentList = [ ...postData.comments, newComment];
                let newestPost = Object.assign({}, postData, {comments: commentList});
                let newPostList = [...userData.post.slice(0,postIndex), newestPost, ...userData.post.slice(postIndex + 1, userData.post.length)]
                let findalData = Object.assign({}, userData, {post: newPostList});
                datas.splice(dataIndex, 1, findalData)
                debugger;
                resolve(Object.assign([], findalData));
            },0);
        });
    }



}

export default DataApi;