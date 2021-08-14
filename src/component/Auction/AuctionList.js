import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";

const AuctionList = ({auctions}) => {

  let auctionList = auctions.map((auction) => (
    <AuctionItem auction={auction} key={auction.id} />
  ));

  return <>{auctionList};</>;
};
export default AuctionList;
