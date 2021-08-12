import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { addAuction } from "../../store/actions/AuctionAction";
import { FormCenter } from "../../styles";

const AddAuction = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const user = useSelector((state) => state.user.user);

  const [auction, setAuction] = useState({
    name: "",
    description: "",
    quantity: "",
    startingPrice: "",
    startTime: "",
    endTime: "",
    image: "",
    categoryId: "",
    minBiddingIncrement: "",
  });

  if (loading) return <p>loading...</p>;

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
    setAuction({ ...auction, userId: user.id });
    dispatch(addAuction(auction));
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <div class="form-group">
        <label>name</label>
        <input
          type="text"
          class="form-control"
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
        <label>startTime</label>
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
        <label>image</label>
        <input
          type="file"
          multiple="multiple"
          class="form-control"
          name="image"
          onChange={handleImage}
        />
      </div>
      <label>Chose Category</label>
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

      <button type="submit" class="btn btn-primary">
        add auction
      </button>
    </FormCenter>
  );
};

export default AddAuction;
