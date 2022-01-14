import React from 'react';
import '../styles/LoginPage.css'

function LoginPage(){
    return(
        <div class = "login-page">
            <form>
            <h1>Welcome Back!</h1>
            <h2>No Account? Sign Up</h2>
                <label>
                    <p>Username</p>
                    <input type = "text" placeholder='Username'/>
                </label>
                <label>
                    <p>Password</p>
                    <input type = "password" placeholder='Password' />
                </label>
                <div>
                    <button type= "submit">Login</button>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;