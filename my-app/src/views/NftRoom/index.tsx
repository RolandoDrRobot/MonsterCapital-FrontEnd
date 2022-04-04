import React from 'react';
import MyNfts from '../../components/MyNfts/index';
import Minting from '../../components/Minting/index';
import './main.css';


function NftRoom() {
  return (
    <>
      <div className="nft-room">
        <MyNfts />
        <Minting />
      </div>
    </>
  )
}

export default NftRoom;
