import React, { useEffect, useRef } from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function HighLightDetail() {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: "https://sta.cvndnss.com/file/common/20220822/362098f50a4b68fdbcd4f850c1867598.mp4",
            type: "video/mp4"
          }
        ]
      });
    }
  });
  return (
    <div className='pages-wrapper'>
      <div className="container highlight-detail">
        <h2 className="title">Napoli vs Monza | Highlights trận đấu</h2>
        <div className="video-highlight">
          <video controls ref={videoRef} className="video-js" />
        </div>
        <div className="highlight-news">
          <h2>HIGHLIGHTS BÓNG ĐÁ MỚI NHẤT HÔM NAY</h2>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://sta.cvndnss.com/file/common/20220821/eb967b7618ece1e7bc7f95c9bf466582_wh320.jpg"
                height={150}
                width={300}
                alt="not image"
              />
              <h2 className="title">
                Celta de Vigo vs Real Madrid | Highlights trận đấu
              </h2>
              <div className="item">
                <span className="desc">La Liga</span>
                <span className="time">August 21,2022</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
