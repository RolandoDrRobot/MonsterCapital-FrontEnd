import React from 'react';
import { useWeb3React } from '@web3-react/core';
import useMysticAnimals from '../../hooks/useMysticAnimals';
import Loading from '../../components/Loading/index';
import { useCallback, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import "./main.css";

function Minting() {

  const { active, account } = useWeb3React();
  const alert = useAlert();
  const [isMinting, setIsMinting] = useState(false);
  const mysticAnimals = useMysticAnimals();

  const getMysticAnimalsData = useCallback(async () => {
    if (mysticAnimals) {
      const totalSupply = await mysticAnimals.methods.totalSupply().call();
    }
  }, [mysticAnimals, account]);

  useEffect(() => {
    getMysticAnimalsData();
  }, [getMysticAnimalsData]);

  const mint = () => {
    setIsMinting(true);

    mysticAnimals.methods
      .mint()
      .send({
        from: account,
      })
      .on('error', (error:any) => {
        setIsMinting(false);
        alert.show('There was an error ' + error.message);
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
      <div className="minting d-flex justify-content-center">
        <button 
          type="submit"
          className="main-button"
          onClick={mint}>Mint Mystic Animal</button>
      </div>
    }
    </>
  );
}

export default Minting;
