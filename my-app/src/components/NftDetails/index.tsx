import React from 'react';
import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useMysticAnimals from '../../hooks/useMysticAnimals';
import { useMysticAnimalData } from '../../hooks/useMysticAnimalsData';
import { useAlert } from 'react-alert';
import './main.css';

function NftDetails() {
  const { active, account, library } = useWeb3React();
  const { animal, update }:any = useMysticAnimalData();
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
        <div className='nftDetails'>
          <div className='nft'>
            {animal.owner}
          </div>
        </div>
      }
    </>
  )
}

export default NftDetails;