import { useSelector } from "react-redux";
import { FlexStyleVer } from "../../styles";
import Loading from "../Loading/Loading";

const Top3 = ({ sort }) => {
  const { users, loading } = useSelector((state) => state.user);

  const top1 = users.find((user) => user._id === sort[0]?.userId);
  const top2 = users.find((user) => user._id === sort[1]?.userId);
  const top3 = users.find((user) => user._id === sort[2]?.userId);

  if (loading) return <Loading />;

  return (
    <FlexStyleVer style={{ color: "white" }}>
      <h3>
        Top Bidder : {top1?.username} = {sort[0]?.bid}
      </h3>
      <h3>
        2nd Bidder : {top2?.username} = {sort[1]?.bid}{" "}
      </h3>
      <h3>
        3rd Bidder : {top3?.username} = {sort[2]?.bid}
      </h3>
    </FlexStyleVer>
  );
};

export default Top3;
