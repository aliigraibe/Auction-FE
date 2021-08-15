import AuctionList from "./AuctionList";
import CategoryList from "../Category/CategoryList";
import { useSelector } from "react-redux";
import { useState } from "react";

const Combine = () => {
  const [select, setSelect] = useState();
  const loading = useSelector((state) => state.auctions.loading);
  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className="centered">
        <CategoryList setSelect={setSelect} />

        <AuctionList _auction={select} />
      </div>
    </>
  );
};

export default Combine;
