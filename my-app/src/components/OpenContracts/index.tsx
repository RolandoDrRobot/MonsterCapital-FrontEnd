import React from 'react';
import openContractIcon from '../../assets/img/open-contract.png';

function OpenContracts() {
  return (
    <>
      <div className="open-contracts mb-5">
        <h4 className="mb-3">Open Contracts</h4>
        <div className="contracts">
          <div className="contract d-flex justify-content-between align-items-center">
            <div className="">
              <p className="">200 Coras</p>
              <p className="">Open date: 12-04-2022</p>
              <p className="">Close date: 9-02-2023</p>
            </div>
            <div className="">
              <img className="" src={openContractIcon} alt="" />
            </div>
          </div>
          <div className="contract d-flex justify-content-between align-items-center">
            <div className="">
              <p className="">200 Coras</p>
              <p className="">Open date: 12-04-2022</p>
              <p className="">Close date: 9-02-2023</p>
            </div>
            <div className="">
              <img className="" src={openContractIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OpenContracts;
