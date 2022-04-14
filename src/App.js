import './App.css'
import React, { useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from "firebase/auth";

//now import auth from firebase config file
import {auth} from './firebase-config'
const App = () => {
    
    //need states to constrol the input
    const [ registerEmail, setRegisterEmail ] = useState("")
    const [ registerPassword, setRegisterPassword ] = useState("")
    const [ loginEmail, setLoginEmail ] = useState("")
    const [ loginPassword, setLoginPassword ] = useState("")
    //state for current user
    const [ user, setUser ] = useState({});
    onAuthStateChanged( auth, (currentUser)=>{
      setUser(currentUser)
    })
    //need to create three function, register, login, logout
    //use async to control the firebase stuff
    const register = async () => {
      try{
      const user = await createUserWithEmailAndPassword( auth, registerEmail, registerPassword )
      console.log(user)
      } catch(error) {
        alert(error.message)
      }
    }
    const login =  async () => {
      try{
        const user = await signInWithEmailAndPassword( auth, loginEmail, loginPassword )
        console.log(user)
        } catch(error) {
          alert(error.message)
        }
    }
    const logout = async () => {
      //here the user will signOut
        await signOut(auth)
    }
  return (
    <div>
    <h1>Sign Page</h1>
    <div>
    <h2>Register User</h2>
    <input placeholder='Emial' onChange={(event)=> {setRegisterEmail(event.target.value)}}></input>
    <input placeholder='Password' onChange={(event)=> {setRegisterPassword(event.target.value)}}></input>

    <button onClick={register}>Create User</button>

    </div>

    <div>
    <h2>Login</h2>
    <input placeholder='Email' onChange={(event) => {setLoginEmail(event.target.value)}}></input>
    <input placeholder='Password' onChange={(event) => {setLoginPassword(event.target.value)}}></input>
    <button onClick={login}>Login</button>
    </div>

    <div>

    <h2>User Logged In:{user?.email}</h2>
    <button onClick={logout}>Sign Out</button>

    </div>

    {/*show content only whehn user login*/}
    { user ? <h1>user can see this code because user is logged in</h1> : null }
    <div></div>
    </div>
  );
}

export default App;