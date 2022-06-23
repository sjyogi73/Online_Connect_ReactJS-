import './App.css';
import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import Features from "./Component/Features";
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
        {!user ? (
          <Login/>
        ):(
          <div className="app_body">
            <Router>
             
              <Features/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                  <Sidebar/>
                </Route>
                <Route path="/">
                  <Chat/>
                  <Sidebar/>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
        
    </div>
  );
}

export default App;
