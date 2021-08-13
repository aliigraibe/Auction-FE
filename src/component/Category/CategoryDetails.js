import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import AuctionList from "../Auction/AuctionList";

const CategoryDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const loading = useSelector((state) => state.auctions.loading);
  const categoryName = useParams().categoryName;

  if (loading) return <p>loading...</p>;

  const auctionList = auctions.filter(
    (auction) => auction.categoryId.name == categoryName
  );

  return (
    <div>
      <AuctionList auctions={auctionList} />
    </div>
  );
};

export default CategoryDetails;
