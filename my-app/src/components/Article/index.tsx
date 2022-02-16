import newPic from '../../assets/img/new-pic.jpg';
import './main.css';

function Article() {
  return (
    <>
      <div className="new">
        <img src={newPic} />
        <h5>We have published the new Roadmap, come and take a look!</h5>
      </div>
    </>
  )
}

export default Article;
