import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useTribeMasksABI } from '../config/tokens/TribeMasks';

const { address, abi } = useTribeMasksABI;

const useTribeMasks = () => {
  const { active, library, chainId } = useWeb3React();

  // Use memo will make this to happen only when active, chainId... are available
  const TribeMasks = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address);
  }, [active, chainId]);

  return TribeMasks;
};

export default useTribeMasks;
