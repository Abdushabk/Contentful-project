import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "./post.css";
import "./cont.css";

export default function Post({ post, handleClearQry }) {
  const [postToHTML, setPostToHTML] = useState("");

  useEffect(() => {
    setPostToHTML(documentToHtmlString(post.fields.recipe));
  }, [post]);

  return (
    <div className="post">
      <div className="imgCon">
        <img
          className="postImg"
          src={post.fields.headImg.fields.file.url}
          alt="img"
        />
      </div>
      <div className="postInfo">
        <Link to={`/recipe/${post.sys.id}`} onClick={handleClearQry}>
          <span className="postTitle">{post.fields.title}</span>
        </Link>
        <hr />
        <span className="postDate"></span>
      </div>
      {/*     <p className="postDesc" dangerouslySetInnerHTML={{__html: postToHTML}}></p> */}
    </div>
  );
}
