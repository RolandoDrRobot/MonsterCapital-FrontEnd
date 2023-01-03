import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useParams } from 'react-router-dom';
import useMysticAnimals from '../../hooks/useMysticAnimals';
import useTribeMasks from '../../hooks/useTribeMasks';
import Loading from '../Loading/index';
import { useCallback, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

function NftMint() {

  const alert = useAlert();
  const { account, library, active } = useWeb3React();
  const { collectionName }:any = useParams();
  let [isLoading, setIsLoading] = React.useState<boolean>(false);

  const tribeMasks = useTribeMasks();
  const mysticAnimals = useMysticAnimals();
  let [collection, setCollection] = useState<any>(collectionName === 'mysticAnimals' ? mysticAnimals : tribeMasks);
  

  const getCollectionData = useCallback(async () => {
    if (collection) {
      const totalSupply = await collection.methods.totalSupply().call();
    }
  }, [collection, account]);

  useEffect(() => {
    getCollectionData();
  }, [getCollectionData]);

  const mint = () => {
    if (active) {
      setIsLoading(true);
      collection.methods.mint()
      .send({
        from: account,
        value: library.utils.toWei('0.001', 'ether')
      })
      .on('error', (error:any) => {
        alert.show('There was an error ' + error.message);
        setIsLoading(false);
      })
      .on('transactionHash', (txHash:any) => {
        alert.show('Transaction sent');
      })
      .on('receipt', () => {
        alert.show('Transaction confirmed');
        setIsLoading(false);
      });
    }
    
  };

  return (
    <>{
      <div className="nft-room">
        <div className="nft-hall">
          <div className="section-title title-style-two text-center mb-3">
            <h2>NFT <span>Mint</span></h2>
          </div>
          <div className="collection row">
            <div className="minting d-flex justify-content-center">
            {
              isLoading === true 
              ? <Loading /> 
              : <button 
                  type="submit"
                  className="main-button"
                  onClick={mint}
                >Mint {collectionName}</button>
            }
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default NftMint;
