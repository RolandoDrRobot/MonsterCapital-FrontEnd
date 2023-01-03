import React from 'react';
import closedContractIcon from '../../assets/img/closed-contract.png';

function ClosedContracts() {
  return (
    <>
      <div className="closed-contracts">
        <h4 className="mb-3">Closed Contracts</h4>
        <div className="contracts">
          <div className="contract d-flex justify-content-between align-items-center">
            <div className="">
              <p className="">200 Orbs</p>
              <p className="">Open date: 12-04-2022</p>
              <p className="">Close date: 9-02-2023</p>
            </div>
            <div className="">
              <img className="" src={closedContractIcon} alt="" />
            </div>
          </div>
          <div className="contract d-flex justify-content-between align-items-center">
            <div className="">
              <p className="">200 Orbs</p>
              <p className="">Open date: 12-04-2022</p>
              <p className="">Close date: 9-02-2023</p>
            </div>
            <div className="">
              <img className="" src={closedContractIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClosedContracts;
