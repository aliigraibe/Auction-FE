import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import { deleteAuction } from "../../store/actions/AuctionAction";

const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const loading = useSelector((state) => state.auctions.loading);
  const auctionSlug = useParams().auctionSlug;
  const dispatch = useDispatch();

  if (loading) return <h3>Loading</h3>;
  const auction = auctions.find((auction) => auction.slug === auctionSlug);
  console.log(auction.image);
  const images = auction.image.map((img) => ({ url: img }));
  return (
    <div>
      <>
        {/* <SimpleImageSlider
          width={300}
          height={200}
          images={images}
          showBullets="true"
        />{" "} */}
        <p>Name : {auction.name}</p>
        <p>Description : {auction.description}</p>
        <p>Quantity : {auction.quantity}</p>
        <p>Price : {auction.startingPrice} JOD</p>
        <p>{auction.startTime}</p>
        <p>{auction.endTime}</p> <Link to="/categories">Go Back </Link>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => dispatch(deleteAuction(auction._id))}
        >
          {" "}
          Delete
        </button>
        <Link to={`/updateauction`}> update</Link>
      </>
    </div>
  );
};

export default AuctionDetails;
