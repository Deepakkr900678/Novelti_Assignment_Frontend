import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index.js or App.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/Store';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AddUser from './components/AddUser';
// import AllUser from './components/AllUsers';

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <AddUser />
//       <AllUser />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
