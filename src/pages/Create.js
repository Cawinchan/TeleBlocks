import react, { useEffect } from "react";

import Header from "../components/Header";
import WalletBalance from './WalletBalance'
import NFTMinter from './NFTMinter'

import { useEthers, useEtherBalance } from "@usedapp/core";
import "../styles/Create.css";

const Create = () => {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  useEffect(()=>{
    activateBrowserWallet();
  },[])

  return (
    <>
       <Header />
       <h1 id="header-text-first"> Create your own </h1>
      <h1 id="header-text-second"> TeleBlocks number </h1>

      <h3 id="header-subtext">Take charge of your own mobile identity</h3>
      <p>
            <WalletBalance />
      </p>
      <p>
            <NFTMinter />
      </p>
      
    </>
  );
};

export default Create;
