import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import ListUserPage from './component/ListUserPage';
import ProfilePage from './component/ProfilePage';
import LoginPage from './component/LoginPage';


export default (

    <Route path="/" component={App} >
		<IndexRoute component={ListUserPage} />
		<Route path="profile/:id" component={ProfilePage} />
		<Route path="profile" component={ProfilePage} />
		<Route path="login" component={LoginPage} />

	</Route>
      
);