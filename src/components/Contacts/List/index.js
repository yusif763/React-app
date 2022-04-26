import {useState} from 'react'
import React from 'react';
import style from './styles.module.css'
function List({contacts}) {
    // console.log("rendered list")
    const [filterText,setFilterText] = useState('');
    
    function changeFilterText(e){
        setFilterText(e.target.value);
    }

    const filteredContacts = contacts.filter((item) => {
         return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        }
        );
    });
  return (
      <>
        <div className={style.title}>List</div>
        <input placeholder='Filter Contacts '  value={filterText} onChange={changeFilterText}/> 
       <h3>{
       filteredContacts.map((filteredContact,index) => {
              return <div key={index}>{filteredContact.fullname}:{filteredContact.phoneNumber}</div>
       })
       }</h3>
      </>

  )
}

export default React.memo(List)