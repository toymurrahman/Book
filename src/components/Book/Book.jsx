import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, category, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="bg-gray-200 rounded-2xl p-8 m-6">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex  gap-6">
            {tags.map((tag , index) => (
              <button key={index} className="btn btn-xs bg-green-100 text-green-400">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title mt-4">
            {bookName}
            <div className="badge  bg-green-400 text-white"> {category} </div>
          </h2>
          <p> by: {author} </p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
