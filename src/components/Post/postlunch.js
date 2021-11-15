import { Link } from "react-router-dom";
import "./post.css";

export default function Post2() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.taste.com.au/45Y4XB7k/w1200-h630-cfill/taste/2018/02/barbecued-chicken-rice-bowls-taste-135064-1.jpg"
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