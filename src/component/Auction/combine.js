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
      <>
        {" "}
        <CategoryList setSelect={setSelect} />
      </>
      <AuctionList _auction={select} />
    </>
  );
};

export default Combine;
