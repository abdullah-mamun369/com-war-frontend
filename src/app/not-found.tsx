import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen bg-footer-gradient flex flex-col justify-center items-center">
      <h1 className="font-bold text-white text-4xl mb-3">
        404 - Page Not Found
      </h1>
      <p className="font-extralight text-white text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
