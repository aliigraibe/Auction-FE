import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import CartItem from "./CartItem";
import PaidItem from "./PaidItem";

const Paid = () => {
  const { user } = useSelector((state) => state.user);
  const { auctions, loading } = useSelector((state) => state.auctions);

  if (loading) return <Loading />;
  const list = auctions
    .filter((auction) => auction.winner === user.id)
    .filter((auction) => auction.payStatus === true)

    .map((auction) => <PaidItem auction={auction} key={auction.id} />);
  return (
    <>
      <div className="a1">{list}</div>
    


    </>
  );
};
export default Paid;
