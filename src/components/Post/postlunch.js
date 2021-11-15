import { Link } from "react-router-dom";
import "./post.css";

export default function Post2() {
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
          <Link to="/lunch" className="link">
            Lunch
          </Link>
        </span>
        <hr />
        
      </div>
      <p className="postDesc">
        
      </p>
    </div>
  );
}