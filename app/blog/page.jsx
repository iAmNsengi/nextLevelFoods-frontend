import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <p>Hey there welcome to my blogs page</p>
      <Link href={"/blog/post-1"}>Post 1</Link>
      <Link href={"/blog/post-2"}>Post 2</Link>
    </div>
  );
};

export default Blog;
