import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from "../../hooks/useMysticAnimalsData";
import { useTribesMasksData } from '../../hooks/useTribeMasksData';
import { useState } from 'react';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any
}

function NftCollection() {
  const { active } = useWeb3React();
  const { collectionName }:any = useParams();
  const { animals }:any = useMysticsAnimalsData();
  const { masks }:any = useTribesMasksData();
  let collection = collectionName === 'mysticAnimals' ? animals : masks;

  return (
    <>
      {!active ? <div></div> :
      <div className='nft-room'>
        <div className="nft-hall">
          <div className="collection row">
            {collection.map(({ name, image, tokenId }:nftMetaData) => (
              <Link key={tokenId} to={`/nftroom/${collectionName}/${tokenId}`} className="col-4 yellow">
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