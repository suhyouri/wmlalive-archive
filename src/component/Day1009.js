import React from "react";
import { Link } from "react-router-dom";

export default function Day1009() {
  return (
    // <div>
    <main className="pages" id="_1009">
      <section className="page">
        <li>
          <Link to="/1009">
            외관디자인
            <br />
          </Link>
        </li>
        <br />
        <img
          width="20%"
          height="auto"
          src="assets/img/3dcnc_result.PNG"
          alt="3dcnc_result"
        />
        <br />
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/3dcnc.jpg"
          alt="sketch-sheet-1"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/ped.jpg"
          alt="sketch-sheet-2"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/steelplate.jpg"
          alt="sketch-sheet-3"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/weldering.jpg"
          alt="sketch-sheet-4"
        />
        <br />

        <br />
        <p>#Fusion360</p>
      </section>
    </main>
    // </div>
  );
}
