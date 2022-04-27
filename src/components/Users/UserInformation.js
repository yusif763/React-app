import axios from 'axios';
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'


function UserInformation() {
    const [userInformation,setUserInformation] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {id} = useParams();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
              setUserInformation({...res.data});
        }).catch((err) => {console.log(err)})
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

  return (
      <>
        <div>UserInformation</div>
        {isLoading ? <div>Loading...</div> : ''}
        <div>{userInformation.name}</div>
        <div>{userInformation.email}</div>
        <div>{userInformation.phone}</div>
        <div>{userInformation.username}</div>

      </>
    
    
  )
}

export default UserInformation