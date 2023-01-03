import React from 'react';
import skyStation from '../../assets/galleries/sky.png';
import spaceship from '../../assets/galleries/space.png';
import MysticCave from '../../assets/galleries/cave.png';
import creadoreRoom from '../../assets/galleries/creadore.png';
import './main.css';

function Meetings () {

  return (
    <>
      <div className="new yellow-border">
        <a className='button' href="https://oncyber.io/spaces/Wym5tDo5WMhRV8UdAlij" target="_blank" rel="noopener">
          <img src={skyStation} alt="" />
          <h5>Sky Station</h5>
        </a>
      </div>
      <div className="new yellow-border">
        <a className='button' href="https://oncyber.io/spaces/HShxvlLCSmMj7CnxUm4H" target="_blank" rel="noopener">
          <img src={spaceship} alt="" />
          <h5>Spaceship</h5>
        </a>
      </div>
      <div className="new yellow-border">
        <a className='button' href="https://oncyber.io/spaces/b39I9cg4oWk0yw9uyVkD" target="_blank" rel="noopener">
          <img src={MysticCave} alt="" />
          <h5>Mystic Cave</h5>
        </a>
      </div>
      <div className="new yellow-border">
        <a className='button' href="https://oncyber.io/spaces/qYouvNkIRmrqpHhmpdKI" target="_blank" rel="noopener">
          <img src={creadoreRoom} alt="" />
          <h5>Creadore Room</h5>
        </a>
      </div>
    </>
  )
}

export default Meetings;