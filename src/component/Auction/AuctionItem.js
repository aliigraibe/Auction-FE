import { Link } from "react-router-dom";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { addFouvarite } from "../../store/actions/FavActions";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuction } from "../../store/actions/AuctionAction";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const AuctionItem = ({ auction,props }) => {
  const user = useSelector((state) => state.user.user);
  const favs = useSelector((state) => state.favs.favs);
  const dispatch = useDispatch();
  let status = false;
  favs.forEach((f) => {
    if (f.auctionId._id === auction._id) status = true;
  });


  return (
    <div className="box">
      <Link to={`/auctions/${auction.slug}`}>
        <img className="vehicle" src={auction.image[0]} alt={auction.name} />
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p className="name">{auction.name}</p>
      </Link>{" "}
      {!status && (
        <button
          type="button"
          class="p8"
          onClick={() => dispatch(addFouvarite(user.id, auction._id))}
        >
          Add Favourite
        </button>
      )}
      <button
        type="button"
        class="p6"
        onClick={() => dispatch(deleteAuction())}
      >
        Delete
      </button>
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
