import "./Profile.scss";
import { BiUserCircle } from "react-icons/bi";
import {RxExit} from 'react-icons/rx'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
  const toHome = useNavigate()
  function leaveAccaunt(){
    localStorage.clear()
    toast.success("You left you account", {
      theme: "colored"
    })
    setTimeout(() => {
      toHome("/")
    }, 1270);
  }
  const userName = JSON.parse(localStorage.getItem("userName"));
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__greet">
            <BiUserCircle className="profile__icon" />Добро пожаловать<p>{userName}</p>
          </div>
          <button onClick={leaveAccaunt}><RxExit/> Выйти</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
