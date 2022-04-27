import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';
import { useTribesMasksData } from '../../hooks/useTribeMasksData';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
  owner: any,
}

function NftOwner() {
  const { account } = useWeb3React();
  const { animals } = useMysticsAnimalsData();
  const { masks } = useTribesMasksData();
  const { ownerAddress }:any = useParams();
  const truncatedAddress = useTruncatedAddress(ownerAddress);

  return (
    <>
      {
      <div className='nft-room'>
        <div className={ 'nft-owner section-tab ' + (account ? '' : '') }>
          <h1 className="collection-title mb-4">{truncatedAddress}</h1>
          <div className="collection row">
            { 
              animals.map(({ name, image, tokenId, owner }:nftMetaData) => {
                if (owner === ownerAddress) {
                  return <Link key={tokenId} to={`/nftroom/mysticAnimals/${tokenId}`} className="col-4 yellow">
                            <div className="nft-card">
                              <img src={image} alt=""/>
                              <p>{name}</p>
                            </div>
                          </Link>
                }
              })
            }
          </div>
          <div className="collection row">
            { 
              masks.map(({ name, image, tokenId, owner }:nftMetaData) => {
                if (owner === ownerAddress) {
                  return <Link key={tokenId} to={`/nftroom/tribeMasks/${tokenId}`} className="col-4 yellow">
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
      </div>
      }
    </>
  )
}

export default NftOwner;