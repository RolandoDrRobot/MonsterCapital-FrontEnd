import newPic from '../../assets/img/post-team.jpg';
import './main.css';

function News() {
  return (
    <>
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
    </>
  )
}

export default News;