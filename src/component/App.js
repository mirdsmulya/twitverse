import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SidebarLeft from '../common/SideBarLeft';
import SideBarRight from '../common/SideBarRight';



class App extends React.Component {
    
    
	render() {
		return(
            <BrowserRouter>
			<div className="main">
                <SidebarLeft />
				{this.props.children}
                <SideBarRight />
			</div>
            </BrowserRouter>
			);
	}
}


export default App;