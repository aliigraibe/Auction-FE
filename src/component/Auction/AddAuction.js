import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
//
import { addAuction } from "../../store/actions/AuctionAction";
import { FormCenter } from "../../styles";
import Loading from "../Loading/Loading";

const AddAuction = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  const [auction, setAuction] = useState({
    name: "",
    description: "",
    quantity: "",
    startingPrice: "",
    startTime: "",
    endTime: "",
    image: "",
    categoryId: "",
    userId: user.id,
    minBiddingIncrement: "",
  });

  if (loading) return <Loading/>

  const foundCategories = categories.map((category) => (
    <option key={category.name} value={category._id}>
      {category.name}
    </option>
  ));

  const handleChange = (event) => {
    setAuction({ ...auction, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setAuction({ ...auction, image: [...event.target.files] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAuction(auction,history));
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          value={auction.name}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input
          type="text"
          class="form-control"
          value={auction.description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Quantity</label>
        <input
          type="number"
          class="form-control"
          name="quantity"
          value={auction.quantity}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Starting Price</label>
        <input
          type="number"
          class="form-control"
          value={auction.startingPrice}
          name="startingPrice"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Minimum Bidding Increment</label>
        <input
          type="number"
          class="form-control"
          value={auction.minBiddingIncrement}
          name="minBiddingIncrement"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Start Time</label>
        <input
          type="datetime-local"
          class="form-control"
          placeholder="add your startTime  "
          value={auction.startTime}
          name="startTime"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>End Time</label>
        <input
          type="datetime-local"
          class="form-control"
          placeholder="add your endTime  "
          value={auction.endTime}
          name="endTime"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Image</label>
        <input
          type="file"
          multiple="multiple"
          class="form-control"
          name="image"
          onChange={handleImage}
        />
      </div>
      <label>Choose Category</label>
      <br />

      <select
        onChange={handleChange}
        class="aria-select"
        value={auction.categoryId}
        name="categoryId"
      >
        <option value="" disabled="disabled">
          Choose{" "}
        </option>

        {foundCategories}
      </select>
      <br />
      <br />

      <button type="submit" class="addauction2">
        Add Auction
      </button>
    </FormCenter>
  );
};

export default AddAuction;
