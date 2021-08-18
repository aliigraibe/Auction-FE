import { useSelector } from "react-redux";
import pic5 from "../../images/pic5.png";
import AuctionItem from "../Auction/AuctionItem";
import Loading from "../Loading/Loading";

const FavList = () => {
  const { user, users, loading } = useSelector((state) => state.user);
  const { auctions, loading2 } = useSelector((state) => state.auctions);

  if (loading || loading2) return <Loading />;

  const wantedUser = users.find((_user) => _user._id === user.id);
  const list = auctions
    .filter((auction) => wantedUser.fav.includes(auction._id))
    .map((auction) => <AuctionItem auction={auction} key={auction._id} />);

  return <><div className="a1">
    {list}</div></>;
};
export default FavList;
