import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import { bankingReducer } from './components/reducers/bankingReducers';
import { Provider } from 'react-redux';
const store = createStore(bankingReducer)

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
 document.getElementById('root'))
