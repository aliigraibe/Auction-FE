import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAuction } from "../../store/actions/AuctionAction";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const AuctionItem = ({ auction }) => {
  if (new Date(auction.startTime) >= new Date()) console.log("true");
  else console.log("false");

  const dispatch = useDispatch();
  return (
    <div className="box"> 
      <Link to={`/auctions/${auction.slug}`}>
        <img
          className="vehicle"
          src={auction.image[0]}
          alt={auction.name}
          
        />
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p className="name">{auction.name}</p>
      </Link>{" "}
      {new Date(auction.endTime) <= new Date() ? (
        <p className="time" >Auction end</p>
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

      <button
        type="button"
        class="delete"
        onClick={() => dispatch(deleteAuction(auction._id))}
      >
        Delete
      </button>
      )
    </div>
  );
};

export default AuctionItem;
