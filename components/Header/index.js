import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <>
      <header>
        <div className="header-inner clearfix">
          <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="./">
                <Image src="https://sta.cvndnss.com/web/assets/soco/img/logo2.gif?v=20220602" alt='' width={180} height={60} />
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="./">
                    Trang chủ <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./lich-truc-tuyen">
                    Lịch Trực Tiếp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./high-lights">
                    Highlights
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./tin-tuc-su-kien">
                    Tin Tức Sự Kiện
                  </a>
                </li>
              </ul>
              <div className="my-2 my-lg-0 w-400 header-right">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">
                        Ứng tuyển BLV
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Đăng Nhập
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Đăng Ký
                    </a>
                    </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </header>
    </>
  );
}
