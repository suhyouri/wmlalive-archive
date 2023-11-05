import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <main className="posts">
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/231105">전시소개 프린트</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/11/05</span>
          </footer>
        </section>
        <section className="post"></section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/231015">한숨석 구조 <br/>2023 리뉴얼</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/10/15</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230902">
                한숨석 시스템 <br />
                인클로저제작
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/09/02</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230802">
                한숨석 내부조명구조 <br /> 설계 및 3D 프린트
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/08/02</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230716">
                워크샵 테이블 <br /> 설계 및 제작
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/07/16~23/08/16</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230625">🕺🕺🕺</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/06/25</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230613">별 것 제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/06/13~23/08/21</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230520">
                영원을 쓰는 기계
                <br />
                프로토타입제작
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/05/20~23/11/05</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230510">별 것 오브제 제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/05/10~23/07/03</span>
          </footer>
        </section>
        <section className="post"></section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/230221">
                공간컨택
                <br /> /
                <br /> 유영공간
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/02/21</span>
          </footer>
        </section>
        <section className="post"></section>
        <section className="post">
          <header className="post__header">
            <li>
              <a href="https://suhyouri.notion.site/cc4abacd666b4a2793038a21a2442973?pvs=4">
                {""}
                ≪기억을 만드는 회로≫
                <br />
                워크샵 개발
              </a>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">23/01/08~23/05/07</span>
          </footer>
        </section>
        <section className="post"></section>

        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1103">
                한숨석
                <br />
                스테이트먼트
              </Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/11/3</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1102">브로셔제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/11/2</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1028">인클로저제작</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/10/28</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1009">외관디자인</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/10/9</span>
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
            <span className="post__author">22/10/25</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/1006">내부시스템 프로토타입</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/10/6</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0930">콩크서울</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/09/30</span>
          </footer>
        </section>
        <section className="post">
          <header className="post__header">
            <li>
              <Link to="/0928">거리센서 정하기</Link>
            </li>
          </header>
          <footer className="footer">
            <span className="post__author">22/09/28</span>
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
            <span className="post__author">22/09/23</span>
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
            <span className="post__author">22/09/12</span>
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
            <span className="post__author">22/09/10</span>
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
            <span className="post__author">22/08/19</span>
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
            <span className="post__author">22/08/03</span>
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
            <span className="post__author">22/05/24~22/11/18</span>
          </footer>
        </section>
      </main>
    </div>
  );
};

