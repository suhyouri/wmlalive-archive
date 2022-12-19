import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <main className="posts">
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1103">한숨석<br />
              스테이트먼트
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">11/3</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1102">브로셔제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">11/2</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1028">인클로저제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">10/28</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1009">외관디자인</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">10/9</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <a href="https://github.com/suhyouri/OneBreath">
                {" "}
                아두이노
                <br /> 프로그래밍
              </a>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">10/25</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1006">내부시스템 프로토타입</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">10/6</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0930">콩크서울</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/30</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0928">거리센서 정하기</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/28</span>
          </footer>
        </section>
        {/*---------1------------------ */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0923">발표자료</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/23</span>
          </footer>
        </section>
        {/* 2 */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0912">
                한숨석
                <br />
                프로토타입
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/12</span>
          </footer>
        </section>
        {/* 3 */}
        <section className="post"></section>
        {/* 4 */}
        <section className="post"></section>
        {/* 5 */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0910">
                기대기(텐타클)
                <br />
                프로토타입
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">09/10</span>
          </footer>
        </section>
        {/* 5. */}
        {/* <section className="post"></section> */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0819">
                에어모터 & 모양
                <br />
                Air Motor & Air Shape
                <br />
                테스트
                <br />
                Test
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">08/19</span>
          </footer>
        </section>
        {/* -----3. */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/55">Loading...</Link>
            </li>
            <li className="animation">
              <br />
              <li>|</li>
              <li>/|\</li>
              {/* <li>//|\\</li>
              <li>///|\\\</li>
              <li>////|\\\\</li> */}
              <li>*</li>
              <li>|</li>
              <li>*</li>
              <li>|</li>
              <li>*</li>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">D-55</span>
          </footer>
        </section>
        {/* -----4. */}
        <section className="post"></section>
        {/* -----5. */}
        {/* <section className="post"></section> */}
        {/* -----6. */}
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0803">
                초기 아이디어
                <br />
                기획
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">08/03</span>
          </footer>
        </section>
        {/*  */}

        <section className="post"></section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/">멘토링</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">05/24~11/18</span>
          </footer>
        </section>
      </main>
    </div>
  );
};

