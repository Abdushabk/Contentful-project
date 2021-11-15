import { Link } from "react-router-dom";
import "./post.css";

export default function Post1() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.iheartberlin.de/wp-content/uploads/2020/12/Benedict-Berlin-Classic-Box_1800x1800-1080x675.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
         
        </div>
        <span className="postTitle">
          <Link to="/breakfast" className="link">
            breakfast
          </Link>
        </span>
        <hr />
        
      </div>
      <p className="postDesc">
        
      </p>
    </div>
  );
}