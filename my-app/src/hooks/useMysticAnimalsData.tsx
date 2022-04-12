import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import useMysticAnimals from "./useMysticAnimals";

interface AnimalParams {
  mysticAnimals: any,
  tokenId: any
}

const getAnimalData = async ({ mysticAnimals, tokenId }:AnimalParams) => {
  const [tokenURI, owner] = await Promise.all([
    mysticAnimals.methods.tokenURI(tokenId).call(),
    mysticAnimals.methods.ownerOf(tokenId).call(),
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
const useMysticsAnimalsData = ({ owner = null } = {}) => {
  const [animals, setAnimals] = useState<any>([]);
  const { library, account } = useWeb3React();
  const mysticAnimals = useMysticAnimals();

  const update = useCallback(async () => {
    if (mysticAnimals) {

      let tokenIds:any;
      if(account) {
        if (!library.utils.isAddress(owner)) {
          const totalSupply = await mysticAnimals.methods.totalSupply().call();
          tokenIds = new Array(Number(totalSupply))
            .fill(undefined)
            .map((_, index) => index);
        } else {
          const balanceOf = await mysticAnimals.methods.balanceOf(owner).call();
  
          const tokenIdsOfOwner = new Array(Number(balanceOf))
            .fill(undefined)
            .map((_, index) =>
              mysticAnimals.methods.tokenOfOwnerByIndex(owner, index).call()
            );
  
          tokenIds = await Promise.all(tokenIdsOfOwner);
        }
      }

      const animalsMap = tokenIds.map((tokenId:any) =>
        getAnimalData({ tokenId, mysticAnimals })
      );

      const animalsPromise = await Promise.all(animalsMap);

      setAnimals(animalsPromise);
    }
  }, [mysticAnimals, owner]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    animals,
    update,
  };
};

// Singular
const useMysticAnimalData = (tokenId = null) => {
  const [animal, setAnimal] = useState({});
  const mysticAnimals = useMysticAnimals();

  const update = useCallback(async () => {
    if (mysticAnimals && tokenId != null) {
      const toSet = await getAnimalData({ tokenId, mysticAnimals });
      setAnimal(toSet);
    }
  }, [mysticAnimals, tokenId]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    animal,
    update,
  };
};

export { useMysticsAnimalsData, useMysticAnimalData };
