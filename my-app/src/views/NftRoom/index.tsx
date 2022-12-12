import React from 'react';
import NftHall from '../../components/NftHall/index';
import './main.css';


function NftRoom() {
  return (
    <>
      <div className="nft-room">
        <div className="section-title title-style-two text-center mb-60">
          <span>NFTs</span>
          <h2>Let's us know <span className="d-block">what can we do</span></h2>
        </div>
        <NftHall />
      </div>
    </>
  )
}

export default NftRoom;
