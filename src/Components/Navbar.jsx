import React from 'react';

const Navbar = ({ btnClickVisible }) => {
  return (
    <nav className="w-full flex flex-row justify-around items-center mb-5">
      <h1 className="text-3xl font-bold text-red-600">Users Admin</h1>
      <button className="bg-blue-500 p-1" onClick={btnClickVisible}>
        <i className="bx bx-add-to-queue"></i>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

export default Navbar;
