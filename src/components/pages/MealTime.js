import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dangerouslySetInnerHTML } from "react-dom";
import Post from "../Post/post";
import client from "../../client.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { download } from "../utils/download";

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
        console.log("file downloaded", items);
        let text = `mealtime: ${mealtime}\n------------`;
        let recipe = "";
        items.map((e) => {
          // getImage(e.fields.headImg.fields.file.url, setImageFile);
          const getImage = async () => {
            const originalImage = await fetch(e.fields.headImg.fields.file.url);
            let imgFile = e.fields.headImg.fields.title;
            console.log(imgFile);
            const imageBlob = await originalImage.blob();
            const imageURL = URL.createObjectURL(imageBlob);
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = e.fields.headImg.fields.title + "";
            document.body.appendChild(link);
            // link.click();
            document.body.removeChild(link);
          };
          getImage();

          // recipe = JSON.stringify(e.fields.recipe.content)

          text =
            text +
            "\n " +
            e.fields.title.trim() +
            "\n §" +
            "RichText: \n" +
            documentToHtmlString(e.fields.recipe) +
            "\n §" +
            e.fields.headImg.fields.title +
            ".png" +
            "\n --------------\n";
        });
        // download(`data_${mealtime}.txt`, text); // write file with data
      })
      .catch(() => {
        setError("Oops! We do not have any posts for this category");
      });
  }, [mealtime]);

  if (error) return <div>{error}</div>;
  return (
    <div>
      <p>
        We have {total} entries for {mealtime}
      </p>
      {posts.map((post) => (
        <Post key={post.sys.id} post={post} />
      ))}
    </div>
  );
};

export default MealTime;
