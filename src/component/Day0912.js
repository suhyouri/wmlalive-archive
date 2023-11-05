import React from "react";
import { Link } from "react-router-dom";

export default function Day0912() {
  return (
    // <div>
    <main className="pages" id="_0912">
      <section className="page">
        <li>
          <Link to="/0912">
            한숨석
            <br />
            프로토타입
          </Link>
        </li>
        <br />
        <img
          width="200px"
          height="auto"
          src="assets/img/sighrock_3.PNG"
          alt="sighrock3"
        />
        <img
          width="200px"
          height="auto"
          src="assets/img/sighrock_2.PNG"
          alt="sighrock2"
        />
        <img
          width="300px"
          height="auto"
          src="assets/img/sighrock_4.PNG"
          alt="sighrock4"
        />
        <img
          width="100px"
          height="auto"
          src="assets/img/sighrock_5.PNG"
          alt="sighrock5"
        />
        <br />
        <p>500 lumen</p>
        <p>재료 : 은박비닐, 헤드랜턴, 에어모터, 실리콘튜브</p>
      </section>
    </main>
    // </div>
  );
}
