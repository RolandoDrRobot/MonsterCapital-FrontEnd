import React from 'react';
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from "../../hooks/useMysticAnimalsData";

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any
}

function NftCollection() {
  const { active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();

  return (
    <>
      {!active ? <div></div> :
      <div className='nft-room'>
        <div className="nft-hall">
          <div className="collection row">
            {animals.map(({ name, image, tokenId }:nftMetaData) => (
              <Link key={tokenId} to={`/nftroom/${tokenId}`} className="col-4 yellow">
                <div className="nft-card">
                  <img src={image} alt=""/>
                  <p>{name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> 
      }
    </>
  )
}

export default NftCollection;