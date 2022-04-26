import React from 'react'
import List from './List';
import Form from './Form';
import './styles.css'
import {useState, useEffect} from 'react';



function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname:"Yusif", phoneNumber:"123456789"},
    {fullname:"Huseyn", phoneNumber:"4444444444"},
    {fullname:"Amil", phoneNumber:"5555555555"}]);
  const  [number,setNumber] = useState(0);

  useEffect(() => {
    console.log(contacts)
  },[contacts])
  return ( 
    <>
    <div id='contact'>
    <List  contacts={contacts} number={number< 5 ? 1: number} />
    <Form setContacts={setContacts} contacts={contacts}/>
    <button onClick={()=> setNumber(number+1)}>click</button>
    <h1>{number}</h1>
    </div>
    </>
  )
}

export default Contacts