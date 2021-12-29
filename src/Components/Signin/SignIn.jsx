import React,{useState} from 'react';
import LoginForm from './login/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import './SignIn.css';

function SignIn(){
    const adminUser = {
            email:"admin@gmail.com",
            password:"admin@123"
    }
    
    const [user, setUser] = useState({name:"",email:""});
    const [error,setError] = useState("");

    const Login = details =>{
        console.log(details);
        if(details.email===adminUser.email && details.password === adminUser.password)
        {
            console.log("logged in..");
            setUser({name:details.name,email:details.email});
        }
        else
        {
            console.log("details not matched...");
            setError("details not matched...");
        }
    }

    // const Logout = () =>{
    //     console.log("Logout");
    //     setUser({name:"",email:""});
    // }
    return (
        <div>
           {(user.email!=="") ? (
               <Dashboard/>
            //    <div className="welcome">
            //        <h2>Welcome, <span>{user.name}</span></h2>
            //        <button onClick = {Logout}>Logout</button>
            //    </div>
           ):(
            <div className = "SignIn">
               <LoginForm Login = {Login} error = {error} />
            </div>
           )} 
        </div>
    )
}

export default SignIn;