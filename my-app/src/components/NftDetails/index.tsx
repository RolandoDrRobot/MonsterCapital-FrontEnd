import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import { useAlert } from 'react-alert';
import goBackButton from '../../assets/img/close.png';

import useMysticAnimals from '../../hooks/useMysticAnimals';
import { useMysticAnimalData } from '../../hooks/useMysticAnimalsData';
import useTribeMasks from '../../hooks/useTribeMasks';
import { useTribeMaskData } from '../../hooks/useTribeMasksData';

import './main.css';

function NftDetails() {
  const { active, account, library } = useWeb3React();
  const { collectionName, tokenId }:any = useParams();
  const alert = useAlert();

  const { animal, updateAnimal }:any = useMysticAnimalData(tokenId);
  const animals = useMysticAnimals();

  const { mask, updateMask }:any = useTribeMaskData(tokenId);
  const masks = useTribeMasks();

  let collection = collectionName === 'mysticAnimals' ? animals : masks;
  let nft = collectionName === 'mysticAnimals' ? animal : mask;
  let nftUpdateMethod = collectionName === 'mysticAnimals' ? updateAnimal : updateMask;

  const transfer = () => {
    const address = prompt('Receiver address: ');
    const isAddress = library.utils.isAddress(address);

    if (!isAddress) {
      alert.show({
        title: 'Dirección inválida',
        description: 'La dirección no es una dirección de Ethereum',
        status: 'error',
      });
    } else {
      collection.methods
        .safeTransferFrom(nft.owner, address, nft.tokenId)
        .send({
          from: account,
        })
        .on('error', () => {
        })
        .on('transactionHash', (txHash:string) => {
          alert.show('Transaction sent');
        })
        .on('receipt', () => {
          alert.show(`${address} owns the punk now`);
          nftUpdateMethod();
        });
    }
  };

  return (
    <>
      {!active ? <div></div> :
        <div className='nft-details'>
          <div className='nft'>
            <div className="text-center">
              <img src={nft.image} className="nft-image" alt=""/>
            </div>
            <Link to={`/nftcollection/${collectionName}`}>
              <h1 className="nft-name yellow">{nft.name}</h1>
            </Link>
            <p>Owner: 
              <Link to={`/nftowner/${nft.owner}`}>
                <span className="yellow m-0"> {useTruncatedAddress(nft.owner)}</span>
              </Link>
            </p>
            <p className="">{nft.description}</p>
            <p>Token ID: 
              <span className="yellow m-0"> {nft.tokenId}</span>
            </p>
            {
              nft.owner === account 
              ? <button 
                  className="main-button mt-3" 
                  onClick={transfer}
                >Tranfer NFT</button>
              : <></>
            }
            <Link to="/nftroom">
              <img src={goBackButton} className="nft-close" alt=""/>
            </Link>
          </div>
        </div> 
      }
    </>
  )
}

export default NftDetails;