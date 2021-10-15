import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () =>{
        Axios.post('http://localhost:3030/signup', {
            email: email, 
            password: password,
        }).then(()=>{
                console.log("data inserted!!!")
            }).catch(()=>{
                console.log('problem inserting data!')
            })
    }
    return ( 

        <main class="form-signin">
            <form>                
                <h1 class="h3 mb-3 fw-normal">
                    Please sign up</h1>

                <div class="form-floating">
                <input type="email" class="form-control"                     
                     placeholder="name@example.com"
                     onChange={(event)=>{
                         setEmail(event.target.value)}}/>
                <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                <input type="password" class="form-control" 
                     placeholder="Password"
                     onChange={(event)=>{
                         setPassword(event.target.value)}}/>
                <label for="floatingPassword">Password</label>
                </div>                

                <div class="checkbox mb-3">
                <label >
                    <input class="mx-2" type="checkbox" value="remember-me"/> 
                        Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-secondary" 
                        type="submit"
                        onClick = {signUp}
                        >
                            Sign up</button>
            </form>
        </main>
    )
}

export default Signin
