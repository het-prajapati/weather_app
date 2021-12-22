import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="default.asp" class="active">
            Home
          </a>
        </li>
        <li>
          <a href="news.asp">Explore</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    );
  }
}

export default Navbar;
