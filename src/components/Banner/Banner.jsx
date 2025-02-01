import React from "react";
import bannerImage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-xl mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
           Books to freshen up your bookshelf
          </p>
          <button className="btn btn-primary bg-green-600 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
