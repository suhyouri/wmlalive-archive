import React from "react";
import { Link } from "react-router-dom";

export default function Day230520() {
  return (
    // <div>
    <main className="pages" id="_230520">
      <section className="page">
        <li>
          <Link to="/230520">
            영원을 쓰는 기계
            <br />
            프로토타입 제작
          </Link>
        </li>
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/230520_1.jpg"
          alt="writingEternity-1"
        />
        <br />
        <br />
        <img
          width="50%"
          height="auto"
          src="assets/img/230520_2.jpg"
          alt="writingEternity-2"
        />
        <br />
        <br />
        아두이노 R3, 서보모터 2개, 마카, 워터브러시, 연습지
        <br />
        <br />
      </section>
    </main>
    // </div>
  );
}
