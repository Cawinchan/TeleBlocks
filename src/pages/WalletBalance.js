import { useState } from 'react';
import { ethers } from 'ethers';
import { FaEthereum } from "react-icons/fa";
import "../styles/walletbalance.css";

function WalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(parseFloat(ethers.utils.formatEther(balance)).toFixed(2));
    };
  
    return (
      <div>
          <h5 id="header-text-head">Your Balance: {balance} <FaEthereum/></h5>
          <button id='button_balance' onClick={() => getBalance()}>Show My Balance</button>
      </div>
    );
  };

    


  
  export default WalletBalance;