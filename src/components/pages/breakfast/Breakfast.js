import React from 'react';
import Post from "../../Post/post"

const Breakfast = ({breakfast}) => {
    return (
        <>
        {/* <div>
             {breakfast.map((item, index) => <Post item={item} key={index}/>)}
        </div>  */}
        <div>
           
            <Post breakfast={breakfast}/>
        </div>
        </>
    )
}

export default Breakfast
