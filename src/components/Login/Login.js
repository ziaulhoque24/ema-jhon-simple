import './Login.css';
import React, { useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import {UserContext} from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import {googleSignIn, handleFbSign, handleCreateWithEmailAndPass, handleSignInWithEmailAndPass} from './LoginManager';
// const app = 
function Login() {

let setLoggedUser = useContext(UserContext);
   setLoggedUser = setLoggedUser[1]
let navigate = useNavigate();
let location = useLocation();
let from = location.state?.from?.pathname || "/";
const [user , setUser] = useState({
    name: '',
    photoId: '',
    email: '',
    password: '',
    newUser: false
  })


  // google sign in
  const handleSignInWithGoogle =()=> {
           googleSignIn()
          .then(res=>{
              setUser(res)
              setLoggedUser(res);
              navigate(from, { replace: true });
          })
         }
// fb sign in
const fbSignIn= ()=>{
    handleFbSign()
    .then(res=>{
      
      if(typeof res == "object"){
        setUser(res)
        setLoggedUser(res);
        navigate(from, { replace: true });
      }else{
        user.err = res;
        setUser(user);
      }
     
    })
}

 const { register, watch, handleSubmit, formState: { errors } } = useForm();
 const  newUser = watch("newUser");

const onSubmit = data => {
  const {email, password, name } = data;

if(newUser){
  
              handleCreateWithEmailAndPass(email, password, name)
              .then(res=>{
                console.log(res)
                if(typeof res == "object"){
                  setUser(res);
                  setLoggedUser(res);
                  navigate(from, { replace: true });
                }else{
                  user.err = res;
                  setUser(user);
                }
              })
      
 }

else{
  handleSignInWithEmailAndPass(email , password)
  .then(res=>{
    if(typeof res == "object"){
      setUser(res);
      setLoggedUser(res);
      navigate(from, { replace: true });
    }else{
      user.err = res;
      setUser(user);
    }

  })
 
}
}



return (
    <div style={{textAlign: "center"}}>
         <h1>{user.name}</h1>
      {
        
        <div>
        <button onClick={handleSignInWithGoogle}>Sign in With Google</button><br />
        <button onClick={fbSignIn} >FB Login</button>
   <form onSubmit={handleSubmit(onSubmit)}>
      <input type="checkbox" name="newUser" id="" {...register("newUser")} />
      <label name='newUser'>New User</label><br />
      {newUser && (<div><input placeholder='name' {...register("name", { required: true })} />{!errors.name && <br/>}
      {errors.name && <span>Name field is required <br/></span>}</div>)}
      <input placeholder='email'  {...register("email", { required: true,  pattern: /\S+@\S+\.\S+/ })} /> {!errors.email && <br/>}
      {errors.email && <span>Email field is required <br/></span>}
      <input placeholder='password' {...register("password", { required: true, maxLength: 20, minLength: 6 })} />
      {errors.password && <span>Password field is required</span>}
      <br />
      
      <button type="submit" {...register("button")}>{newUser ? "Register" : "Sign In"}</button>
    </form>
    </div>
}
{ user.successMessage === "createdUser" && <span> <br/> User Created Successfully </span> }
{ user.successMessage === "SignedIn"  && <span><br/>User Signed in Successfully</span> }
 <span style={{color: "red"}}><br/>{user.err}</span>

    </div>
  );
}

export default Login;
