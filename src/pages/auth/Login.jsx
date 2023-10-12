import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Auth.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isShown, setIsShown] = useState(false);
  const [isCharacter, setIsCharacter] = useState(true)

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    login(user);
    navigate("/", {
      replace: true,
    });
  };

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
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <div className="auth__password">
                <input
                  type={isShown?"text":"password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
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
              <p className={isCharacter? "true":"false"}>Password have to be at least 8 characters</p>
            </div>
            <button onClick={handleLogin}>Login</button>
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
