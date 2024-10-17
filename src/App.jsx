import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

import Actor from './Actor'

function App() {

  const actors =["Sakib","Shoriful Raj","Jasim","Rubel","Salman Shah"];
  return (
    <>
      
      <h1>Vite + React</h1>
     

      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor=> <Actor name={actor}></Actor>)
      

      }
      {/* <Student></Student> */}
      <Person></Person>
        
      

      {/* <Todo task="Learn React" isDone={true}  ></Todo>
      <Todo task="Explore core concept" isDone={false}></Todo>
      <Todo task="Try JSX concept" isDone={true}></Todo> */}
      {/* <Device name="Laptop"price="55" ></Device>
      <Device name="Mobile"price="17" ></Device>
      
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Developer></Developer> */}
     
    </>
  )
}
function Device(props){
  return (
    <h3>This is {props.name}, price:{props.price} </h3>
  )
}
function Person(){
  const age=25;
  const money=20;
  const person={name:"Sakib",age:12}
  return (
  <>
  
    <Student></Student> 
    <h5>I am {person.name} with age: {age+money}</h5>
  </>

  )
 
}
function Student(props){
  console.log(props);
  return (
   <div className='person'>

    <h3>This is a student</h3>

    <p>Name:</p>
    <p>Age:</p>
  </div>
  )
}
function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
