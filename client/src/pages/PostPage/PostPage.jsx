import React from "react";
import "./PostPage.css";
import { Link } from "react-router";
import Image from "../../components/Image/Image";
import PostInteractions from "../../components/PostInteractions/PostInteractions";
import Comments from "../../components/Comments/Comments";

const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/image_1.jpg" w={542} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className="postUser">
            <Image path="/generals/user.png" w={40} />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
