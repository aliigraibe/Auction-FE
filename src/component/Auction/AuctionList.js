import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";

const AuctionList = ({ _auction }) => {
  const loading = useSelector((state) => state.auctions.loading);
  const auctions = useSelector((state) => state.auctions.auctions);
  if (loading) return <p>loading...</p>;
  console.log(auctions);
  let auctionList = auctions
    .filter((auction) => auction.categoryId._id == _auction)
    .map((auction) => <AuctionItem auction={auction} key={auction.id} />);

  return <>{auctionList};</>;
};
export default AuctionList;
