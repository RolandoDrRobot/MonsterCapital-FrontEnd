import React from 'react';
import skyStation from '../../assets/galleries/sky.png';
import spaceship from '../../assets/galleries/space.png';
import MysticCave from '../../assets/galleries/cave.png';
import creadoreRoom from '../../assets/galleries/creadore.png';
import { Link } from 'react-router-dom';
import './main.css';

function Meetings () {

  return (
    <>
      <div className="new yellow-border">
        <Link className='button' to="https://oncyber.io/spaces/Wym5tDo5WMhRV8UdAlij">
          <img src={skyStation} alt="" />
          <h5>Sky Station</h5>
        </Link>
      </div>
      <div className="new yellow-border">
        <Link className='button' to="https://oncyber.io/spaces/HShxvlLCSmMj7CnxUm4H">
          <img src={spaceship} alt="" />
          <h5>Spaceship</h5>
        </Link>
      </div>
      <div className="new yellow-border">
        <Link className='button' to="https://oncyber.io/spaces/b39I9cg4oWk0yw9uyVkD">
          <img src={MysticCave} alt="" />
          <h5>Mystic Cave</h5>
        </Link>
      </div>
      <div className="new yellow-border">
        <Link className='button' to="https://oncyber.io/spaces/qYouvNkIRmrqpHhmpdKI">
          <img src={creadoreRoom} alt="" />
          <h5>Creadore Room</h5>
        </Link>
      </div>
    </>
  )
}

export default Meetings;