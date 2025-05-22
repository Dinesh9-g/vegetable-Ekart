import React from "react";

const BlogCard = ({ img, title, date, comment }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-md">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{date} | {comment} comments</p>
      </div>
    </div>
  );
};

export default BlogCard;
