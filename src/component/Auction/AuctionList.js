import { useState } from "react";
import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";
import SearchBar from "./SearchBar";

const AuctionList = ({ _auction }) => {
  const loading = useSelector((state) => state.auctions.loading);
  const auctions = useSelector((state) => state.auctions.auctions);
  const [query, setQuery] = useState("");

  if (loading) return <p>loading...</p>;
  // REVIEW: a? Seriously? Fix the variable name :))))
  const a = auctions.map((auction) => auction.categoryId._id);
  // REVIEW: const not let
  let auctionList = auctions
    // REVIEW: === not ==
    .filter((auction) => auction.categoryId._id == _auction)
    .filter((auction) => auction.name.includes(query.toLowerCase()))
    .map((auction) => <AuctionItem auction={auction} key={auction.id} />);

  // REVIEW: const not let
  // REVIEW: bad variable name, fix it
  let auctionListO = auctions
    .filter((auction) => auction.name.includes(query.toLowerCase()))
    .map((auction) => <AuctionItem auction={auction} key={auction.id} />);

  return (
    <>
      {" "}
      <SearchBar setQuery={setQuery} />
      <div className="a1">
        {/* null is not a string, it's a reserved word. 
            You can simply say !a && auctionList0 */}
        {auctionList};{a === "null" && { auctionListO }}
      </div>
    </>
  );
};
export default AuctionList;
