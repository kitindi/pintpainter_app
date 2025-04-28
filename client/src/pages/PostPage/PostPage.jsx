import React from "react";
import { Link } from "react-router";
import Image from "../../components/Image/Image";
import PostInteractions from "../../components/PostInteractions/PostInteractions";

const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/image_1.jpg" w={542} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john">
            <Image path="/generals/user.png" w={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
