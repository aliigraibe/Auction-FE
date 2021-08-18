import { Link } from "react-router-dom";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { addFouvarite, deleteFavourite } from "../../store/actions/FavActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
//
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const AuctionItem = ({ auction, props }) => {
  const { user, users, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (loading) return <Loading />;

  const wantedUser = users.find((_user) => _user._id === user.id);

  let status = wantedUser.fav.includes(auction._id);

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
          class="p8"
          onClick={() => dispatch(addFouvarite(user.id, auction._id))}
        >
          Add Favourite
        </button>
      ) : (
        <button
          type="button"
          class="p6"
          onClick={() => dispatch(deleteFavourite(user.id, auction._id))}
        >
          remove from fav
        </button>
      )}
      {new Date(auction.endTime) <= new Date() ? (
        <p className="time">Auction end</p>
      ) : (
        <>
          {new Date(auction.startTime) >= new Date() ? (
            <p className="time">
              Auction start :
              {timeAgo.format(new Date(auction.startTime) - 3 * 60 * 60 * 1000)}
            </p>
          ) : (
            <p className="time">
              Auction end :
              {timeAgo.format(new Date(auction.endTime) - 3 * 60 * 60 * 1000)}
            </p>
          )}
        </>
      )}
      )
    </div>
  );
};

export default AuctionItem;
