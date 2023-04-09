import React from 'react';

const UserCard = ({ user }) => {
  return (
    <article className="flex flex-col justify-center text-white p-4 bg-blue-500 rounded-3xl gap-2">
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <ul>
        <li>
          <span>MAIL: </span>
          {user.email}
        </li>
        <li>
          <span>BIRTHDAY: </span>
          {user.birthday}
        </li>
        <div className="flex flex-row justify-end gap-3">
          <button className="bg-red-500">
            <i className="bx bx-trash"></i>
          </button>

          <button className="bg-amber-400">
            <i className="bx bxs-edit"></i>
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;
