import StakeBox from '../../components/StakeBox/index';
import OpenContracts from '../../components/OpenContracts/index';
import ClosedContracts from '../../components/ClosedContracts/index';
import './main.css';

function Stake() {
  return (
    <>
      <div className="stake">
        <StakeBox />
        <OpenContracts />
        <ClosedContracts />
      </div>
    </>
  )
}

export default Stake;
