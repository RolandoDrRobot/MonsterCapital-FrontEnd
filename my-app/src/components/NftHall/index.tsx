import React from 'react';
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
  owner: any,
}

function NftHall() {
  const { account, active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();

  return (
    <>
      {!active ? <div></div> :
        <div className="nft-hall">
          <h1 className="collection-title">NFT Hall</h1>
          <div className="collection row">
            { 
              animals.map(({ name, image, tokenId, owner }:nftMetaData) => {
                if (owner === account) {
                  return <Link key={tokenId} to={`/nftroom/${tokenId}`} className="col-4 yellow">
                           <div className="nft-card">
                             <img src={image} alt=""/>
                             <p>{name}</p>
                           </div>
                         </Link>
                }
              })
            }
          </div>
        </div> 
      }
    </>
  )
}

export default NftHall;