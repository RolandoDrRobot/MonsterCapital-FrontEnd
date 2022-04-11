import React from 'react';
import NftHall from '../../components/NftHall/index';
import Minting from '../../components/Minting/index';
import './main.css';


function NftRoom() {
  return (
    <>
      <div className="nft-room">
        <NftHall />
        <Minting />
      </div>
    </>
  )
}

export default NftRoom;
