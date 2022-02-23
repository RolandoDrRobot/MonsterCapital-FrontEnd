import articlePic from '../../assets/img/post-team.jpg';
import { useLocation } from 'react-router-dom';
import './main.css';

function Article() {

  interface Article {
    category: string,
    content: string,
    pic: string,
    subtitle: string,
    title: string,
  }

  const location = useLocation();
  const article = location.state as Article;
  const { 
    category,
    content,
    pic,
    subtitle,
    title
  } = article;
  console.log(pic)

  return (
    <>
      <div className="article">
        <img src={articlePic} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <span>{category}</span>
      </div>
    </>
  )
}

export default Article;
