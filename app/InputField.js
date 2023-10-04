'use client'
import React ,{useRef,useState,useEffect} from 'react';
const InputField=forwardRef((props, ref)=>{
    const ref = useRef()
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    })
export default InputField;
