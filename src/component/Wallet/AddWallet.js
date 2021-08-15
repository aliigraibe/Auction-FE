import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addWallet } from "../../store/actions/WalletAction";
import { FormCenter } from "../../styles";

const AddAuction = () => {
  const dispatch = useDispatch();
  const wallets = useSelector((state) => state.wallets.wallets);
  const loading = useSelector((state) => state.wallets.loading);
  const user = useSelector((state) => state.user.user);

  const [wallet, setWallet] = useState({
    balance: "",
    userId: user.id,
  });

  if (loading) return <p>loading...</p>;

  const handleChange = (event) => {
    setWallet({ ...wallet, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addWallet(wallet));
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Balance</label>
        <input
          type="text"
          class="form-control"
          name="balance"
          value={wallet.balance}
          onChange={handleChange}
        />
      </div>

      <button type="submit" class="addauction2">
        Add Wallet{" "}
      </button>
    </FormCenter>
  );
};

export default AddAuction;
