import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signup } from "../../store/actions/authActions";
import pic4 from "../../images/pic4.png";

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    address: "",
    email: "",
    age: "",
    phoneNum: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div >
      <img className="pic3" src={pic4} alt={"pic4"} />
        <label></label>
        <input
          type="text"
          class="username1"
          placeholder="username"
          name="username1"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div >
        <label></label>
        <input
          type="password"
          class="password1"
          placeholder="enter your password  "
          value={user.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div >
        <label></label>
        <input
          type="email"
          class="email"
          placeholder="enter your email  "
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div >
        <label></label>
        <input
          type="text"
          class="address"
          placeholder="add your address  "
          value={user.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div >
        <label></label>
        <input
          type="number"
          class="age"
          placeholder="add your age  "
          value={user.age}
          name="age"
          onChange={handleChange}
        />
      </div>{" "}
      <div >
        <label></label>
        <input
          type="number"
          class="number"
          placeholder="add your phoneNumber  "
          value={user.phoneNum}
          name="phoneNum"
          onChange={handleChange}
        />
      </div>
      <button type="submit" class="login1">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
