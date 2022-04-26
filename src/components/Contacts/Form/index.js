import {useState,useEffect} from 'react'
import style from './styles.module.css'

const initialFormvalue = {fullname:'',phoneNumber:''}

function Form({setContacts,contacts}) {
    const [form, setForm] = useState({fullname:'',phoneNumber:''});


    useEffect(() => {
        setForm({...initialFormvalue});
    } ,[contacts])

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }  
    function submitForm(e){
        e.preventDefault();

        if(form.fullname === '' || form.phoneNumber === ''){
            alert('Please fill all fields');
      
            return;
        }
        setContacts([...contacts, {fullname:form.fullname,phoneNumber:form.phoneNumber}]);
 
        
    }
  return (
      <>
        <form onSubmit={submitForm}  >
        <div>Form</div>
        <div>
            <input onChange={onChangeInput} name='fullname' placeholder='Fullname' value={form.fullname}/>
        </div>
        <div>
            <input onChange={onChangeInput} name='phoneNumber' placeholder='Phone NUmber' value={form.phoneNumber}/>
        </div>

        <button className={style.button} type='submit'>Add</button>
        </form>
 
      </>

  )
}

export default Form