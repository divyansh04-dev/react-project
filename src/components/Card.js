import React from 'react';
import PropTypes from 'prop-types';

export default function Card({name, button="Click me!"}){
  return (
    <div className="relative ml-4 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://images.pexels.com/photos/1013326/pexels-photo-1013326.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="not found"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired
};
