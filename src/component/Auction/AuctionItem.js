import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAuction } from "../../store/actions/AuctionAction";

const AuctionItem = ({ auction }) => {
  const dispatch = useDispatch();
  console.log(auction);
  return (
    <div>
      <Link to={`/auctions/${auction.slug}`}>
        {/* <img
          width={300}
          height={200}
          src={auction.image[0]}
          alt={auction.name}
        /> */}
      </Link>
      <Link to={`/auctions/${auction.slug}`}>
        <p>{auction.name}</p>
      </Link>{" "}
      <p>{auction.startTime}</p>
      <p>{auction.endTime}</p>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => dispatch(deleteAuction(auction._id))}
      >
        Delete
      </button>
    </div>
  );
};

export default AuctionItem;
