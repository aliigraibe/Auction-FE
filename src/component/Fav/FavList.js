import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFavs } from "../../store/actions/FavActions";
import AuctionItem from "../Auction/AuctionItem";
import Loading from "../Loading/Loading";

const FavList = ({ _auction }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) dispatch(fetchFavs(user.id));
  }, [user]);

  const favs = useSelector((state) => state.favs.favs);
  const loading = useSelector((state) => state.favs.loading);

  if (loading) return <Loading />;

  const list = favs.map((fav) => (
    <AuctionItem auction={fav.auctionId} key={fav.auctionId._id} />
  ));
  return <>{list}</>;
};
export default FavList;
