import React from "react";
import { Link } from "react-router-dom";

export default function Day0819() {
  return (
    // <div>
    <main className="pages">
      <section className="page">
        <li>
          <Link to="/0819">
            Air Motor & Air Shape
            <br />
            Test
          </Link>
        </li>
        <div className="airmotor"></div>
        <img
          width="200px"
          height="auto"
          src="assets/img/1.jpg"
          alt="airmotor"
        />
        <p>재료 : 김장비닐, 스텐봉 2-3파이, 실링기(또는 다리미), 파워서플라이 </p>
      </section>
    </main>
    // </div>
  );
}
