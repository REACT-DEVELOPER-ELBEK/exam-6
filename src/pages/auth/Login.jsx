import React, { useState } from "react";
import "./Auth.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let goProfile = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isCharacter, setIsCharacter] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function submitLogin() {
    if (userName,password.trim().length == 0) {
      toast.error("Please fill empty field(s)", {
        theme: "colored",
      });
    } else {
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("userPassword", JSON.stringify(password));
      goProfile("");
      setTimeout(() => {
        window.location.reload();
      }, 1400);
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login-forms">
            <h1>Login</h1>
            <div className="login__inputs">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="auth__password">
                <input
                  type={isShown ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>
                  {isShown ? (
                    <FiEyeOff
                      className="password-shown"
                      onClick={() => setIsShown(false)}
                    />
                  ) : (
                    <FiEye
                      className="password-shown"
                      onClick={() => setIsShown(true)}
                    />
                  )}
                </button>
              </div>
              <p className={isCharacter ? "true" : "false"}>
                Password have to be at least 8 characters
              </p>
            </div>
            <button onClick={() => submitLogin()} type="submit">Login</button>
            <ToastContainer/>
          </div>
          <div className="login-image-side">
            <img
              src="https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
