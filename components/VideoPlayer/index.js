import React from 'react'

export default function VideoPlayer() {
  return (
    <>
      <div
        id="dplayer"
        className="dplayer dplayer-no-danmaku dplayer-live dplayer-paused dplayer-loading"
      >
        <div className="dplayer-mask"></div>
        <div className="dplayer-video-wrap">
          <video
            className="dplayer-video dplayer-video-current"
            x-webkit-airplay="allow"
            poster="https://sta.cvndnss.com/file/common/20220814/5bc683962d2a19278580558dd5de6d2b.jpg"
            preload="metadata"
            src="blob:https://socolive.vip/e4289534-2b11-4504-b6a5-da8d76877d0c"
          ></video>
          <div className="dplayer-danmaku">
            <div className="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
          </div>
          <div className="dplayer-subtitle"></div>
          <div className="dplayer-bezel" style={{ display: "none" }}>
            <span className="dplayer-bezel-icon dplayer-bezel-transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 16 32"
              >
                <path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path>
              </svg>
            </span>

            <span className="diplayer-loading-icon">
              <svg version="1.1" viewBox="0 0 22 22">
                <svg x="7" y="1">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-0"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="11" y="3">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-1"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="13" y="7">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-2"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="11" y="11">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-3"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="7" y="13">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-4"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="3" y="11">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-5"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="1" y="7">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-6"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
                <svg x="3" y="3">
                  <circle
                    className="diplayer-loading-dot diplayer-loading-dot-7"
                    cx="4"
                    cy="4"
                    r="2"
                  ></circle>
                </svg>
              </svg>
            </span>
          </div>
        </div>
        <div className="dplayer-controller-mask"></div>
        <div className="dplayer-controller" style={{ display: "none" }}>
          <div className="dplayer-icons dplayer-comment-box">
            <button
              className="dplayer-icon dplayer-comment-setting-icon"
              data-balloon="Setting"
              data-balloon-pos="up"
            >
              <span className="dplayer-icon-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 32 32"
                >
                  <path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path>
                </svg>
              </span>
            </button>
            <div className="dplayer-comment-setting-box">
              <div className="dplayer-comment-setting-color">
                <div className="dplayer-comment-setting-title">
                  Set danmaku color
                </div>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#fff"
                    checked=""
                  />
                  <span style={{ background: "#fff" }}></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#e54256"
                  />
                  <span style={{ background: "#e54256" }}></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#ffe133"
                  />
                  <span style={{ background: "#ffe133" }}></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#64DD17"
                  />
                  <span style={{ background: "#64DD17" }}></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#39ccff"
                  />
                  <span style={{ background: "#39ccff" }}></span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-color-42"
                    value="#D500F9"
                  />
                  <span style={{ background: "#D500F9" }}></span>
                </label>
              </div>
              <div className="dplayer-comment-setting-type">
                <div className="dplayer-comment-setting-title">
                  Set danmaku type
                </div>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-type-42"
                    value="1"
                  />
                  <span>Top</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-type-42"
                    value="0"
                    checked=""
                  />
                  <span>Rolling</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="dplayer-danmaku-type-42"
                    value="2"
                  />
                  <span>Bottom</span>
                </label>
              </div>
            </div>
            <input
              className="dplayer-comment-input"
              type="text"
              placeholder="Input danmaku, hit Enter"
            />
            <button
              className="dplayer-icon dplayer-send-icon"
              data-balloon="Send"
              data-balloon-pos="up"
            >
              <span className="dplayer-icon-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 32 32"
                >
                  <path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
    
        {/* <div
          className="dplayer-menu dplayer-menu-show"
          style={{
            left: "283.5px;",
            right: "initial",
            top: "183px",
            bottom: "initial",
          }}
        >
          <div className="dplayer-menu-item">
            <a href="javascript:void(0);">Video info</a>
          </div>

          <div className="dplayer-menu-item">
            <a target="_blank" href="https://diygod.me">
              About author
            </a>
          </div>

          <div className="dplayer-menu-item">
            <a target="_blank" href="https://github.com/MoePlayer/DPlayer">
              DPlayer v1.26.0
            </a>
          </div>
        </div> */}
        <div className="dplayer-notice"></div>
        <button className="dplayer-mobile-play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 16 32"
          >
            <path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
