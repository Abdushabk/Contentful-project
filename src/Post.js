import React from 'react'
import './as.css'

const Post = ({ article }) => {
    console.log(article)
    const date = article.fields.date;
    const title = article.fields.title;
    const headImg = article.fields.headImg;
    const description = article.fields.description;

    // const {date, title, headImg, dinnerRecipe} = article.fields
   
    return (
        <div className='post'>
            <h2 className="title">{title}</h2>
            <p className="date">{date}</p>
            {headImg && <img className="headImg" src={headImg.fields.file.url} alt={title} title={title} width={300} />}
            <div>{description}</div>
        </div>
    )
}


export default Post
