import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAuction } from "../../store/actions/AuctionAction";

const AuctionItem = ({ auction }) => {
  const dispatch = useDispatch();
  console.log(auction);
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
      <p className="time">{auction.startTime}</p>
      <p className="time1">{auction.endTime}</p>
      <button
        type="button"
        class="delete"
        onClick={() => dispatch(deleteAuction(auction._id))}
      >
        Delete
      </button>
    </div>
  );
};

export default AuctionItem;
