import "./LoginUi.css";
import profile from "../image/profile.svg";
import email from "../image/email.svg";
import pass from "../image/password.svg";
import AdminDash from "../../article/AdminDash";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const redirect = () => {
    history.push("/admin");
  };
  return (
    <div className="lmain">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Admin Login</h1>
            <div>
              <img src={email} alt="email" className="lemail" />
              <input type="text" placeholder="user name" className="lname" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="lemail" />
              <input
                type="password"
                placeholder="user name"
                className="lname"
              />
            </div>
            <div>
              <Link onClick={redirect}>
                <button className="loginbut">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
