import React from 'react'
import { UserProviderFunction } from '../../context/UserContext'

function UserProfile() {
    const {user, setUser} = UserProviderFunction();
  return (
      <>
    <div>UserProfile</div>
    <button onClick={()=>{
        setUser({...user,hello:`Hello ${user.name}`})
    }}>
        Click for Hello
    </button>
    <h1>
        {user.hello ? user.hello : 'Hello'}
    </h1>
      </>
  )
}

export default UserProfile