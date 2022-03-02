import React from 'react';
import NewsComponent from '../../components/News/index';
import './main.css';


function News() {
  return (
    <>
      <div className="news d-flex align-items-center justify-content-center">
        <NewsComponent />
      </div>
    </>
  )
}

export default News;
