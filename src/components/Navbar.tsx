import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Logo className="text-4xl my-2 mx-4">
        <a href="/">
          <span className="border-red-500 border-b-2">Your</span>
          <span className="font-mono text-red-500 border-b-2 border-black">
            <i>Shop</i>
          </span>
        </a>
      </Logo>
      <div className="my-4 mr-16">
        <ul className="flex flex-row">
          <li className="mx-4">Products</li>
          <li className="mx-4">Cart</li>
          <li className="mx-4">Account</li>
        </ul>
      </div>
    </div>
  );
};

const Logo = styled.h1`
  transition: all 0.2s ease-in-out;
  &:hover {
    span:nth-child(1) {
      color: red;
      border-bottom: 2px solid black;
    }
    span:nth-child(2) {
      color: black;
      border-bottom: 2px solid red;
    }
  }
`;

export default Navbar;
