import React from "react";
import { Link } from "react-router-dom";

export default function Day230716() {
  return (
    // <div>
    <main className="pages" id="_230716">
      <section className="page">
        <li>
          <Link to="/230716">
            워크샵 테이블 설계 및 제작
            <br />
          </Link>
        </li>
        <br />
        <div class="sketchfab-embed-wrapper">
          {" "}
          <iframe
            title="Workshop Table - WMLAlive(2023)"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width="100%"
            height="500"
            src="https://sketchfab.com/models/f0abe8e311914b409f3e2cd5b1caa9f6/embed"
          >
            {" "}
          </iframe>{" "}
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            {" "}
            <a
              href="https://sketchfab.com/3d-models/workshop-table-wmlalive2023-f0abe8e311914b409f3e2cd5b1caa9f6?utm_medium=embed&utm_campaign=share-popup&utm_content=f0abe8e311914b409f3e2cd5b1caa9f6"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              Workshop Table - WMLAlive(2023){" "}
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/suhyouri?utm_medium=embed&utm_campaign=share-popup&utm_content=f0abe8e311914b409f3e2cd5b1caa9f6"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              suhyouri{" "}
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f0abe8e311914b409f3e2cd5b1caa9f6"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
            <p></p>
            <img
              width="50%"
              height="auto"
              src="assets/img/230716_1.JPG"
              alt="workshop_table-1"
            />
            <img
              width="50%"
              height="auto"
              src="assets/img/230716_2.JPG"
              alt="workshop_table-2"
            />
            <img
              width="50%"
              height="auto"
              src="assets/img/230716_4.png"
              alt="workshop_table-4"
            />
            <img
              width="50%"
              height="auto"
              src="assets/img/230716_3.JPG"
              alt="workshop_table-3"
            />
          </p>
        </div>
        철판 1.5T, 케이블타이
        <br />
        <br />
      </section>
    </main>
    // </div>
  );
}
