import {useEffect, useState,useContext} from 'react'
import style from './styles.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



function User() {
    // const data = useContext(TextContext);
    // console.log(data,'user.js' , number++)
    // console.log("daad")
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
           setUsers(res.data);
        })
        .catch((err) => {console.log(err)})
        .finally(() => {
            setIsLoading(false);
        });
    }, [])
  return (
      <>
      <div id={style.user_main}>
      <h1>User</h1>

        {isLoading ? <div>Loading...</div> : ''}

        <div className={style.user_list}>
        {users.map((user) => { 
            return <button onClick={() => navigate(`/user/${user.id}`)} key={user.id}>{user.name}  </button>
        })}
        </div> 
      </div>


      </>
  )
}

export default User