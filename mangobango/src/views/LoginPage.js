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
export default LoginPage;