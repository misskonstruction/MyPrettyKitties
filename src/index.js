import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchKitties} from './reducers';
import 'tachyons';

const store = createStore(searchKitties)


ReactDOM.render(
						<App />, document.getElementById('root'));



serviceWorker.unregister();
