import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import useTribeMasks from "./useTribeMasks";

interface TribeMasksParams {
  tribeMasks: any,
  tokenId: any
}

const getTribeMaskData = async ({ tribeMasks, tokenId }:TribeMasksParams) => {
  const [tokenURI, owner] = await Promise.all([
    tribeMasks.methods.tokenURI(tokenId).call(),
    tribeMasks.methods.ownerOf(tokenId).call(),
  ]);

  const responseMetadata = await fetch(tokenURI);
  const metadata = await responseMetadata.json();

  return {
    tokenId,
    tokenURI,
    owner,
    ...metadata,
  };
};

// Plural
const useTribesMasksData = ({ owner = null } = {}) => {
  const [masks, setMasks] = useState<any>([]);
  const { library, account } = useWeb3React();
  const tribeMasks = useTribeMasks();

  const updateMasks = useCallback(async () => {
    if (tribeMasks) {

      let tokenIds:any;
      if(account) {
        if (!library.utils.isAddress(owner)) {
          const totalSupply = await tribeMasks.methods.totalSupply().call();
          tokenIds = new Array(Number(totalSupply))
            .fill(undefined)
            .map((_, index) => index);
        } else {
          const balanceOf = await tribeMasks.methods.balanceOf(owner).call();
  
          const tokenIdsOfOwner = new Array(Number(balanceOf))
            .fill(undefined)
            .map((_, index) =>
              tribeMasks.methods.tokenOfOwnerByIndex(owner, index).call()
            );
  
          tokenIds = await Promise.all(tokenIdsOfOwner);
        }
      }

      const animalsMap = tokenIds.map((tokenId:any) =>
        getTribeMaskData({ tokenId, tribeMasks })
      );

      const animalsPromise = await Promise.all(animalsMap);

      setMasks(animalsPromise);
    }
  }, [tribeMasks, owner]);

  useEffect(() => {
    updateMasks();
  }, [updateMasks]);

  return {
    masks,
    updateMasks,
  };
};

// Singular
const useTribeMaskData = (tokenId = null) => {
  const [mask, setMask] = useState({});
  const tribeMasks = useTribeMasks();

  const updateMask = useCallback(async () => {
    if (tribeMasks && tokenId != null) {
      const toSet = await getTribeMaskData({ tokenId, tribeMasks });
      setMask(toSet);
    }
  }, [tribeMasks, tokenId]);

  useEffect(() => {
    updateMask();
  }, [updateMask]);

  return {
    mask,
    updateMask,
  };
};

export { useTribesMasksData, useTribeMaskData };
