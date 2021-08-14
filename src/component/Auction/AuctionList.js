import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";

const AuctionList = ({ _auction }) => {
  const loading = useSelector((state) => state.auctions.loading);
  const auctions = useSelector((state) => state.auctions.auctions);
  if (loading) return <p>loading...</p>;
  let auctionList = auctions.filter((auction)=>auction===_auction).map((auction) => (
    <AuctionItem auction={auction} key={auction.id} />
  ));

  return <>{auctionList};</>;
};
export default AuctionList;
