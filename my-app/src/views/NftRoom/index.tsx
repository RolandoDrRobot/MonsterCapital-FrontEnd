import React from 'react';
import MyNfts from '../../components/MyNfts/index';
import Minting from '../../components/Minting/index';
import './main.css';


function NftRoom() {
  return (
    <>
      <div className="nft-room d-flex align-items-center justify-content-center">
        <div>
          <MyNfts />
          <Minting />
        </div>
      </div>
    </>
  )
}

export default NftRoom;
