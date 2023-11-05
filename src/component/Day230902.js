import React from "react";
import { Link } from "react-router-dom";

export default function Day230902() {
  return (
    // <div>
    <main className="pages" id="_230902">
      <section className="page">
        <li>
          <Link to="/230902">
            한숨석
            <br />
            인클로저 시스템제작
          </Link>
        </li>
        <br />
        <img
          width="30%"
          height="auto"
          src="assets/img/230902_2.png"
          alt="airmotor-enclosure-1"
        />
        <img
          width="30%"
          height="auto"
          src="assets/img/230902_3.png"
          alt="airmotor-enclosure-2"
        />
        <li>5V 에어모터x2, 6V 솔레노이드밸브 인클로저</li>
        <br />
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/230902_1.jpg"
          alt="system-enclosure"
        />
        <li>
          시스템:Arduino, SMPS, irf520 x2, dc-dc converterx3, motor Driver X2{" "}
        </li>
        <br />
        <br />
      </section>
    </main>
    // </div>
  );
}
