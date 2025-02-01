import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, category } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="bg-gray-200 rounded-2xl p-8 m-6">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary"> {category} </div>
        </h2>
        <p> {author} </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
