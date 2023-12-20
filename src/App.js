import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import View from './components/View';
import AddUsers from './components/AddUser';
import Edit from './components/Edit';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/alluser' element={<AllUsers />} />
          <Route path='/adduser' element={<AddUsers />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
