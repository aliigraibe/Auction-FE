import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { signup } from "../../store/actions/authActions";

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
      <div class="form-group">
        <label>userName</label>
        <input
          type="text"
          class="form-control"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>password</label>
        <input
          type="password"
          class="form-control"
          placeholder="enter your password  "
          value={user.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>email</label>
        <input
          type="email"
          class="form-control"
          placeholder="enter your email  "
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>address</label>
        <input
          type="text"
          class="form-control"
          placeholder="add your address  "
          value={user.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>age</label>
        <input
          type="number"
          class="form-control"
          placeholder="add your age  "
          value={user.age}
          name="age"
          onChange={handleChange}
        />
      </div>{" "}
      <div class="form-group">
        <label>phoneNumber</label>
        <input
          type="number"
          class="form-control"
          placeholder="add your phoneNumber  "
          value={user.phoneNum}
          name="phoneNum"
          onChange={handleChange}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        add
      </button>
    </form>
  );
};

export default SignupForm;
