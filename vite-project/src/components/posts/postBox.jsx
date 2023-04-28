// import React from 'react';
import { BsFillShareFill } from "react-icons/bs";

const PostBox = ({ post }) => {
  return (
    <div className="w-full my-4 border rounded-sm shadow-lg">
      <img
        className="flex justify-start w-full mb-4"
        src={post.image}
        alt={post.title}
      />
      <p className="text-sm text-gray-600">{post.desig}</p>
      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{post.desc}</p>
      <div className="flex items-center mt-4 p-2">
        <img
          className="w-10 h-10 rounded-full"
          src={post.profImg}
          alt={post.name}
        />
        <div className="ml-3 flex justify-around">
          <p className="text-sm font-medium text-gray-900">{post.name}</p>
          <p className="text-sm text-gray-600">{post.views}</p>
        </div>
        <div>
          <BsFillShareFill />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
