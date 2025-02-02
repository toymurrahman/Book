import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetails = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const {bookId: currentId, image } =book;
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-12 lg:flex-row">
          <img 
            src={image}
            className="h-[564px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Bookdetails;       