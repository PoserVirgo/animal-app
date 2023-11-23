import React from "react";
import "./Post.css"


function Post(props) {
    return (
            <div onClick={props.onClickHandler} className="post">
                <img src={props.img} className="image" />
                <p className="name">{props.common_name}</p>
            </div>
    );
}

export default Post;