

import React from 'react';
import UserBox from '../common/UserBox';

import Data from '../../dataUser.json';

class ListUserPage extends React.Component {
    render() {
        let users = Data.data;
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
export default ListUserPage;