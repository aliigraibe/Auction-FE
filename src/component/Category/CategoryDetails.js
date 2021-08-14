import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import AuctionList from "../Auction/AuctionList";

const CategoryDetails = (props) => {
  const auctions = useSelector((state) => state.auctions.auctions);
  const loading = useSelector((state) => state.auctions.loading);
  const categorySlug = useParams().categorySlug;

  if (loading) return <p>loading...</p>;

  const auctionList = auctions.filter(
    (auction) => auction.categoryId.name == categorySlug
  );
console.log(categorySlug);
  return (
    <div>
      <AuctionList auctions={auctionList} />
    </div>
  );
};

export default CategoryDetails;
