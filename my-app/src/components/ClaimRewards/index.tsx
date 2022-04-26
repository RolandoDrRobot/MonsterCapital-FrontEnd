import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

function ClaimRewards() {
  const { account } = useWeb3React();

  return (
    <>
      <Link to="/rewards" className={ 'secondary-button d-block mb-3 ' + (account ? '' : 'gray') }>
        Claim your Rewards Here!
      </Link>
    </>
  )
}

export default ClaimRewards;
