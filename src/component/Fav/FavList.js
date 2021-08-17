import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFavs } from "../../store/actions/FavActions";
import Loading from "../Loading/Loading";

const FavList = ({ _auction }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
    dispatch(fetchFavs(user.id));
  }, []);

  const favs = useSelector((state) => state.favs.favs);
  const loading = useSelector((state) => state.favs.loading);

  if (loading) return <Loading />;

  console.log(favs);

  return (
    <>
      <p>hii</p>
    </>
  );
};
export default FavList;
