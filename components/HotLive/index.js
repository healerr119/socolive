import React from "react";
import Image from "next/image"
export default function HotLive() {
  return (
    <>
      <div className="container hot inner">
        <div className="hot-title">
          <span className="hot-live">
            <Image
              src="https://sta.cvndnss.com/web/assets/soco/img/hot-live.png"
              alt="Image hotlive"
              width={200}
              height={50}
            />
          </span>
          <ul className="live-type-list">
            <li className="live-type-item all-type active">
              Trực tiếp<b className="pa"></b>
            </li>
            <li className="live-type-item">
              Bóng đá<b className="pa"></b>
            </li>
            <li className="live-type-item">
              Bóng rổ<b className="pa"></b>
            </li>
          </ul>
        </div>
        <ul className="hot-content all-content" >
            <li>
                <a href="/room/109077">
                    <div className="mask"></div>
                    <Image className="fm live-cover"
                        src="https://sta.cvndnss.com/file/common/20220815/91f50c1610f545d3240db51d59106f80_wh320.jpg"
                        alt="Image hotlive"
                        width={400}
                        height={200}
                    />
                    <div className="live-mask"></div>
                    <i className="btn-open"></i>
                    <div className="top-tag float-clear">
                        <span></span>
                        <div className="living">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/living.gif"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>Live</span>
                        </div>
                    </div>
                    <h5 className="bottom-title">
                        <span className="name">Sóc Gầy</span>
                        <span className="num">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/icon-hot-white.png"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>128</span>
                        </span>
                    </h5>
                    <h4 className="ellipsis">Tường Thuật: SPA D1	Almeria vs Real Madrid</h4>
                </a>
            </li>
            <li>
                <a href="/room/109077">
                    <div className="mask"></div>
                    <Image className="fm live-cover"
                        src="https://sta.cvndnss.com/file/common/20220815/91f50c1610f545d3240db51d59106f80_wh320.jpg"
                        alt="Image hotlive"
                        width={400}
                        height={200}
                    />
                    <div className="live-mask"></div>
                    <i className="btn-open"></i>
                    <div className="top-tag float-clear">
                        <span></span>
                        <div className="living">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/living.gif"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>Live</span>
                        </div>
                    </div>
                    <h5 className="bottom-title">
                        <span className="name">Sóc Gầy</span>
                        <span className="num">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/icon-hot-white.png"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>128</span>
                        </span>
                    </h5>
                    <h4 className="ellipsis">Tường Thuật: SPA D1	Almeria vs Real Madrid</h4>
                </a>
            </li>
            <li>
                <a href="/room/109077">
                    <div className="mask"></div>
                    <Image className="fm live-cover"
                        src="https://sta.cvndnss.com/file/common/20220815/91f50c1610f545d3240db51d59106f80_wh320.jpg"
                        alt="Image hotlive"
                        width={400}
                        height={200}
                    />
                    <div className="live-mask"></div>
                    <i className="btn-open"></i>
                    <div className="top-tag float-clear">
                        <span></span>
                        <div className="living">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/living.gif"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>Live</span>
                        </div>
                    </div>
                    <h5 className="bottom-title">
                        <span className="name">Sóc Gầy</span>
                        <span className="num">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/icon-hot-white.png"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>128</span>
                        </span>
                    </h5>
                    <h4 className="ellipsis">Tường Thuật: SPA D1	Almeria vs Real Madrid</h4>
                </a>
            </li>
            <li>
                <a href="/room/109077">
                    <div className="mask"></div>
                    <Image className="fm live-cover"
                        src="https://sta.cvndnss.com/file/common/20220815/91f50c1610f545d3240db51d59106f80_wh320.jpg"
                        alt="Image hotlive"
                        width={400}
                        height={200}
                    />
                    <div className="live-mask"></div>
                    <i className="btn-open"></i>
                    <div className="top-tag float-clear">
                        <span></span>
                        <div className="living">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/living.gif"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>Live</span>
                        </div>
                    </div>
                    <h5 className="bottom-title">
                        <span className="name">Sóc Gầy</span>
                        <span className="num">
                            <Image src="https://sta.cvndnss.com/web/assets/soco/img/icon-hot-white.png"
                                alt="image living"
                                width={15}
                                height={15}
                            />
                            <span>128</span>
                        </span>
                    </h5>
                    <h4 className="ellipsis">Tường Thuật: SPA D1	Almeria vs Real Madrid</h4>
                </a>
            </li>
        </ul>
      </div>
    </>
  );
}
