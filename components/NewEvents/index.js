import React from 'react'
import Image from 'next/image'
import SideBar from '../SideBar'
export default function NewEvents() {
  return (
    <>
      <div className="pages-wrapper">
        <div className="container">
          <div className="page-livescores">
            <p>
              <a
                className="btn active"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                Tin Tức
              </a>
              <a
                className="btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Sự Kiện
              </a>
            </p>
            <div className="collapse show" id="collapseExample">
              <div className="card card-body card-news">
                <div className="row">
                  <div className="col-md-9">
                    <a className="row" href="tin-tuc-su-kien/bi-cao-buoc">
                      <div className="col-md-3">
                        <Image
                          src="https://sta.cvndnss.com/file/common/20220816/a70193df770755171a1f8099bc52c023_ss300.jpg"
                          height={160}
                          width={160}
                          alt="Image news"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="title-news">
                          <h2>
                            Benjamin Mendy bị buộc tội cưỡng hiếp người phụ nữ
                            và nói với cô ấy đừng cử động, tòa án xét xử
                          </h2>
                        </div>
                        <div className="except-news">
                          <p>
                            Hậu vệ của Manchester City bị buộc tội cưỡng hiếp và
                            tấn công tình dục bảy phụ nữ khác nhau trong năm lần
                            khác nhau tại biệt thự biệt lập của anh ta ở
                            Cheshire
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="row" href="tin-tuc-su-kien/bi-cao-buoc">
                      <div className="col-md-3">
                        <Image
                          src="https://sta.cvndnss.com/file/common/20220816/a70193df770755171a1f8099bc52c023_ss300.jpg"
                          height={160}
                          width={160}
                          alt="Image news"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="title-news">
                          <h2>
                            Benjamin Mendy bị buộc tội cưỡng hiếp người phụ nữ
                            và nói với cô ấy đừng cử động, tòa án xét xử
                          </h2>
                        </div>
                        <div className="except-news">
                          <p>
                            Hậu vệ của Manchester City bị buộc tội cưỡng hiếp và
                            tấn công tình dục bảy phụ nữ khác nhau trong năm lần
                            khác nhau tại biệt thự biệt lập của anh ta ở
                            Cheshire
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="row" href="tin-tuc-su-kien/bi-cao-buoc">
                      <div className="col-md-3">
                        <Image
                          src="https://sta.cvndnss.com/file/common/20220816/a70193df770755171a1f8099bc52c023_ss300.jpg"
                          height={160}
                          width={160}
                          alt="Image news"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="title-news">
                          <h2>
                            Benjamin Mendy bị buộc tội cưỡng hiếp người phụ nữ
                            và nói với cô ấy đừng cử động, tòa án xét xử
                          </h2>
                        </div>
                        <div className="except-news">
                          <p>
                            Hậu vệ của Manchester City bị buộc tội cưỡng hiếp và
                            tấn công tình dục bảy phụ nữ khác nhau trong năm lần
                            khác nhau tại biệt thự biệt lập của anh ta ở
                            Cheshire
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="row" href="tin-tuc-su-kien/bi-cao-buoc">
                      <div className="col-md-3">
                        <Image
                          src="https://sta.cvndnss.com/file/common/20220816/a70193df770755171a1f8099bc52c023_ss300.jpg"
                          height={160}
                          width={160}
                          alt="Image news"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="title-news">
                          <h2>
                            Benjamin Mendy bị buộc tội cưỡng hiếp người phụ nữ
                            và nói với cô ấy đừng cử động, tòa án xét xử
                          </h2>
                        </div>
                        <div className="except-news">
                          <p>
                            Hậu vệ của Manchester City bị buộc tội cưỡng hiếp và
                            tấn công tình dục bảy phụ nữ khác nhau trong năm lần
                            khác nhau tại biệt thự biệt lập của anh ta ở
                            Cheshire
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="row" href="#">
                      <div className="col-md-3">
                        <Image
                          src="https://sta.cvndnss.com/file/common/20220816/a70193df770755171a1f8099bc52c023_ss300.jpg"
                          height={160}
                          width={160}
                          alt="Image news"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="title-news">
                          <h2>
                            Benjamin Mendy bị buộc tội cưỡng hiếp người phụ nữ
                            và nói với cô ấy đừng cử động, tòa án xét xử
                          </h2>
                        </div>
                        <div className="except-news">
                          <p>
                            Hậu vệ của Manchester City bị buộc tội cưỡng hiếp và
                            tấn công tình dục bảy phụ nữ khác nhau trong năm lần
                            khác nhau tại biệt thự biệt lập của anh ta ở
                            Cheshire
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <SideBar />
                </div>
              </div>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="card card-body card-events">
                <div className="col-md-9">
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                      <Image
                        src="https://sta.cvndnss.com/file/common/20220612/e14cdb386c6b3197ba1d9c4ec4b1238e_wh320.png"
                        width={1000}
                        height={290}
                        objectFit="cover"
                        alt="image soco"
                      />
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          SOCO MUZIK - SÁNG TẠO BẢN HIT
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <strong>
                            THÔNG BÁO SỰ CỐ XÂM NHẬP FANPAGE SOCO ZONE
                          </strong>{" "}<br></br>
                          Nhằm hâm nóng cho bầu không khí mùa World Cup 2022 sắp
                          tới, Socolive và Việt Hip Hop sẽ có một cú bắt tay
                          cực gắt, cùng nhau tổ chức một sân chơi âm nhạc dành
                          cho tất cả anh em fan bóng đá thỏa sức sáng tạo. Với
                          những con beat mang màu sắc vui tươi, sôi động,...hay
                          resample từ những bài nhạc World Cup huyền thoại như
                          Waka Waka - Shakira, La La La - Shakira, We Are One -
                          Pitbull, Wavin Flag - KNAAN,...đang được anh em
                          producer của Việt Hiphop ngày đêm sản xuất, BTC hứa
                          hẹn sẽ đến cho tất cả mọi người một cuộc thi chất
                          lượng và ý nghĩa nhất cho cộng đồng ở thời điểm hiện
                          tại. Rap về Ronaldo, Hát về Messi, một trận bóng kinh
                          điển, Việt Nam vô địch, cổ vũ tinh thần thể thao, tuổi
                          thơ đá bóng cùng lũ bạn, diss MNSD, PSG chưa có cúp
                          nào, cúp nhà vua ngon hơn, Casillas vần với Adidas,
                          Rakitic vần với Ricky Star,... Còn điều gì có thể nóng
                          hơn sức nóng của Soco Muzik nữa đâu!!! Cùng Socolive
                          đón chờ nhiều điều hấp dẫn phía trước mọi người nhé Để
                          theo dõi thêm thông tin, truy cập ngay fanpage
                          Socolive & Bóng Đá, Việt Hip Hop nhé #Socolive
                          #Viethiphop #Socomuzik
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <Image
                        src="https://sta.cvndnss.com/file/common/20220605/c6aa39495031e57c1d2c0c554a67280d_wh320.jpg"
                        width={1000}
                        height={290}
                        objectFit="cover"
                        alt="image soco"
                      />
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          SOCOLIVE CUP 2022 - XUYÊN VIỆT CÙNG BÓNG ĐÁ PHỦI
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <strong>
                            SOCOLIVE CUP 2022 - XUYÊN VIỆT CÙNG BÓNG ĐÁ PHỦI
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style each
                          element. These classNamees control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. Its also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <Image
                        src="https://sta.cvndnss.com/file/common/20220611/65185bd82caa82b070a2aef03cc02357_wh320.jpg"
                        width={1000}
                        height={290}
                        objectFit="cover"
                        alt="image soco"
                      />
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          🕺 SOCO CHALLENGE - THÁCH THỨC TÀI NĂNG 💃
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <strong>
                            🕺 SOCO CHALLENGE - THÁCH THỨC TÀI NĂNG 💃
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classNamees that we use to style each
                          element. These classNamees control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. Its also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
