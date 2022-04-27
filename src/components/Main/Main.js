import React from 'react'
import { TextProviderFunction } from '../../context/TextContext'
import Contacts from '../Contacts/';
import User from '../Users/User';
import InputExample from '../InputExample';
import UserInformation from '../Users/UserInformation';
import TextContext from '../../context/TextContext';
import Button from '../Buttons/Button';
import UserProfile from '../Users/UserProfile';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Main() {
    const {text, setText} = TextProviderFunction();
  return (
      <div className={text}>

             <Button />
        <div >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
           
            </ul>
          </nav>
  
          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/contacts" element={<Contacts />}>
              {/* <contacts /> */}
            </Route>
            <Route path="/users" element={<User />}>
              {/* <Users /> */}
            </Route>
            <Route path="/" element={<InputExample />}>
              {/* <Home /> */}
            </Route>
            <Route path="/user/:id" element={<UserInformation />}>
              {/* <Home /> */}
            </Route>
            <Route path="/profile" element={<UserProfile />}>
              {/* <Home /> */}
            </Route>
          </Routes>
        </div>
        </div>
      
  )
}

export default Main