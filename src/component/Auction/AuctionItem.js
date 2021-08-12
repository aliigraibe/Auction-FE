import { Link } from "react-router-dom";
const AuctionItem = ({ auction }) => {
  return (
    <div>
      <Link to={`/auctions/${auction._id}`}>
        <img
          width={300}
          height={200}
          src={auction.image[0]}
          alt={auction.name}
        />
      </Link>
      <p>{auction.name}</p>
      <p>{auction.startTime}</p>
      <p>{auction.endTime}</p>
    </div>
  );
};

export default AuctionItem;
