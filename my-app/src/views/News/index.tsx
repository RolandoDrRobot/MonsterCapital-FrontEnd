import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

import newPic from '../../assets/img/new-pic.jpg';

function News() {
  return (
    <>
      <div className="news">
        <div>
          <div className="new">
            <img src={newPic} />
            <h5>We have published the new Roadmap, come and take a look!</h5>
          </div>
          <div className="new">
            <img src={newPic} />
            <h5>We have published the new Roadmap, come and take a look!</h5>
          </div>
          <div className="new">
            <img src={newPic} />
            <h5>We have published the new Roadmap, come and take a look!</h5>
          </div>
          <div className="new">
            <img src={newPic} />
            <h5>We have published the new Roadmap, come and take a look!</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default News;
