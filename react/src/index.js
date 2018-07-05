import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
import Nl_puc from './/components/nl_puc';
import Phone from './/components/phone';

ReactDOM.render(<Router>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
			<Route path='/nl_puc' component={Nl_puc}>
			<Route path='/register' component={Register}></Route>
			</Route>
			<Route path='/phone' component={Phone}></Route>
			
			
		</Route>
</Router>, document.getElementById("root"))
registerServiceWorker();
