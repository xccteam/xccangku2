import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from './components/register';
<<<<<<< HEAD
=======


>>>>>>> fe862df89117ead688228f2a1b3305d2c9bd6ad0
import Phone from './/components/phone';
import Nl_puc from './components/nl_puc';
import Xc_shouye_lunbotu from './components/xc-shouye-lunbo';
import Xc_tuangou from './components/xc-tuangou';
<<<<<<< HEAD
=======

>>>>>>> fe862df89117ead688228f2a1b3305d2c9bd6ad0

ReactDOM.render(<Router>
		<Route path="/" component={App}>
			<IndexRedirect to='/nl_puc' />
<<<<<<< HEAD
			<Route path='/nl_puc' component={Nl_puc}>

				
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<IndexRedirect to='/tuangou' />
			</Route>

			<Route path='/register' component={Register}></Route>
		
=======
			<Route path='/nl_puc' component={Nl_puc}>	
				<IndexRedirect to='/shouye' />	
				<Route path='/shouye' component={Xc_shouye_lunbotu}></Route>
				<Route path='/tuangou' component={Xc_tuangou}></Route>
				<Route path='/register' component={Register}></Route>
				
			
			
			</Route>
>>>>>>> fe862df89117ead688228f2a1b3305d2c9bd6ad0
			<Route path='/phone' component={Phone}></Route>
			
			
		</Route>
</Router>, document.getElementById("root"))
registerServiceWorker();
