import { FlexStyleVer1 } from "../../styles";

const ActiveUsers = ({ roomUsers }) => {
  roomUsers = [...new Set(roomUsers)];

  return <FlexStyleVer1>{roomUsers.length}</FlexStyleVer1>;
};

export default ActiveUsers;
