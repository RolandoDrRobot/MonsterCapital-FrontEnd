import React from 'react';
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';
import { useTribesMasksData } from '../../hooks/useTribeMasksData';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
  owner: any,
}

function NftHall() {
  const { account, active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();
  const { masks } = useTribesMasksData();

  return (
    <>
      {!active ? <div></div> :
        <div className="nft-hall">
          <h1 className="collection-title">NFT Hall</h1>
          <div className="collection row">
            { 
              animals.map(({ name, image, tokenId, owner }:nftMetaData) => {
                if (owner === account) {
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
                if (owner === account) {
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

          <Link to={`/nftmint/mysticAnimals`} className="main-button">
            Mint Mystic Animal
          </Link>

          <Link to={`/nftmint/tribeMasks`} className="main-button">
            Mint Tribe Masks
          </Link>
          
        </div>
      }
    </>
  )
}

export default NftHall;