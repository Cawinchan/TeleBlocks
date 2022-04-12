import react, { useEffect } from "react";
import Accordion from "../components/base/Accordion";
import AccordionHeader from "../components/base/AccordionHeader";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Checkbox from "../components/base/Checkbox";
import Image from "../components/base/Image";
import Select from "../components/base/Select";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";
import {AiOutlineSearch} from 'react-icons/ai';
import Header from "../components/Header";
import WalletBalance from './WalletBalance'
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
       <h1 id="header-text-first"> Create your own TeleBlocks number</h1>
      <h1 id="header-text-second">  </h1>

      <h3 id="header-subtext">Take charge of your own mobile identity</h3>

      
      <p>
            <WalletBalance />
      </p>
    </>
  );
};

export default Create;
