import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AuctionList from "../Auction/AuctionList";

const CategoryDetails = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const auctions = useSelector((state) => state.auctions.auctions);
  const categoryId = useParams().categoryId;
  const category = categories.find((category) => category.id === categoryId);
  const auctionList = auctions.filter(
    (auction) => auction.categoryId._id == categoryId
  );
  return (
    <div>
      {" "}
      <AuctionList auctions={auctionList} />
    </div>
  );
};

export default CategoryDetails;
