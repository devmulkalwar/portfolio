import React from "react";

const Home = () => {
  return (
    <div className="flex flex-grow bg-base-200 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto p-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Box Office"
        />
        <div className="lg:pl-6">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
