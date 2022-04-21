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
        var name = document.getElementById("name").value;
        var bio = document.getElementById("bio").value;
        var country = document.getElementById("country").value;
        var file = document.getElementById("file-upload").value;

        localStorage.setItem("name",name);
        localStorage.setItem("bio",bio);
        localStorage.setItem("country",country);
        localStorage.setItem("file-upload",file);
        if (file != null) {
          setNFT(<img id ='nft' src={'https://avatars.dicebear.com/api/avataaars/'+account+'.svg'} style={{position:"absolute",width:"27vw",height:"27vh"}}></img>)
        }
        else{
        setNFT(<img id ='nft' src={'https://avatars.dicebear.com/api/human/'+account+'.svg'} style={{position:"absolute",width:"27vw",height:"27vh"}}></img>)
        }
    };

    
    return (
      <div>
          <h5 id="header-text-head">Your Teleblocks Number: {NFT} </h5>
          <div id ='form' >
          <label id='label_name' for="fname">Mobile Name</label>
          <input type="text" id="name" name="firstname" placeholder="E.g Bready_Chan98🍞"></input>

          <label id='label_bio' for="bio">Bio</label>
          <input type="text" id="bio" name="biography" placeholder="Tell us about yourself!"></input>

          <label id='label_country' for="country">Country</label>
          <input type="text" id="country" name="country" placeholder="Where are you from!"></input>

          <label id='label_file' for="file-upload" class="custom-file-upload">
              File for Avatar
          </label>
          <input id="file-upload" type="file"/>
        
          <button id='button_submit' type="submit"  value="Submit" onClick={() => getNFT()}>Mint A Number for Free</button>
        </div>


      </div>
      
    );
  };

    


  
  export default NFTMinter;