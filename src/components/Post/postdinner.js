import { Link } from "react-router-dom";
import "./post.css";

export default function Post3() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
         
        </div>
        <span className="postTitle">
          <Link to="/blog" className="link">
            Dinner
          </Link>
        </span>
        <hr />
        
      </div>
      <p className="postDesc">
        
      </p>
    </div>
  );
}