import React from 'react';
import Meetings from '../../components/Meetings/index';
import './main.css';


function News() {
  return (
    <>
      <div className="news">
        <div className="section-title title-style-two text-center mb-60">
          <span>Meeting Rooms</span>
          <h2>Let's us know <span className="d-block">what can we do</span></h2>
        </div>
        <Meetings />
      </div>
    </>
  )
}

export default News;
