import './App.css';
import Contacts from './components/Contacts';
import User from './components/Users/User';
import InputExample from './components/InputExample';
import UserInformation from './components/Users/UserInformation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
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
          </Routes>
        </div>
      </Router>
    );
}


export default App;

















// import { useState } from 'react';
// import Calculator from './components/Calculator';
// import InputExample from './components/InputExample';

// function App() {
  // const [name, setName] = useState('Yusif');
  // const [age, setAge] = useState(20);
  // const [friends, setFriends] = useState(['Yusif', 'Sami', 'Ahmed']);
  // const [adress , setAdress] = useState({
  //   street: '123 Main St',
  //   city: 'Boston',
  //   state: 'MA'
  // });

  // console.log("name");

  // return (
  //   <div className="App">
  //     <Contacts />
     // { <button onClick={() => setName("hey")}>clikc</button> }
     /* {<h1>Hello {name} ,{age}</h1>
      <button onClick={() => {
        setName('Huseyn') 
        setAge(25)
        }}>Set Name</button>


      {friends.map((friend,index) => <h3 key={index}>{friend}</h3>)}

      <button onClick={() => {setFriends([...friends,'Huseyn'])}}>add new friend</button>



    <h1>Adress</h1>
    <p>{adress.street}</p>
    <p>{adress.city}</p>
    <p>{adress.state}</p>
    <button onClick={()=>{setAdress({...adress,city : "Baku"})}}>Change adress</button>

    <br /> }*/

    // {/* <Calculator /> */}
    // {/* <InputExample /> */}
//     </div>

//   );
// }

// export default App;
