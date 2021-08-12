import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
const AuctionItem = ({ auction }) => {
  const images = [{ url: auction.image[0] }, { url: auction.image[1] }];
  return (
    <div>
      <Link to={`/auctions/${auction._id}`}>
        <SimpleImageSlider
          width={300}
          height={200}
          images={images}
          showBullets="true"
        />
      </Link>
      <p>{auction.name}</p>
      <p>{auction.startTime}</p>
      <p>{auction.endTime}</p>
    </div>
  );
};

export default AuctionItem;
