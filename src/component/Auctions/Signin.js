import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { signin } from "../../store/actions/authActions";

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
      <div class="row">
        <div class="col">
          <label>username</label>
          <input
            type="text"
            class="form-control"
            placeholder="add your username  "
            name="username"
            onChange={handleChange}
          />
        </div>
        <div class="col">
          <label>password</label>
          <input
            type="password"
            class="form-control"
            placeholder="add your password  "
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>{" "}
      </div>
    </form>
  );
};

export default Signin;
