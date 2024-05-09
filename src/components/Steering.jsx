import React from "react";

const Steering = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-64 h-64 bg-gray-200 rounded-full relative">
          {/* <!-- Steering wheel container --> */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            {/* <!-- Steering wheel body --> */}
            <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
            {/* <!-- Steering wheel handle --> */}
            <div className="w-10 h-10 bg-black rounded-full"></div>
          </div>
          {/* <!-- Steering wheel rotation indicator --> */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-8 h-8 bg-red-500 rounded-full transform rotate-45"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steering;
