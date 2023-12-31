import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ user, onDelete }) => {
  const { name, email, age, _id } = user;
  return (
    <div className="flex-1">
      <div className="border border-gray-500 rounded-md p-3">
        <h1 className="text-xl">
          <span>Name:</span>
          {name}
        </h1>
        <p className="text-lg">
          <span className="font-semibold">Age:</span>
          {age}
        </p>
        <p className="text-lg">
          <span className="font-semibold">email:</span>
          {email}
        </p>
        <div>
          <Link
            to={`/${_id}`}
            className="px-3 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-800 my-4 mr-2"
          >
            Update
          </Link>
          <button
            className="px-3 py-1 bg-red-500 rounded-md text-white hover:bg-red-800 my-4"
            onClick={() => onDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
