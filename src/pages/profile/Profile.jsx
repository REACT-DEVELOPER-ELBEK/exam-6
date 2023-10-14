import "./Profile.scss";
import { BiUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const notify = () => toast("Wow so easy !");
  const userName = JSON.parse(localStorage.getItem("userName"));
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__greet">
            <BiUserCircle className="profile__icon" />Добро пожаловать<p>{userName}</p>
          </div>
          <button onClick={notify}></button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
