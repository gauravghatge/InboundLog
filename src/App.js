import logo from './logo.svg';
import './App.css';
//import { Route, Switch } from "react-router-dom";
import LoginAsse from "./comp/LoginAsse"
import LoginTrans from "./comp/LoginTrans"
import LoginWare from "./comp/LoginWare"
import Home from "./comp/Home"
import Asscode from "./comp/Asscode"
import AsHome from "./comp/AsHome"
import TrHome from "./comp/TrHome"
import Table from "./comp/Table"
import AsseOrder from "./comp/AsseOrder"
import { BrowserRouter , Route, Routes, Router, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TrOrder from './comp/TrOrder';
import StoreHome from './comp/StoreHome';
import Parkimg from './comp/Parkimg';
import ProtectedRoute from './comp/ProtectedRoute';
import {Fragment} from "react"



// Main App.js

function App() {
const auth = true;

  return (
    <div className="App">
      
    

    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route exact path="/" element={<LoginAsse />} />
        <Route exact path="/test" element={<AsHome />} />
       

        <Route  path='ass' element= {auth ? <Asscode/> : <Navigate to="/"></Navigate> }></Route>

        

        <Route exact path="assemblyhome" element={<AsHome />} />
        <Route exact path="warehousehome" element={<StoreHome />} />
        <Route exact path="transporterhome" element={<TrHome />} />
        <Route exact path="assemblyorderlog" element={<AsseOrder />} />
        <Route exact path="transporterorderlog" element={<TrOrder />} />
      </Routes>

      
      </Fragment>
      </BrowserRouter>  
    
    </div>
    
  );
}

export default App;

{/* <BrowserRouter><Routes>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          </Routes></BrowserRouter> */}
