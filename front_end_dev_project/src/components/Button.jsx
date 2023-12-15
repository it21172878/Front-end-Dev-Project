/* eslint-disable react/prop-types */
// import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=" px-5 py-1 bg-secondaryColor text-white hover:bg-primaryColor transition-all rounded-[4px] gap-80">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
