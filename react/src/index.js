import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
<<<<<<< HEAD
import Login from './components/login';
=======




>>>>>>> 24ed4d709701ef343a5c4a2404e6c055587d1eea
import Phone from './/components/phone';
import Nl_puc from './components/nl_puc';
import Xc_shouye_lunbotu from './components/xc-shouye-lunbo';
import Xc_tuangou from './components/xc-tuangou';

<<<<<<< HEAD


=======
>>>>>>> 24ed4d709701ef343a5c4a2404e6c055587d1eea

ReactDOM.render(<Router>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
<<<<<<< HEAD
=======

			
		

>>>>>>> 24ed4d709701ef343a5c4a2404e6c055587d1eea
			<Route path='/nl_puc' component={Nl_puc}>	
			<IndexRedirect to='/shouye' />	
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<Route path='/register' component={Register}></Route>
				<Route path='/login' component={Login}></Route>
				
			</Route>

			<Route path='/phone' component={Phone}></Route>
			
			
		</Route>
</Router>, document.getElementById("root"))
registerServiceWorker();
