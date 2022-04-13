import { useState } from 'react';
import { ethers } from 'ethers';
import "../styles/walletbalance.css";
import { FaEthereum } from "react-icons/fa";
import { useEthers, useEtherBalance } from "@usedapp/core";
import "../styles/NFTMinter.css";


function NFTMinter() {
    const {activateBrowserWallet, account} = useEthers();

    

    const [NFT, setNFT] = useState();
    
    const getNFT = async () => {


        // if (userForm && emailForm) {
        //     //user wrote in both forms, something is wrong
        // } else if (!userForm && !emailForm) {
        //     //user didn't fill in any form
        // } else {
        //     // return userForm
        // }

        setNFT(<img id ='nft' src={'https://avatars.dicebear.com/api/human/'+account+'.svg'}></img>)
    };

    
    return (
      <div>
          <h5 id="header-text-head">Your Teleblocks Number: {NFT} </h5>
          <button id='button_mint' onClick={() => getNFT()}>Mint NFT for Free</button>
          <input id ='name' name="" maxlength="8"  type='Type your name'></input>
      </div>
      
    );
  };

    


  
  export default NFTMinter;