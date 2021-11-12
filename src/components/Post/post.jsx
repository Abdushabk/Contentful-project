import './post.css'

export default function Post({breakfast}) {
    return (
        <div className="post">
            <img className="postImg" src="https://www.pcrm.org/sites/default/files/plant-based-foods-fight-menstrual-pain.jpg" alt="img" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">food</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">{breakfast}</span>
                <hr />
                <span className="postDate"></span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni error repellendus perferendis quasi aut cumque maxime maiores totam officia sed praesentium voluptatum eveniet magnam commodi at, autem quos odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni error repellendus perferendis quasi aut cumque maxime maiores totam officia sed praesentium voluptatum eveniet magnam commodi at, autem quos odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni error repellendus perferendis quasi aut cumque maxime maiores totam officia sed praesentium voluptatum eveniet magnam commodi at, autem quos odio!</p>
        </div>
    )
}
