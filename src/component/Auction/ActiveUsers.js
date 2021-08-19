import { FlexStyleVer } from "../../styles";

const ActiveUsers = ({ roomUsers }) => {
  const list = roomUsers.map((user) => {
    return <h3> {user}</h3>;
  });

  return <FlexStyleVer style={{ color: "white" }}>{list}</FlexStyleVer>;
};

export default ActiveUsers;
