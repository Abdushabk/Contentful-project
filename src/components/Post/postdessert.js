import { Link } from "react-router-dom";
import "./post.css";

export default function Post4() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://biancazapatka.com/wp-content/uploads/2020/07/tiramisu-dessert-einfach-vegan.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
         
        </div>
        <span className="postTitle">
          <Link to="/dessert" className="link">
            Dessert
          </Link>
        </span>
        <hr />
        
      </div>
      <p className="postDesc">
        
      </p>
    </div>
  );
}