import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import CartItem from "./CartItem";


const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const { auctions, loading } = useSelector((state) => state.auctions);
  

  if (loading) return <Loading />;
  const list = auctions
    .filter((auction) => auction.winner === user.id)
    .map((auction) => <CartItem auction={auction} key={auction.id} />);
  return (
    <>
      <div className="a1">{list}</div>

    </>
  );
};
export default Cart;
