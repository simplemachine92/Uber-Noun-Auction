import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto"></div>
      <div className="bg-white">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          (
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="https://nouns.wtf/"
          >
            NOUNS
          </a>
          ,
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="https://gitcoin.co/"
          >
            GITCOIN
          </a>
          )
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="https://github.com/scaffold-eth/scaffold-eth"
          >
            <span className="ml-3 text-xl">built w/ Scaffold-Eth</span>
          </a>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-lg">
            <a className="text-gray-500 underline hover:text-blue-900">telegram</a>
            <a className="ml-6 text-gray-500 underline hover:text-blue-500">twitter</a>
            <a className="ml-6 text-gray-500 underline hover:text-indigo-500">discord</a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
