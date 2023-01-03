import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from "../../hooks/useMysticAnimalsData";
import { useTribesMasksData } from '../../hooks/useTribeMasksData';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any
}

function NftCollection() {
  const { account } = useWeb3React();
  const { collectionName }:any = useParams();
  const { animals }:any = useMysticsAnimalsData();
  const { masks }:any = useTribesMasksData();
  let collection = collectionName === 'mysticAnimals' ? animals : masks;

  return (
    <>
      {
        <div className='nft-room'>
          <div className={ 'nft-collection' }>
            <div className="section-title title-style-two text-center mb-60">
              <span>Collectibles</span>
              <h2>Collection <span>{collectionName}</span></h2>
            </div>
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