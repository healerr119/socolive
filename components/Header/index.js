import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
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
                  <Link href="./">
                    <a className="nav-link" >
                      Trang chủ <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link  href="./lich-truc-tuyen">
                  <a className="nav-link">
                    Lịch Trực Tiếp
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="./high-lights">
                  <a className="nav-link" >
                    Highlights
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="./tin-tuc-su-kien">
                  <a className="nav-link" >
                    Tin Tức Sự Kiện
                  </a>
                  </Link>
                </li>
              </ul>
              <div className="my-2 my-lg-0 w-400 header-right">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <Link href="#">
                      <a className="nav-link" >
                          Ứng tuyển BLV
                      </a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link href="#">
                    <a className="nav-link" >
                        Đăng Nhập
                    </a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link  href="#">
                    <a className="nav-link">
                        Đăng Ký
                    </a>
                    </Link>
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
