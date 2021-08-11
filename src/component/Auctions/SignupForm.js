import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory  } from "react-router";
import { signup   } from "../../store/actions/authActions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    history.push("/shops");
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>FirstName</label>
        <input
          type="text"
          class="form-control"
          placeholder="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>LastName</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your lastName  "
          value={user.lastName}
          name="lastName"
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
        <label>username</label>
        <input
          type="text"
          class="form-control"
          placeholder="add your username  "
          value={user.username}
          name="username"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>password</label>
        <input
          type="password"
          class="form-control"
          placeholder="add your password  "
          value={user.password}
          name="password"
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
