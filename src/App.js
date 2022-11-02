import logo from './logo.svg';
import './App.css';
import SideNav from './Component/SideNav';
import Navbar from './Component/Navbar';
import TopCards from './Component/TopCards';
import Overviews from './Component/Overviews';
import BottomCards from './Component/BottomCards';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className='bg-slate-200' >

     
        <Navbar></Navbar>
        <SideNav></SideNav>
       
    </div>
  );
}

export default App;
