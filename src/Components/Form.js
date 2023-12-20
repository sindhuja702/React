import React, { useEffect } from 'react';
import {useState} from 'react';
function Form(){
    const data={name:"",Usage:""};
    const [inputData,setInputData]= useState(data)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.Usage){
            alert("All fields are required")
        }
        else{
            setFlag(true)
        }
    }
    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>{inputData.name} are used for {inputData.Usage}</h2>:""}</pre>
        <form className='Container' onSubmit={handleSubmit}>
            <div className='Header'>
                <h1>Details</h1>
            </div>
            <div>
                <input type="text"placeholder='Enter your Name'name="name" value={inputData.name} onChange={handleData}></input>
            </div>
            <div>
                <input type="text"placeholder='Enter the use'name="Usage" value={inputData.Usage} onChange={handleData}></input>
            </div>
            <div>
                <button className="Button"type='submit'>Save</button>
            </div>
        </form>
        </>
    )
}

export default Form