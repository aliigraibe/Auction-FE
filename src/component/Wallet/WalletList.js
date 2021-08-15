
import { useSelector } from "react-redux";
import WalletItem from "./WalletItem";

const WalletList = ({ _auction }) => {
  const loading = useSelector((state) => state.wallets.loading);
  const wallets = useSelector((state) => state.wallets.wallets);

  if (loading) return <p>loading...</p>;
  let walletList = wallets
    .map((wallet) => <WalletItem wallet={wallet} key={wallet.id} />);

  return (
    <>
      {" "}
      {walletList};
    </>
  );
};
export default WalletList;
