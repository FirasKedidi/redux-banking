import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { combineReducers, legacy_createStore as createStore} from 'redux'
import { bankingReducer } from './components/reducers/bankingReducers';
import { Provider } from 'react-redux';
import { authReducer } from './components/reducers/authReducers';
import { rootReducer } from './components/reducers/combineReducer';
const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
 document.getElementById('root'))
