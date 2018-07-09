import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
import Login from './components/login';
import Neworder from './components/neworder';
import Phone from './components/phone';
import Nl_puc from './components/nl_puc';
import Xc_shouye_lunbotu from './components/xc-shouye-lunbo';
import Xc_tuangou from './components/xc-tuangou';
import Nl_funny from './components/nl_funny';
<<<<<<< HEAD
import Book from './components/book';
=======
import Details from './components/details';
>>>>>>> 9ea34a29858d8fec9b21a971cd1854e0c330cb43


ReactDOM.render(<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
			<Route path='/nl_puc' component={Nl_puc}>	
			<IndexRedirect to='/shouye' />	
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<Route path='/register' component={Register}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/nl_funny' component={Nl_funny}></Route>
<<<<<<< HEAD
				<Route path='/neworder' component={Neworder}></Route>	
=======
				<Route path='/neworder' component={Neworder}></Route>
				<Route path='/details' component={Details}></Route>
>>>>>>> 9ea34a29858d8fec9b21a971cd1854e0c330cb43
			</Route>
			<Route path='/phone' component={Phone}></Route>
			<Route path='/book' component={Book}></Route>
		</Route>
</Router>,
document.getElementById("root"))
registerServiceWorker();
