import React from "react";
import "../styles/reserve.css";
import { FaSearch } from "react-icons/fa";

function Reserve() {
  return (
    <div className="showcase">
      <p className="search-icon">
        <FaSearch />
      </p>
      <div className="container showcase-inner">
        <h1>Connect with vetted software developer</h1>
        <p className="about">
          Get me a mentor app is built as a capstone project by a group of 5
          microverse talented software developers who want to make the
          engineering world a better place to collaborate. by providing a
          platform to connect experienced and upcoming engineering.
        </p>
        <p className="about">
          It is a free, open-source platform which aims to connect experienced
          and upcoming software developers for a live mentorship all over the
          world.
        </p>

        <div className="btn-container">
          <a href="/reserve" className="btn">
            London
          </a>

          <a href="/reserve" className="btn">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
