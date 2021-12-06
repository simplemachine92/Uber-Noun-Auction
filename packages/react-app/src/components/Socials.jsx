import React from "react";

const Socials = () => {
  return (
    <div className="container px-5 mx-auto mt-10">
      <div className="flex flex-wrap -m-4">
        <div className="lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <a href="https://discord.com/invite/uGUnnWwyDS">discord</a>
          </div>
        </div>

        <div className="lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <a href="http://t.me/bannersNFT">telegram</a>
          </div>
        </div>

        <div className="lg:mb-0 p-4">
          <div className="h-full text-center">
            <a href="https://twitter.com/BannersNft">twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
