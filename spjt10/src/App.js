import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Nav from './compents/Nav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import UserList from './pages/UserList';
import BView from './pages/BView';

function App() {
  return (
      <>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/BList' element={<BList/>} />
            <Route path='/BWrite' element={<BWrite/>} />
            <Route path='/BView' element={<BView/>} />
            <Route path='/UserList' element={<UserList/>} />
          </Routes>
      </>
  );
}

export default App;
