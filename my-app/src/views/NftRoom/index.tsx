import React from 'react';
import MyNfts from '../../components/MyNfts/index';
import './main.css';


function NftRoom() {
  return (
    <>
      <div className="nft-room d-flex align-items-center justify-content-center">
        <MyNfts />
      </div>
    </>
  )
}

export default NftRoom;
