import React from 'react';
import logo from '/public/swan.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="container mx-auto px-8 flex items-center flex-col">
      <div className="border-2 flex items-center flex-col hover:border-red-800 outline-1 hover:border-8 hover:outline-red-800 outline-offset-3 m-4 w-full h-fit group transition-all duration-200 ease-in-out ">
        <div className=" text-white mt-30 my-14 px-4 bg-white text-center flex flex-col justify-center items-center md:flex-row md:gap-3 hover:tracking-wider transition-all ease-in-out duration-300 cursor-default">
          <img
            src={logo}
            alt="SwanCom logo"
            className="swan w-[150px] h-auto object-cover transition-all duration-300 ease-in-out group-hover:translate-x-2 md:group-hover:-translate-x-2"
          />
          <div className="flex flex-col justify-center items-center text-black">
            <span className="group-hover:italic group-hover:font-semibold font-button text-sm uppercase font-light group-hover:text-red-800">
              Are you
            </span>
            <span className="group-hover:text-red-800 font-ballet text-9xl translate-y-2">
              Lost?
            </span>
          </div>
          <img
            src={logo}
            alt="SwanCom logo"
            className="w-[150px] scale-x-[-1] h-auto object-cover transition-all duration-300 ease-in-out group-hover:translate-x-2 md:group-hover:translate-x-2"
          />
        </div>
        <Link to="/" className="btn-l text-lg max-w-[300px] mb-10">
          Home page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
