import React from "react";
import { Link } from "react-router-dom";

export default function Day1006() {
  return (
    // <div>
    <main className="pages" id="_1006">
      <section className="page">
        <li>
          <Link to="/1006">
            내부시스템
            <br />
          </Link>
        </li>
        <br />
        {/* <div className="airmotor"></div> */}
        <img
          width="80%"
          height="auto"
          src="assets/img/system-schematic.jpeg"
          alt="system-schematic"
        />
        <img
          width="30%"
          height="auto"
          src="assets/img/system.PNG"
          alt="system"
        />

        <br />
        <p></p>
      </section>
    </main>
    // </div>
  );
}
