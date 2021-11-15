import { Link } from "react-router-dom";
import "./post.css";

export default function Post4() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://ychef.files.bbci.co.uk/1600x900/p04tx3m6.webp"
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