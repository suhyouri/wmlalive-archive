import React from "react";
import { Link } from "react-router-dom";

export default function Day230802() {
  return (
    // <div>
    <main className="pages" id="_230802">
      <section className="page">
        <li>
          <Link to="/230802">
            한숨석 내부조명구조
            <br />
            설계 및 3D 프린트
          </Link>
        </li>
        <br />
        <div class="sketchfab-embed-wrapper">
          {" "}
          <iframe
            title="Light-Holder-Modeling-One Breath(2023)"
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
            src="https://sketchfab.com/models/43faca53024a4f91ab4a503161cfa2cc/embed?autostart=1"
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
              href="https://sketchfab.com/3d-models/light-holder-modeling-one-breath2023-43faca53024a4f91ab4a503161cfa2cc?utm_medium=embed&utm_campaign=share-popup&utm_content=43faca53024a4f91ab4a503161cfa2cc"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              Light-Holder-Modeling-One Breath(2023){" "}
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/suhyouri?utm_medium=embed&utm_campaign=share-popup&utm_content=43faca53024a4f91ab4a503161cfa2cc"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              {" "}
              suhyouri{" "}
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=43faca53024a4f91ab4a503161cfa2cc"
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
        <img
          width="50%"
          height="auto"
          src="assets/img/230802_1.png"
          alt="lightSystemSupport-1"
        />
        <img
          width="50%"
          height="auto"
          src="assets/img/230802_2.png"
          alt="lightSystemSupport-2"
        />
        ABS-A100
        <br />
        <br />
      </section>
    </main>
    // </div>
  );
}
