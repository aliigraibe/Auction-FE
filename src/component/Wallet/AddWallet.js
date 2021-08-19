import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addWallet } from "../../store/actions/WalletAction";
import { FormCenter } from "../../styles";
import Loading from "../Loading/Loading";

const AddWallet = () => {
  const dispatch = useDispatch();
  const { wallets, loading } = useSelector((state) => state.wallets);
  const user = useSelector((state) => state.user.user);

  const [wallet, setWallet] = useState({
    amount: "",
    walletId: "",
  });

  if (loading) return <Loading />;
  const _wallet = wallets.find((wallet) => wallet.userId._id == user.id);

  const reset = () => {
    setWallet({
      amount: "",
      walletId: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addWallet(wallet));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Balance : {_wallet?.balance} $</label>
        <input
          type="number"
          class="form-control"
          value={wallet.balance}
          onChange={(event) => {
            setWallet({
              ...wallet,
              amount: event.target.value,
              walletId: _wallet._id,
            });
          }}
        />
      </div>

      <button type="submit" class="addauction2">
        Add Balance
      </button>
    </form>
  );
};

export default AddWallet;
