import { FlexStyleVer1 } from "../../styles";

const ActiveUsers = ({ roomUsers }) => {
  roomUsers = [...new Set(roomUsers)];
  const list = roomUsers.map((user) => {
    return <h3>{user} </h3>;
  });

  return <FlexStyleVer1 style={{ color: "white" }}>{list}</FlexStyleVer1>;
};

export default ActiveUsers;
