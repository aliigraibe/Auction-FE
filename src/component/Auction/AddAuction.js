import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
//
import { addAuction } from "../../store/actions/AuctionAction";
import { FormCenter } from "../../styles";
import Loading from "../Loading/Loading";
//
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const AddAuction = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  const [auction, setAuction] = useState({
    name: "",
    description: "",
    startingPrice: "",
    startTime: "",
    endTime: "",
    image: "",
    categoryId: "",
    userId: user.id,
    minBiddingIncrement: "",
  });

  if (loading) return <Loading />;

  const foundCategories = categories.map((category) => (
    <MenuItem key={category.name} value={category._id}>
      {category.name}
    </MenuItem>
  ));

  const handleChange = (event) => {
    setAuction({ ...auction, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setAuction({ ...auction, image: [...event.target.files] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAuction(auction, history));
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <form autoComplete="off">
        <div>
          <TextField
            style={{ marginRight: "70px" }}
            required
            name="name"
            type="text"
            label="name"
            value={auction.name}
            onChange={handleChange}
          />

          <TextField
            required
            type="text"
            label="description"
            name="description"
            value={auction.description}
            onChange={handleChange}
          />
          <br />
          <br />

          <TextField
            style={{ marginRight: "70px" }}
            type="number"
            name="startingPrice"
            label="Starting Price"
            value={auction.startingPrice}
            onChange={handleChange}
          />

          <TextField
            label="minBiddingIncrement"
            type="number"
            name="minBiddingIncrement"
            value={auction.minBiddingIncrement}
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <div className="startData">Starting time </div>
          <TextField
            type="datetime-local"
            class="form-control"
            placeholder="add your startTime  "
            value={auction.startTime}
            name="startTime"
            onChange={handleChange}
            id="Start Date"
          />

          <br />
          <div className="startData">End time</div>

          <TextField
            type="datetime-local"
            class="form-control"
            value={auction.endTime}
            name="endTime"
            onChange={handleChange}
          />
          <br />
          <TextField
            type="file"
            class="form-control"
            name="image"
            onChange={handleImage}
            inputProps={{ multiple: true }}
          />
        </div>

        <br />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={auction.categoryId}
          onChange={handleChange}
          style={{ width: "150px" }}
          name="categoryId"
        >
          <MenuItem value="" disabled="disabled">
            Choose
          </MenuItem>

          {foundCategories}
        </Select>
        <br />
        <br />

        <Button
          onClick={handleSubmit}
          style={{ left: "180px", background: "#CCCCCC " }}
          type="submit"
        >
          Add Auction
        </Button>
      </form>
    </FormCenter>
    // <FormCenter onSubmit={handleSubmit}>
    //   <div class="form-group">
    //     <label className="b22">Name</label>
    //     <input
    //       type="text"
    //       class="form-control"
    //       name="name"
    //       value={auction.name}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div class="form-group">
    //     <label className="b22">Description</label>
    //     <input
    //       type="text"
    //       class="form-control"
    //       value={auction.description}
    //       name="description"
    //       onChange={handleChange}
    //     />
    //   </div>

    //   <div class="form-group">
    //     <label className="b22">Starting Price</label>
    //     <input
    //       type="number"
    //       class="form-control"
    //       value={auction.startingPrice}
    //       name="startingPrice"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div class="form-group">
    //     <label className="b22">Minimum Bidding Increment</label>
    //     <input
    //       type="number"
    //       class="form-control"
    //       value={auction.minBiddingIncrement}
    //       name="minBiddingIncrement"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div class="form-group">
    //     <label className="b22">Start Time</label>
    //     <input
    //       type="datetime-local"
    //       class="form-control"
    //       placeholder="add your startTime  "
    //       value={auction.startTime}
    //       name="startTime"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div class="form-group">
    //     <label className="b22">End Time</label>
    //     <input
    //       type="datetime-local"
    //       class="form-control"
    //       placeholder="add your endTime  "
    //       value={auction.endTime}
    //       name="endTime"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div class="form-group">
    //     <label className="b22">Image</label>
    //     <input
    //       type="file"
    //       multiple="multiple"
    //       class="form-control"
    //       name="image"
    //       onChange={handleImage}
    //     />
    //   </div>
    //   <label className="b22">Choose Category</label>
    //   <br />

    //   <select
    //     onChange={handleChange}
    //     class="aria-select"
    //     value={auction.categoryId}
    //     name="categoryId"
    //   >
    //     <option value="" disabled="disabled">
    //       Choose{" "}
    //     </option>

    //     {foundCategories}
    //   </select>
    //   <br />
    //   <br />

    //   <button type="submit" class="addauction2">
    //     Add Auction
    //   </button>
    // </FormCenter>
  );
};

export default AddAuction;
