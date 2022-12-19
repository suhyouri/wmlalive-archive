import React from "react";
import { Link } from "react-router-dom";

export default function Day0928() {
  return (
    // <div>
    <main className="pages" id="_0928">
      <section className="page">
        <li>
          <Link to="/0928">
            거리센서 정하기
            <br />
          </Link>
        </li>
        <br />
        <img
          width="40%"
          height="auto"
          src="assets/img/sensor-1.png"
          alt="airmotor"
        />
        <img
          width="40%"
          height="auto"
          src="assets/img/sensor-2.png"
          alt="airmotor"
        />
        <img
          width="40%"
          height="auto"
          src="assets/img/sensor-3.png"
          alt="airmotor"
        />

        <br />
        <p>Sharp 0A41SK, LV ProxSonar, US-100</p>
      </section>
    </main>
    // </div>
  );
}
