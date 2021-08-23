import { Link } from "react-router-dom";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { addFouvarite, deleteFavourite } from "../../store/actions/favActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { winner } from "../../store/actions/AuctionAction";
//
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const AuctionItem = ({ auction, props }) => {
  const { user, users, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (loading) return <Loading />;

  const wantedUser = users.find((_user) => _user._id === user.id);

  let status = wantedUser.fav.includes(auction._id);

  const sort = auction.bidding.sort((b, a) =>
    a.bid > b.bid ? 1 : b.bid > a.bid ? -1 : 0
  );

  const handleWinner = () => {
    if (auction.bidding.length !== 0) {
      const newWinner = {
        auctionId: auction._id,
        userId: sort[0].userId,
      };
      dispatch(winner(newWinner));
    }
  };
  return (
    <div className="box">
      <Link to={`/auctions/${auction.slug}`}>
        <img className="vehicle" src={auction.image[0]} alt={auction.name} />
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p className="name">{auction.name}</p>
      </Link>{" "}
      {!status ? (
        <button
          type="button"
          class="p88"
          onClick={() => dispatch(addFouvarite(user.id, auction._id))}
        >
          <img className="fav1" src={pic5} />
        </button>
      ) : (
        <button
          type="button"
          class="p88"
          onClick={() => dispatch(deleteFavourite(user.id, auction._id))}
        >
          <img className="fav1" src={pic6} />
        </button>
      )}
      {new Date(auction.endTime) <= new Date() ? (
        <>
          {!auction.winner && handleWinner()}
          <p className="time"> !! Auction ended !! </p>
        </>
      ) : (
        <>
          {new Date(auction.startTime) >= new Date() ? (
            <p className="time">
              Auction start on :{timeAgo.format(new Date(auction.startTime))}
            </p>
          ) : (
            <p className="time">
              Auction end in :{timeAgo.format(new Date(auction.endTime))}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default AuctionItem;
