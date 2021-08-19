import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import { deleteAuction } from "../../store/actions/AuctionAction";
import pic10 from "../../images/pic10.png";
import pic11 from "../../images/pic11.png";
import pic12 from "../../images/pic12.png";
import AddBid from "./AddBid";

import { io } from "socket.io-client";

import { useEffect, useState } from "react";

const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  // const loading = useSelector((state) => state.auctions.loading);
  const user = useSelector((state) => state.user.user);
  const auctionSlug = useParams().auctionSlug;
  const dispatch = useDispatch();
  const [roomUsers, setRoomUsers] = useState([]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("join", user);
      socket.on("message", (message) => {
        setRoomUsers(message.map((u) => u.username));
      });
    }
  }, [socket]);

  // if (loading) return <h3>Loading</h3>;
  const auction = auctions.find((auction) => auction.slug === auctionSlug);
  const images = auction.image.map((img) => ({ url: img }));

  let highest = {
    userId: "",
    bid: 0,
  };

  auction.bidding.forEach((bid) => {
    if (bid.bid > highest.bid) highest = bid;
  });

  console.log(auction);

  return (
    <div>
      <p>{roomUsers}</p>
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
        <p className="p3">Starting Price : {auction.startingPrice} JOD</p>
        <p className="p4">highest bid : {highest.bid} JOD</p>
        {/* <p className="p4">{auction.startTime}</p> */}
        <p className="p5">{auction.endTime}</p>
        <Link className="p8" to="/combine">
          <img className="p8" src={pic10} alt="go back" />
        </Link>
        {user.id === auction.userId._id && (
          <>
            <button
              type="button"
              class="p6"
              onClick={() => dispatch(deleteAuction(auction._id))}
            >
              <img className="p6" src={pic12} alt="go back" />
            </button>
            <Link className="p7" to={`/updateauction/${auction._id}`}>
              <img className="p7" src={pic11} alt="go back" />
            </Link>
          </>
        )}

        <AddBid highest={highest} user={user} auction={auction} />
      </div>
    </div>
  );
};

export default AuctionDetails;
