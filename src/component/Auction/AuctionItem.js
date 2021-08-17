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
    <div>
      <Link to={`/auctions/${auction.slug}`}>
        <img
          width={300}
          height={200}
          src={auction.image[0]}
          alt={auction.name}
        />
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p>{auction.name}</p>
      </Link>{" "}
      {new Date(auction.endTime) <= new Date() ? (
        <p style={{ color: "white" }}>Auction end</p>
      ) : (
        <>
          {new Date(auction.startTime) >= new Date() ? (
            <p style={{ color: "white" }}>
              Auction start :
              {timeAgo.format(new Date(auction.startTime) - 3 * 60 * 60 * 1000)}
            </p>
          ) : (
            <p style={{ color: "white" }}>
              Auction end :
              {timeAgo.format(new Date(auction.endTime) - 3 * 60 * 60 * 1000)}
            </p>
          )}
        </>
      )}
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch(deleteAuction(auction._id))}
      >
        Delete
      </button>
      )
    </div>
  );
};

export default AuctionItem;
