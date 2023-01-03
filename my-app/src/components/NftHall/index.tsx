import React from 'react';
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import nftIcon from '../../assets/img/purpleorb.gif';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';
import { useTribesMasksData } from '../../hooks/useTribeMasksData';
import './main.css';

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
      { <>
          <div className="nft-box section-tab yellow-border pb-2">
            <div className="d-flex align-items-center mb-4">
              <div className="col-9">
                <p className={ 'title' }>
                  Here you can see your collectibles <span>Explore the collectibles market</span>
                </p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <img src={nftIcon} className="section-tab-pet" alt="" />
              </div>
            </div>
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
          </div>

          <Link to={`/nftmint/mysticAnimals`}>
            <button 
              className={ 'main-button mb-3' }
              disabled={ account ? false : true }
            >Mint Mystic Animal</button>
          </Link>

          <Link to={`/nftmint/tribeMasks`}>
            <button 
              className={ 'main-button mb-3' }
              disabled={ account ? false : true }
            >Mint Tribe Masks</button>
          </Link>
        </>
      }
    </>
  )
}

export default NftHall;