import React from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/index';
import articlePic from '../../assets/img/post-team.jpg';
import { Link } from 'react-router-dom';
import './main.css';

function News() {

  let [news, setNews] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState<boolean>(true);

  interface New {
    _fieldsProto: {
      category: {
        stringValue: string
      },
      content: {
        stringValue: string
      }
      pic: {
        stringValue: string
      }
      subtitle: {
        stringValue: string
      }
      title: {
        stringValue: string
      }
    }
  }

  React.useEffect(() => {
    axios.get('http://localhost:443/news').then((response) => {
      setNews(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    {
      isLoading === true ? <Loading /> : 
      <div className="news-list">
        {
          news ? news.map(function(item:New, i) {
            return (
              <div key={i} className="new">
                <Link className='button' to="/article" state={
                  { 
                    category: item._fieldsProto.category.stringValue,
                    content: item._fieldsProto.content.stringValue,
                    pic: item._fieldsProto.pic.stringValue,
                    subtitle: item._fieldsProto.subtitle.stringValue,
                    title: item._fieldsProto.title.stringValue
                  }
                }>
                  <img src={articlePic} />
                  <h5>{item._fieldsProto.title.stringValue}</h5>
                </Link>
                {console.log(item)}
              </div>
            )
          }) : <></> 
        }
      </div>
    }

    </>
  )
}

export default News;