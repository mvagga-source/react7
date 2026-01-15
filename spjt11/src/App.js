import './App.css';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './comp/Nav';
import Home from './pages/Home';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import MList from './pages/MList';
import BView from './pages/BView';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* 네비게이션 */}
        <Nav />

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/board/bList' element={<BList/>}></Route>
          <Route path='/board/bList/:id' element={<BView/>}></Route>
          <Route path='/board/bWrite' element={<BWrite/>}></Route>
          <Route path='/member/mList' element={<MList/>}></Route>
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
