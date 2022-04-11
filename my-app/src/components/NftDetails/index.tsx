import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useMysticAnimals from '../../hooks/useMysticAnimals';
import { useMysticAnimalData } from '../../hooks/useMysticAnimalsData';
import { useTruncatedAddress } from '../../hooks/useTruncatedAddress';
import { useAlert } from 'react-alert';
import goBackButton from '../../assets/img/close.png';
import './main.css';

function NftDetails() {
  const { active, account, library } = useWeb3React();
  const { tokenId }:any = useParams();
  const { animal, update }:any = useMysticAnimalData(tokenId);
  const mysticAnimals = useMysticAnimals();
  const alert = useAlert();
  const [transfering, setTransfering] = useState(false);

  const transfer = () => {
    setTransfering(true);

    const address = prompt('Receiver address: ');
    const isAddress = library.utils.isAddress(address);

    if (!isAddress) {
      alert.show({
        title: 'Dirección inválida',
        description: 'La dirección no es una dirección de Ethereum',
        status: 'error',
      });
      setTransfering(false);
    } else {
      mysticAnimals.methods
        .safeTransferFrom(animal.owner, address, animal.tokenId)
        .send({
          from: account,
        })
        .on('error', () => {
          setTransfering(false);
        })
        .on('transactionHash', (txHash:string) => {
          alert.show('Transacción enviada' + txHash);
        })
        .on('receipt', () => {
          setTransfering(false);
          alert.show(`El punk ahora pertenece a ${address}`);
          update();
        });
    }
  };

  return (
    <>
      {!active ? <div></div> :
        <div className='nft-details'>
          <div className='nft'>
            <div className="text-center">
              <img src={animal.image} className="nft-image" alt=""/>
            </div>
            <Link to="/nftcollection">
              <h1 className="nft-name yellow">{animal.name}</h1>
            </Link>
            <p>Owner: 
              <Link to={`/nftowner/${animal.owner}`}>
                <span className="yellow m-0"> {useTruncatedAddress(animal.owner)}</span>
              </Link>
            </p>
            <p className="">{animal.description}</p>
            <p>Token ID: 
              <span className="yellow m-0"> {animal.tokenId}</span>
            </p>
            {
              animal.owner === account 
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