import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBid } from "../../store/actions/AuctionAction";

const AddBid = ({ highest, user, auction }) => {
  const dispatch = useDispatch();
  const [placeBid, setPlaceBid] = useState({
    ...highest,
    userId: user.id,
    auctionId: auction._id,
  });

  const handelIncrease = (event) => {
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
      dispatch(addBid(placeBid));
    }
  };

  return (
    <>
      <FormCenter onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Bid Ammount </label>
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
          <button type="button" name="1" onClick={handelIncrease}>
            +1
          </button>
          <button type="button" name="10" onClick={handelIncrease}>
            +10
          </button>
          <button type="button" name="100" onClick={handelIncrease}>
            +100
          </button>
          <button type="button" name="500" onClick={handelIncrease}>
            +500
          </button>
        </div>

        <button type="submit" class="addauction2">
          Place A Bid
        </button>
      </FormCenter>
    </>
  );
};

export default AddBid;
