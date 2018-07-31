import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appState from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appState);


const render = () => ReactDOM.render(
  <App 
    value={ 
      store.getState() 
    }
    onIncrement = { 
      () => store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement = {
      () => store.dispatch({
        type: 'DECREMENT'
      })
    } 

    incrementIfOdd = {
      () => store.dispatch({
        type: 'INCREMENT_IF_ODD'
      })
    }
  />, 
  document.getElementById('root')
);

render();
store.subscribe(render);

registerServiceWorker();
