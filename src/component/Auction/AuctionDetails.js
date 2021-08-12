import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const auctionId = useParams().auctionId;

  const auction = auctions.find((auction) => auction._id === auctionId);
  const images = [{ url: auction.image[0] }, { url: auction.image[1] }];
  return (
    <div>
      <>
        <SimpleImageSlider
          width={300}
          height={200}
          images={images}
          showBullets="true"
        />{" "}
        <p>{auction.name}</p>
        <p>{auction.description}</p>
        <p>{auction.quantity}</p>
        <p>{auction.startingPrice}</p>
        <p>{auction.price}</p>
        <p>{auction.startTime}</p>
        <p>{auction.endTime}</p> <Link to="/categories">Go Back </Link>
      </>
    </div>
  );
};

export default AuctionDetails;
