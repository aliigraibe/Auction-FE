import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import { deleteAuction } from "../../store/actions/AuctionAction";
import pic10 from "../../images/pic10.png";
import pic11 from "../../images/pic11.png";
import pic12 from "../../images/pic12.png";
import useSocket from "../Socket/SocketConnect";

const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const loading = useSelector((state) => state.auctions.loading);
  const user = useSelector((state) => state.user.user);
  const auctionSlug = useParams().auctionSlug;
  const dispatch = useDispatch();

  // if (loading) return <h3>Loading</h3>;
  const auction = auctions.find((auction) => auction.slug === auctionSlug);
  const images = auction.image.map((img) => ({ url: img }));
  useSocket(user, auction, dispatch);

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
        <p className="name1">{auction.name}</p>
        <p className="p1"> {auction.description}</p>
        <p className="p2">Quantity : {auction.quantity}</p>
        <p className="p3">Price : {auction.startingPrice} JOD</p>
        <p className="p4">{auction.startTime}</p>
        <p className="p5">{auction.endTime}</p>
        <Link className="p8" to="/combine">
         <img className="p8" src={pic10}/>
        </Link>
        {user.id === auction.userId._id && (
          <>
            <button
              type="button"
              class="p6"
              onClick={() => dispatch(deleteAuction(auction._id))}
            >
                <img className="p6" src={pic12}/>
            </button>
            <Link className="p7" to={`/updateauction/${auction._id}`}>
            <img className="p7" src={pic11}/>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuctionDetails;
