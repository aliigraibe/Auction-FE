import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addAuction } from "../../store/actions/AuctionAction";

const AddAuction = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.categories.loading);
  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  console.log(user);
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
  if (loading) return <p>loading...</p>;

  const foundCategories = categories.map((category) => (
    <option key={category.name} value={category._id}>
      {category.name}
    </option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAuction(auction));
  };
  const handleChange = (event) => {
    setAuction({ ...auction, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setAuction({ ...auction, image: event.target.files });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>name</label>
        <input
          type="text"
          class="form-control"
          placeholder="name"
          name="name"
          value={auction.name}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>description</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your description  "
          value={auction.description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>quantity</label>
        <input
          type="number"
          class="form-control"
          placeholder="enter your quantity  "
          name="quantity"
          value={auction.quantity}
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>startingPrice</label>
        <input
          type="number"
          class="form-control"
          placeholder="add your startingPrice  "
          value={auction.startingPrice}
          name="startingPrice"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>startTime</label>
        <input
          type="datetime-local"
          class="form-control"
          placeholder="add your startTime  "
          value={auction.startTime}
          name="startTime"
          onChange={handleChange}
        />
      </div>{" "}
      <div class="form-group">
        <label>endTime</label>
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
        <label>minBiddingIncrement</label>
        <input
          type="number"
          class="form-control"
          placeholder="add your minBiddingIncrement  "
          value={auction.minBiddingIncrement}
          name="minBiddingIncrement"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>image</label>
        <input
          type="file"
          multiple="multiple"
          class="form-control"
          name="image"
          onChange={handleImage}
        />




        
      </div>
      <select
        onChange={handleChange}
        class="aria-select"
        value={auction.categoryId}
        name="categoryId"
      >
        {foundCategories}
      </select>{" "}
      <button type="submit" class="btn btn-primary">
        add auction
      </button>
    </form>
  );
};

export default AddAuction;
