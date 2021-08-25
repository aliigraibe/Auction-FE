
import pic18 from "../../images/pic18.png";
const ActiveUsers = ({ roomUsers }) => {
  roomUsers = [...new Set(roomUsers)];

  return <div>
    <div className="eye2">
    {roomUsers.length}
    </div>
    <div className="eye1">
    <img className="eye" src={pic18} alt="go back" />
    </div>
    </div>;
};

export default ActiveUsers;
