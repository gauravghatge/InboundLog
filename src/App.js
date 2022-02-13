
import './App.css';

import LoginAsse from "./comp/LoginAsse"
import Home from "./comp/Home"
import Asscode from "./comp/Asscode"
import AsHome from "./comp/AsHome"
import TrHome from "./comp/TrHome"
import AsseOrder from "./comp/AsseOrder"
import { BrowserRouter , Route, Routes, Router, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TrOrder from './comp/TrOrder';
import StoreHome from './comp/StoreHome';
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
        <Route  path='ass' element= {localStorage.getItem('username')=='assembly' ? <Asscode/> : <Navigate to="/"></Navigate> }></Route>
        <Route exact path="assemblyhome" element={localStorage.getItem('username')=='assembly' ? <AsHome/> : <Navigate to="/"></Navigate> } />
        <Route exact path="warehousehome" element={localStorage.getItem('username')=='warehouse' ? <StoreHome /> : <Navigate to="/"></Navigate>} />
        <Route exact path="transporterhome" element={(
          (localStorage.getItem('username')=='transporter' ? <TrHome /> : <Navigate to="/"></Navigate>))} />
        <Route exact path="assemblyorderlog" element={localStorage.getItem('username')=='assembly' ? <AsseOrder /> : <Navigate to="/"></Navigate>} />
        <Route exact path="transporterorderlog" element={localStorage.getItem('username')=='warehouse' ? <TrOrder /> : <Navigate to="/"></Navigate>} />
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
