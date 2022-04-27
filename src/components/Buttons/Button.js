import React from 'react'
import { TextProviderFunction } from '../../context/TextContext'


function Button() {
    const {text, setText} = TextProviderFunction();
  return (
    <>
    <h1>
        Theme:{text}
    </h1>
    <button  onClick={()=>{setText(text === "dark"?"light":"dark")}}>
        Change Theme
    </button>
    </>
  )
}

export default Button