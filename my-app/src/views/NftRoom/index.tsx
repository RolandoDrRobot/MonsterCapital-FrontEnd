import React from 'react';
import Homescreen from '../../components/Homescreen/index';
import NftHall from '../../components/NftHall/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';


function NftRoom() {
  const { active } = useWeb3React();

  return (
    <>
      <div className="nft-room">
      {
        active
          ? <>
              <div className="section-title title-style-two text-center mb-60">
                <span>NFTs</span>
                <h2>Collectibles <span>Wallet</span></h2>
              </div>
              <NftHall />
            </>
          : <Homescreen/> 
      }
      </div>
    </>
  )
}

export default NftRoom;
