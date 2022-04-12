import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
  owner: any,
}

function NftOwner() {
  const { active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();
  const { ownerAddress }:any = useParams();

  return (
    <>
      {!active ? <div></div> :
      <div className='nft-room'>
        <div className="nft-hall">
          <div className="collection row">
            { 
              animals.map(({ name, image, tokenId, owner }:nftMetaData) => {
                if (owner === ownerAddress) {
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
      </div>
      }
    </>
  )
}

export default NftOwner;