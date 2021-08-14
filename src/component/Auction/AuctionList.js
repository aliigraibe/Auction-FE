import { useState } from "react";
import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";
import SearchBar from "./SearchBar";

const AuctionList = ({ _auction }) => {
  const loading = useSelector((state) => state.auctions.loading);
  const auctions = useSelector((state) => state.auctions.auctions);
  const [query, setQuery] = useState("");

  if (loading) return <p>loading...</p>;
  console.log(auctions);
  let auctionList = auctions
    .filter((auction) => auction.categoryId._id == _auction)
    .filter((auction) => auction.name.includes(query.toLowerCase()))
    .map((auction) => <AuctionItem auction={auction} key={auction.id} />);

  return (
    <>
      {" "}
      <SearchBar setQuery={setQuery} />
      {auctionList};
    </>
  );
};
export default AuctionList;
