import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const loading = useSelector((state) => state.auctions.loading);
  const auctionId = useParams().auctionId;

  if (loading) return <h3>Loading</h3>;

  const auction = auctions.find((auction) => auction._id === auctionId);
  const images = auction.image.map((img) => ({ url: img }));
  return (
    <div>
      <>
        <SimpleImageSlider
          width={300}
          height={200}
          images={images}
          showBullets="true"
        />{" "}
        <p>Name : {auction.name}</p>
        <p>Description : {auction.description}</p>
        <p>Quantity : {auction.quantity}</p>
        <p>Price : {auction.startingPrice} JOD</p>
        <p>{auction.startTime}</p>
        <p>{auction.endTime}</p> <Link to="/categories">Go Back </Link>
      </>
    </div>
  );
};

export default AuctionDetails;
