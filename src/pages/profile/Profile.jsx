import "./Profile.scss";
import { BiUserCircle } from "react-icons/bi";

const Profile = () => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  return (
    <div className="profile">
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__greet">
            <BiUserCircle className="profile__icon" />Добро пожаловать<p>{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
