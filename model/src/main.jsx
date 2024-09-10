import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginContext from './LoginContext.jsx';

import store from './store.jsx';
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <LoginContext>
  //   <App />
  // </LoginContext>,
  <Provider store ={store}>
    <App/>
  </Provider>
)
