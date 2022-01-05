import React from 'react';
import './Login.css'

function Login(){
    return(
        <div class = "login-page">
            <h1>Welcome Back!</h1>
            <h2>No Account? Sign Up</h2>
            <form>
                <label>
                    <p>Username</p>
                    <input type = "text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type = "password" />
                </label>
            </form>
        </div>
    );
}