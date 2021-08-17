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
  const images = auction.image.map((img) => ({ url: img }));
  console.log(images);
  return (
    <div>
      
      <div className="category2">
        <SimpleImageSlider 
       
          width={600}
          height={476}
          images={images}
          showBullets="true"
        />
        </div>
        <div>
        {" "}
        <p className="name1">{auction.name}</p>
        <p className="p1"> {auction.description}</p>
        <p className="p2">Quantity : {auction.quantity}</p>
        <p className="p3">Price : {auction.startingPrice} JOD</p>
        <p className="p4">{auction.startTime}</p>
        <p className="p5">{auction.endTime}</p> 
        <Link className="p7" to="/categories">Go Back </Link>
        <button
          type="button"
          class="p6"
          onClick={() => dispatch(deleteAuction(auction._id))}
        >
          {" "}
          Delete
        </button>
        <Link className="p8" to={`/updateauction/${auction._id}`}> update</Link>
        </div>
    </div>
  );
};

export default AuctionDetails;
