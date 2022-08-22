import React from 'react'
import Image from 'next/image'
export default function Hightlights() {
  return (
    <div className="pages-wrapper">
      <div className="container hight-lights-wrapper">
        <h1 className="title">HIGHLIGHTS BÓNG ĐÁ MỚI NHẤT HÔM NAY</h1>
        <div className="hight-lights-container">
          <div className="row">
            <div className="col-md-3 hightlights-card">
              <a  href="high-lights/detail">
                <div className="play">
                    <Image
                    src="https://sta.cvndnss.com/web/assets/soco/img/highlights/play-green.png"
                    alt="image highlights"
                    width= {24}
                    height={24}
                    />
                </div>
                <div className="live-cover">
                    <Image
                      src="https://sta.cvndnss.com/file/common/20220807/1da57e0f247f0406aebb6f8bd75825e0_wh320.jpg"
                      alt="image highlights"
                      width= {500}
                      height={250}
                    />
                </div>
                <div className="text-box">
                  <span className="text">
                    Everton vs Chelsea | Highlights trận đấu
                  </span>
                </div>
                <div className="desc-time">
                  <div className="desc">Premier League</div>
                  <div className="time">August 07,2022</div>
                </div>
              </a>
            </div>
          </div>
        </div>
              <div className='pagination-page'>
                  <nav aria-label="...">
                      <ul className="pagination ">
                          <li className="page-item disabled">
                              <a className="page-link" href="#" >1</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item"><a className="page-link" href="#">4</a></li>
                          <li className="page-item"><a className="page-link" href="#">5</a></li>
                          <li className="page-item"><a className="page-link" href="#">6</a></li>
                          <li className="page-item"><a className="page-link" href="#">7</a></li>
                          <li className="page-item"><a className="page-link" href="#">8</a></li>
                          <li className="page-item"><a className="page-link" href="#">9</a></li>
                          <li className="page-item"><a className="page-link" href="#">10</a></li>
                      </ul>
                  </nav>
              </div>
      </div>
     
    </div>
  );
}

