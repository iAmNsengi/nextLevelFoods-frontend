import React from "react";

const Post = ({ params }) => {
  return (
    <div>
      <p>My single post</p>
      <p>{params.slug}</p>
    </div>
  );
};

export default Post;
