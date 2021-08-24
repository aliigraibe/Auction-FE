import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import { deleteAuction } from "../../store/actions/AuctionAction";
import pic10 from "../../images/pic10.png";
import pic11 from "../../images/pic11.png";
import pic12 from "../../images/pic12.png";
import AddBid from "./AddBid";

import { io } from "socket.io-client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useEffect, useState } from "react";
import * as actionTypes from "../../store/actions/types";
import Top3 from "./Top3";
import ActiveUsers from "./ActiveUsers";
import Loading from "../Loading/Loading";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");
const AuctionDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  // const loading = useSelector((state) => state.auctions.loading);
  const { user, users, loading } = useSelector((state) => state.user);
  const auctionSlug = useParams().auctionSlug;
  const dispatch = useDispatch();
  const history = useHistory();

  const [roomUsers, setRoomUsers] = useState([]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("join", { user, auctionSlug });
      socket.on("message", (message) => {
        setRoomUsers(message.map((u) => u.username));
      });

      socket.on("newBid", (bid) => {
        dispatch({
          type: actionTypes.BID,
          payload: { bid },
        });
      });
    }
  }, [socket]);

  if (loading) return <Loading />;
  const auction = auctions.find((auction) => auction.slug === auctionSlug);
  const images = auction.image.map((img) => ({ url: img }));

  let highest = {
    userId: "",
    bid: 0,
  };

  auction.bidding.forEach((bid) => {
    if (bid.bid > highest.bid) highest = bid;
  });

  const sort = auction.bidding.sort((b, a) =>
    a.bid > b.bid ? 1 : b.bid > a.bid ? -1 : 0
  );

  console.log(sort);

  const highestUser = users.find((user) => user._id === highest.userId);

  return (
    <div>
      <p style={{ color: "white" }}></p>
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
        {/* <p className="p2">Quantity : {auction.quantity}</p> */}
        <p className="p2">Starting Price : {auction.startingPrice} JOD</p>
        <p className="p3">
          highest bid : {highest.bid} JOD by {highestUser?.username}
        </p>
        {new Date(auction.endTime) <= new Date() ? (
          <p className="p4"> !! Auction ended !! </p>
        ) : (
          <>
            {new Date(auction.startTime) >= new Date() ? (
              <p className="p4">
                Auction start on :{timeAgo.format(new Date(auction.startTime))}
              </p>
            ) : (
              <p className="p4">
                Auction end in :{timeAgo.format(new Date(auction.endTime))}
              </p>
            )}
          </>
        )}
        <Link className="p8" to="/combine">
          <img className="p8" src={pic10} alt="go back" />
        </Link>
        {user.id === auction.userId._id && (
          <>
            <button
              type="button"
              class="p6"
              onClick={() =>
                dispatch(
                  deleteAuction(auction._id),
                  history.replace("/categories")
                )
              }
            >
              <img className="p6" src={pic12} alt="go back" />
            </button>
            <Link className="p7" to={`/updateauction/${auction._id}`}>
              <img className="p7" src={pic11} alt="go back" />
            </Link>
          </>
        )}

        <AddBid
          highest={highest}
          user={user}
          auction={auction}
          socket={socket}
        />

        <Top3 sort={sort} />
        <ActiveUsers roomUsers={roomUsers} />
      </div>
    </div>
  );
};

export default AuctionDetails;
