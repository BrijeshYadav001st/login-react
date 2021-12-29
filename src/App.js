
import React from 'react';
// import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
import SignIn from './Components/Signin/SignIn';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<SignIn/>}/>
        {/* <Route exact path = '/dashboard' element={<Dashboard/>}/> */}
      </Routes>
    </Router>
    // <div className="App">
    //   <Dashboard/>
    // </div>
  );
}

export default App;
