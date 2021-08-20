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
    <FlexStyleVer >
      <div  className="top">
      <h3 className="top1">
        Top Bid  : {sort[0]?.bid}
      </h3>
      <h3 className="top2">
        2nd Bid :  {sort[1]?.bid}{" "}
      </h3>
      <h3 className="top3">
        3rd Bid :  {sort[2]?.bid}
      </h3>
      </div>
    </FlexStyleVer>
  );
};

export default Top3;
