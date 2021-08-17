import { Link } from "react-router-dom";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const AuctionItem = ({ auction }) => {
  if (new Date(auction.startTime) >= new Date()) console.log("true");
  else console.log("false");

  return (
    <div className="box">
      <Link to={`/auctions/${auction.slug}`}>
        <img className="vehicle" src={auction.image[0]} alt={auction.name} />
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p className="name">{auction.name}</p>
      </Link>{" "}
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
