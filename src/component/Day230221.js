import React from "react";
import { Link } from "react-router-dom";

export default function Day230221() {
  return (
    // <div>
    <main className="pages" id="_230221">
      <section className="page">
        <li>
          <Link to="/230221">
            공간컨택
            <br />
            /
            <br />
            유영공간
          </Link>
        </li>
        <br />
        <div class="sketchfab-embed-wrapper">
          {" "}
          <iframe
            title="Yooyoungplace"
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

            src="https://sketchfab.com/models/10bd598f8a8d496d9c9e6961cf5f149a/embed?autostart=1"
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
              href="https://sketchfab.com/3d-models/yooyoungplace-10bd598f8a8d496d9c9e6961cf5f149a?utm_medium=embed&utm_campaign=share-popup&utm_content=10bd598f8a8d496d9c9e6961cf5f149a"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              Yooyoungplace{" "}
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/suhyouri?utm_medium=embed&utm_campaign=share-popup&utm_content=10bd598f8a8d496d9c9e6961cf5f149a"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              suhyouri{" "}
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=10bd598f8a8d496d9c9e6961cf5f149a"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </section>
    </main>
    // </div>
  );
}
