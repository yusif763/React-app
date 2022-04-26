import axios from 'axios';
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'


function UserInformation() {
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {id} = useParams();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
              setUser({...res.data});
        }).catch((err) => {console.log(err)})
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

  return (
      <>
        <div>UserInformation</div>
        {isLoading ? <div>Loading...</div> : ''}
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.username}</div>

      </>
    
    
  )
}

export default UserInformation