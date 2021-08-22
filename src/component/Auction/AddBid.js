import { Center2 } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBid } from "../../store/actions/AuctionAction";

const AddBid = ({ highest, user, auction, socket }) => {
  const dispatch = useDispatch();
  const [placeBid, setPlaceBid] = useState({
    ...highest,
    userId: user.id,
    auctionId: auction._id,
  });

  const handleIncrease = (event) => {
    setPlaceBid({
      ...placeBid,
      bid: parseInt(placeBid.bid) + parseInt(event.target.name),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (placeBid.bid <= highest.bid || placeBid.bid <= auction.startingPrice) {
      console.log("failed");
    } else {
      dispatch(addBid(placeBid, socket));
    }
  };

  return (
    <>
      <Center2 onSubmit={handleSubmit}>
        <div class="form-group">
          <label className="bid">Bid Ammount </label>
          <input
            type="number"
            class="form-control"
            name="Ammount"
            value={placeBid.bid}
            onChange={(event) =>
              setPlaceBid({ ...placeBid, bid: event.target.value })
            }
          />
        </div>

        <div>
          <button
            type="button"
            className="b1"
            name="1"
            onClick={handleIncrease}
          >
            +1
          </button>
          <button
            type="button"
            className="b2"
            name="10"
            onClick={handleIncrease}
          >
            +10
          </button>
          <button
            type="button"
            className="b3"
            name="100"
            onClick={handleIncrease}
          >
            +100
          </button>
          <button
            type="button"
            className="b4"
            name="500"
            onClick={handleIncrease}
          >
            +500
          </button>
        </div>

        <button className="place" type="submit">
          Place a Bid
        </button>
      </Center2>
    </>
  );
};

export default AddBid;
