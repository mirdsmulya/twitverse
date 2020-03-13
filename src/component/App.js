import React from 'react';
import { BrowserRouter } from 'react-router-dom';



class App extends React.Component {
    
    
	render() {
        console.log(this.props.children);
        debugger;
		return(
            <BrowserRouter>
			<div className="">

				{this.props.children}

			</div>
            </BrowserRouter>
			);
	}
}


export default App;