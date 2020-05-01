import React from 'react';
import { Button } from 'react-bootstrap'; 
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Contact from './components/contact';
import './App.css';

function App() {
  return (    
    <div className = "App"> 

      <div className = "App__Aside"></div>
      <div className = "App__Form">
        <div className="PageSwitcher">
          <a href = "#" className = "PageSwitcher__Item PageSwitcher__Item--Active">Sign In</a>
        </div>

        <div className="FormTitle">
          <a href = "#" className= "FormTitle__Link"> Sign In</a>
        </div>

        <div className="FormCenter">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField_Label" htmlFor="name">Username</label>
              <div><input type = "text" id="name" className="FormField__Input" placeHolder = "Enter username" name ="name"></input></div>
            </div>
            <div className="FormField">
              <label className="FormField_Label" htmlFor="name">Password</label>
              <div><input type = "password" id="name" className="FormField__Input" placeHolder = "Enter Password"></input></div>
            </div>

            <div className = "FormField">
              <button className = "FormField__Button mr-20"> Sign In</button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
}
export default App;
