import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const WalletItem = ({wallet}) => {
  return (
    <div>

        <p>{wallet.balance}</p>
    
    </div>
  );
};

export default WalletItem;
