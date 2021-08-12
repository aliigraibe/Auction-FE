import AuctionItem from "./AuctionItem";
import { useSelector } from "react-redux";

const AuctionList = ({auctions}) => {
  const auctionList = auctions.map((auction) => (
    <AuctionItem auction={auction} key={auction.id} />
  ));

  return <>{auctionList};</>;
};
export default AuctionList;
