import React from "react";
import "./style.scss";
import "./Login.scss";

import loginImg from "../login.svg";
import fire from '../util/Firebase'

class Login extends React.Component{

    login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }

      render(){
        return (
            <div className="base-container" >
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input id="email" type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" onClick={this.login} className="btn">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}
export default Login ;