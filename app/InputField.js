'use client'
import React ,{useRef,useState,useEffect,forwardRef} from 'react';
const InputField=forwardRef((props, ref)=>{
    const ref = useRef()
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    })
export default InputField;
