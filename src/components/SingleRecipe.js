
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import client from "../client.js";
import "./SingleRecipe.css";

const SingleRecipe = () => {
    const { id } = useParams();
    console.log({ id });

    const [recipies, setRecipies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .getEntries()
            .then(({ items }) => {
                setRecipies(items);
            })
            .catch(() => {
                setError("Oops! We do not have any posts for this category");
            });
    }, []);

    console.log(recipies);

    ////////////// rich text html renderer///////////////
        /* const [postToHTML, setPostToHTML] = useState('')

        useEffect(()=>{
            setPostToHTML(documentToHtmlString(recipies.fields.recipe))
        },[])

        console.log(postToHTML) */

    ////////////////////////////////////////////////////////

    const singleRecipe = recipies.filter(el => el.sys.id === id);
    console.log(singleRecipe);

    if (error) return <div>{error}</div>;

    return (
        <div className="recipes">
            {singleRecipe.map(item => (
                <div>
                    <div className= "title"><h2>{item.fields.title}</h2></div>

                    <div className="img-recipe">
                    <img src={item.fields.headImg.fields.file.url} alt="img" />
                    </div>

                    <div className= "date">{item.fields.date}</div>

                    <div className= "description"><p>{item.fields.description}</p></div>
                   
                   
                   

                </div>
            ))}
        </div>
    );
};

export default SingleRecipe;