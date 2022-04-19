import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useParams } from 'react-router-dom';
import useMysticAnimals from '../../hooks/useMysticAnimals';
import useTribeMasks from '../../hooks/useMysticAnimals';
import Loading from '../Loading/index';
import { useCallback, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

function NftMint() {

  const alert = useAlert();
  const tribeMasks = useTribeMasks();
  const mysticAnimals = useMysticAnimals();
  const { account, library } = useWeb3React();
  const { collectionName }:any = useParams();
  let [collection, setCollection] = useState<any>(collectionName === 'mysticAnimals' ? mysticAnimals : tribeMasks);
  const [isMinting, setIsMinting] = useState(false);

  const getCollectionData = useCallback(async () => {
    if (collection) {
      const totalSupply = await collection.methods.totalSupply().call();
    }
  }, [collection, account]);

  useEffect(() => {
    getCollectionData();
  }, [getCollectionData]);

  const mint = () => {
    setIsMinting(true);
    collection.methods
      .mint()
      .send({
        from: account,
        value: library.utils.toWei('0.02', 'ether')
      })
      .on('error', (error:any) => {
        setIsMinting(false);
        alert.show('There was an error ' + error.message);
        console.log(error.message);
      })
      .on('transactionHash', (txHash:any) => {
        setIsMinting(false);
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        setIsMinting(false);
        alert.show('Transaction confirmed');
      });
  };

  return (
    <>{
      isMinting === true ? <Loading /> :
      <div className="nft-room">
        <div className="nft-hall">
          <h1 className="collection-title">NFT Mint</h1>
          <div className="collection row">
            <div className="minting d-flex justify-content-center">
            <button 
              type="submit"
              className="main-button"
              onClick={mint}>Mint {collectionName}</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default NftMint;
