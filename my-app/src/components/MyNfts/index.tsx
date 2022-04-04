import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from "../../hooks/useMysticAnimalsData";
import './main.css';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any
}

function MyNfts() {
  const { active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();

  return (
    <>
      {!active ? <div></div> :
        <div className="MyNfts">
          <div className="collection row">
            {animals.map(({ name, image, tokenId }:nftMetaData) => (
              <div className="nft-card col-4" key={tokenId}>
                <img src={image} alt=""/>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div> 
      }
    </>
  )
}

export default MyNfts;