import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import useMysticAnimals from "./useMysticAnimals";

// const getPunkData = async ({ mysticAnimals, tokenId }) => {
//   const [tokenURI, owner] = await Promise.all([
//     mysticAnimals.methods.tokenURI(tokenId).call(),
//     mysticAnimals.methods.ownerOf(tokenId).call(),
//   ]);

//   const responseMetadata = await fetch(tokenURI);
//   const metadata = await responseMetadata.json();

//   return {
//     tokenId,
//     tokenURI,
//     owner,
//     ...metadata,
//   };
// };

// Plural
const useMysticsAnimalsData = ({ owner = null } = {}) => {
  const [animals, setAnimals] = useState([]);
  const { library } = useWeb3React();
  const mysticAnimals = useMysticAnimals();

  const update = useCallback(async () => {
    if (mysticAnimals) {

      let tokenIds;
      if (!library.utils.isAddress(owner)) {
        const totalSupply = await mysticAnimals.methods.totalSupply().call();
        // tokenIds = new Array(Number(totalSupply))
        //   .fill()
        //   .map((_, index) => index);
      } else {
        const balanceOf = await mysticAnimals.methods.balanceOf(owner).call();

        // const tokenIdsOfOwner = new Array(Number(balanceOf))
        //   .fill()
        //   .map((_, index) =>
        //     mysticAnimals.methods.tokenOfOwnerByIndex(owner, index).call()
        //   );

        // tokenIds = await Promise.all(tokenIdsOfOwner);
      }

    //   const animalsMap = tokenIds.map((tokenId) =>
    //     // getPunkData({ tokenId, mysticAnimals })
    //   );

    //   const animalsPromise = await Promise.all(animalsMap);

    //   setAnimals(animalsPromise);
    }
  }, [mysticAnimals, owner, library?.utils]);

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
  const [punk, setPunk] = useState({});
  const [loading, setLoading] = useState(true);
  const mysticAnimals = useMysticAnimals();

  const update = useCallback(async () => {
    if (mysticAnimals && tokenId != null) {
      setLoading(true);

    //   const toSet = await getPunkData({ tokenId, mysticAnimals });
    //   setPunk(toSet);
    }
  }, [mysticAnimals, tokenId]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    loading,
    punk,
    update,
  };
};

export { useMysticsAnimalsData, useMysticAnimalData };
