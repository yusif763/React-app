import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import { TextProvider } from './context/TextContext';
import { UserProvider } from './context/UserContext';
import Main from './components/Main/Main';


function App() {
  
    return (
      <>
      

      <Router>
      <TextProvider>
      <UserProvider>
        <Main>
        </Main>
</UserProvider>
      </TextProvider>

      
      </Router>

      </>
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
