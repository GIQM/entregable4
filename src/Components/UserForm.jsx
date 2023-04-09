import React from 'react';
import { emptyValueForm } from '../Services/index';
const UserForm = ({
  handleCreateUpdate,
  register,
  handleSubmit,
  reset,
  isVisible,
  handleClickVisible,
  idUserToEdit,
}) => {
  const myHandleSubmit = async (data) => {
    await handleCreateUpdate(data);
    reset(emptyValueForm);
  };

  return (
    <div>
      {isVisible && (
        <div className="h-screen overflow-hidden flex flex-row justify-center items-center absolute inset-0 backdrop-blur-xl  bg-teal-600">
          <form onSubmit={handleSubmit(myHandleSubmit)}>
            <button onClick={handleClickVisible} className="button">
              Close
            </button>
            <h2 className="text-3xl font-bold"> New User</h2>
            <div className="flex flex-col gap-3 text-black font-bold">
              <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                  type="text"
                  name="name"
                  id="firstName"
                  required
                  {...register('first_name')}
                  className="text-blue-700 rounded-lg p-1 outline-0"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="name"
                  id="lastName"
                  required
                  {...register('last_name')}
                  className="text-blue-700 rounded-lg p-1 outline-0"
                />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  {...register('email')}
                  className="text-blue-700 rounded-lg p-1 outline-0"
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  {...register('password')}
                  className="text-blue-700 rounded-lg p-1 outline-0"
                />
              </div>
              <div>
                <label htmlFor="birthday">Birthday: </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  required
                  {...register('birthday')}
                  className="text-blue-700 rounded-lg p-1 outline-0"
                />
              </div>
              <div className="flex flex-row justify-center items-center mt-5">
                <button className="bg-sky-700 text-white font-semibold p-2 rounded-md">
                  Add New User
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
