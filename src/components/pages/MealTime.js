import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/post";
import client from "../../client.js";
import './MealTime.css'

const MealTime = () => {
  const { mealtime } = useParams();
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: mealtime })
      .then(({ items, total }) => {
        setPosts(items);
        setTotal(total);
      })
      .catch(() => {
        setError("Oops! We do not have any posts for this category");
      });
  }, [mealtime]);

  if (error) return <div>{error}</div>;
  return (
    <div className='mealContainer'>
      {/* <p>We have {total} entries for {mealtime}</p> */}
      {posts.map((post) => (
        <Post key={post.sys.id} post={post} />
      ))}
    </div>
  );
};

export default MealTime;
