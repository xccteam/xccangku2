import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
<<<<<<< HEAD
import Nl_puc from './/components/nl_puc';
import Phone from './/components/phone';
=======
import Nl_puc from './components/nl_puc';
import Xc_shouye_lunbotu from './components/xc-shouye-lunbo';
import Xc_tuangou from './components/xc-tuangou';
>>>>>>> 3fa408fa8dde410cbe9f7327f3398c3e1622eb6b

ReactDOM.render(<Router>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
			<Route path='/nl_puc' component={Nl_puc}>
<<<<<<< HEAD
=======
				
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<IndexRedirect to='/tuangou' />
			</Route>
>>>>>>> 3fa408fa8dde410cbe9f7327f3398c3e1622eb6b
			<Route path='/register' component={Register}></Route>
			</Route>
			<Route path='/phone' component={Phone}></Route>
			
			
		</Route>
</Router>, document.getElementById("root"))
registerServiceWorker();
