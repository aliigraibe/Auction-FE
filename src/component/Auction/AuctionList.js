import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import AuctionItem from "./AuctionItem";
import SearchBar from "./SearchBar";

const AuctionList = ({ _auction }) => {
  const loading = useSelector((state) => state.auctions.loading);
  const auctions = useSelector((state) => state.auctions.auctions);
  const [query, setQuery] = useState("");

  if (loading) return <Loading />;
  const wantedAuction = auctions.map((auction) => auction.categoryId._id);
  const auctionList = auctions
    // .filter((auction) => new Date(auction.endTime) >= new Date())
    .filter((auction) => auction.categoryId._id === _auction)
    .filter((auction) =>
      auction.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((auction) => <AuctionItem auction={auction} key={auction.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="a1">{auctionList};</div>
    </>
  );
};
export default AuctionList;
