import React from "react";
import { Link } from "react-router-dom";

export default function Day1102() {
  return (
    // <div>
    <main className="pages" id="_1102">
      <section className="page">
        <li>
          <Link to="/1102">
            브로셔제작
            <br />
          </Link>
        </li>
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/brochure_front.png"
          alt="airmotor"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/brochure_back.png"
          alt="airmotor"
        />
        <br />
        <br />
        <p></p>
      </section>
    </main>
    // </div>
  );
}
