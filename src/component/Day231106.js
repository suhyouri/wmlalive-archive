import React from "react";
import { Link } from "react-router-dom";

export default function Day231105() {
  return (
    // <div>
    <main className="pages" id="_231106">
      <section className="page">
        <li>
          <Link to="/231106">포스터</Link>
        </li>
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/poster_final_1.jpg"
          alt="introduction"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/poster_final_2.jpg"
          alt="introduction"
        />
        <br />
        <br />
      </section>
    </main>
    // </div>
  );
}
