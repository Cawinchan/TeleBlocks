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
          <div id ='form' >
          <label id='label_name' for="fname">Mobile Name</label>
          <input type="text" id="Mobile Name" name="firstname" placeholder="E.g Bready_Chan98🍞"></input>

          <label id='label_bio' for="bio">Bio</label>
          <input type="text" id="bio" name="biography" placeholder="Tell us about yourself!"></input>

          <label id='label_country' for="country">Country</label>
          <input type="text" id="country" name="country" placeholder="Where are you from!"></input>
        
          <button id='button_submit' type="submit"  value="Submit" onClick={() => getNFT()}>Mint A Number for Free</button>
        </div>


      </div>
      
    );
  };

    


  
  export default NFTMinter;