import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import ListUserPage from './component/ListUserPage'


export default (

    <Route path="/" component={App} >
		<IndexRoute component={ListUserPage} />

	</Route>
      
);