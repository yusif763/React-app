import React from "react";
import { useState } from "react";

function InputExample (){
    const [form, setForm] = useState({name:'',surname:''});
  

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }
    return(
        <>
            <h1>Please Enter Somethings</h1>
            <br />
            <input name="name" type="text" value={form.name} onChange={onChangeInput} />
            <p>{form.name}</p>
            <br />
            <h1>Please Enter Somethings else</h1>
            <br />
            <input name="surname" type="text" value={form.surname } onChange={onChangeInput} />
            <br />  
            <p>{form.surname}</p>
        </>
    )
}

export default InputExample