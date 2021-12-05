import React from "react";
import { Row, Col, Button, Alert, Input, List, Card } from "antd";

import "./Footer.css";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto"></div>
      <div class="bg-white">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="ml-3 text-xl">NOUNS</span>
          </a>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-lg">
            <a class="text-gray-500 underline hover:text-blue-900">telegram</a>
            <a class="ml-6 text-gray-500 underline hover:text-blue-500">twitter</a>
            <a class="ml-6 text-gray-500 underline hover:text-indigo-500">discord</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
