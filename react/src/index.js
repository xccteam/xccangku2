import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
import Login from './components/login';
import Phone from './/components/phone';
import Nl_puc from './components/nl_puc';
import Xc_shouye_lunbotu from './components/xc-shouye-lunbo';
import Xc_tuangou from './components/xc-tuangou';
import Neworder from './components/neworder';

ReactDOM.render(<Router>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
			<Route path='/nl_puc' component={Nl_puc}>	
			<IndexRedirect to='/shouye' />	
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<Route path='/neworder' component={Neworder}></Route>
				<Route path='/register' component={Register}></Route>
				<Route path='/login' component={Login}></Route>
				
			</Route>

			<Route path='/phone' component={Phone}></Route>
			
			
		</Route>
</Router>, document.getElementById("root"))
registerServiceWorker();
