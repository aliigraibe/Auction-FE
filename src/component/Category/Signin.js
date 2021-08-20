import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../../store/actions/authActions";
import pic3 from "../../images/pic3.png";

// REVIEW: Why is the signin and signup in the category folder?

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img className="pic2" src={pic3} alt={"pic3"} />
        <div>
          <label></label>
          <input
            type="text"
            class="username"
            placeholder="      Add your username  "
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label></label>
          <input
            type="password"
            class="password"
            placeholder="      Add your password  "
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="login">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Signin;
