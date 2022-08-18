import React from 'react'
import Image from 'next/image'
export default function LiveScores() {
  return (
    <div className="pages-wrapper">
      <div className="container">
        <div className="page-livescores">
          <div className="match-wrapper">
            <div className="date-list">
              <ul>
                <li
                  className="item today active"
                  data-tag="1"
                  data-date="2022-08-16"
                >
                  <span className="day">Hôm nay</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
                <li className="item today" data-tag="1" data-date="2022-08-16">
                  <span className="day">Thứ tư</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
                <li className="item today" data-tag="1" data-date="2022-08-16">
                  <span className="day">Thứ năm</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
                <li className="item today" data-tag="1" data-date="2022-08-16">
                  <span className="day">Thứ sáu</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
                <li className="item today" data-tag="1" data-date="2022-08-16">
                  <span className="day">Thứ bảy</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
                <li className="item today" data-tag="1" data-date="2022-08-16">
                  <span className="day">Chủ nhật</span>
                  <br></br>
                  <span className="date">16.08</span>
                </li>
              </ul>
            </div>
            <div className="container match-box">
              <div className="row match-data">
                <div className="col-md-4 match-card">
                  <div className="info">
                    <div className="name ellipsis">CHA D1</div>
                    <div className="time">14:30</div>
                  </div>
                  <div className="team">
                    <div className="host">
                      <Image
                        className="host-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/f32e08307d2dea55d885cdb25284bc28.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="host-name ellipsis">
                        Shanghai Jiading Huilong(N)
                      </span>
                    </div>
                    <div className="guest">
                      <Image
                        className="guest-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/a7297e907fa5a6bdeb9b84e8e8e9e551.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="guest-name ellipsis">
                        Beijing Institute of Technology FC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div id="demo" className="carousel slide">
                    <div className="container carousel-inner">
                      <div className="carousel-item match-item active">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220630/eb247b70f97804312613feb567803f54_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/caef4dd0013e3a335aef2461f4b75052_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220519/768f161d74b731ae811921a5f3f35fb6.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/f326de91b5673cdd93397ced04c8b39b.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220625/bba872f07eb03082abff1b0c6c524fd7_ss300.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row match-data">
                <div className="col-md-4 match-card">
                  <div className="info">
                    <div className="name ellipsis">CHA D1</div>
                    <div className="time">14:30</div>
                  </div>
                  <div className="team">
                    <div className="host">
                      <Image
                        className="host-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/f32e08307d2dea55d885cdb25284bc28.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="host-name ellipsis">
                        Shanghai Jiading Huilong(N)
                      </span>
                    </div>
                    <div className="guest">
                      <Image
                        className="guest-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/a7297e907fa5a6bdeb9b84e8e8e9e551.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="guest-name ellipsis">
                        Beijing Institute of Technology FC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div id="demo" className="carousel slide">
                    <div className="container carousel-inner">
                      <div className="carousel-item match-item active">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220630/eb247b70f97804312613feb567803f54_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/caef4dd0013e3a335aef2461f4b75052_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220519/768f161d74b731ae811921a5f3f35fb6.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/f326de91b5673cdd93397ced04c8b39b.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220625/bba872f07eb03082abff1b0c6c524fd7_ss300.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row match-data">
                <div className="col-md-4 match-card">
                  <div className="info">
                    <div className="name ellipsis">CHA D1</div>
                    <div className="time">14:30</div>
                  </div>
                  <div className="team">
                    <div className="host">
                      <Image
                        className="host-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/f32e08307d2dea55d885cdb25284bc28.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="host-name ellipsis">
                        Shanghai Jiading Huilong(N)
                      </span>
                    </div>
                    <div className="guest">
                      <Image
                        className="guest-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/a7297e907fa5a6bdeb9b84e8e8e9e551.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="guest-name ellipsis">
                        Beijing Institute of Technology FC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div id="demo" className="carousel slide">
                    <div className="container carousel-inner">
                      <div className="carousel-item match-item active">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220630/eb247b70f97804312613feb567803f54_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/caef4dd0013e3a335aef2461f4b75052_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220519/768f161d74b731ae811921a5f3f35fb6.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/f326de91b5673cdd93397ced04c8b39b.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220625/bba872f07eb03082abff1b0c6c524fd7_ss300.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row match-data">
                <div className="col-md-4 match-card">
                  <div className="info">
                    <div className="name ellipsis">CHA D1</div>
                    <div className="time">14:30</div>
                  </div>
                  <div className="team">
                    <div className="host">
                      <Image
                        className="host-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/f32e08307d2dea55d885cdb25284bc28.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="host-name ellipsis">
                        Shanghai Jiading Huilong(N)
                      </span>
                    </div>
                    <div className="guest">
                      <Image
                        className="guest-img match-cover"
                        src="https://sta.cvndnss.com/file/common/20220814/a7297e907fa5a6bdeb9b84e8e8e9e551.png"
                        width={30}
                        height={30}
                        alt="Image match"
                      />
                      <span className="guest-name ellipsis">
                        Beijing Institute of Technology FC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div id="demo" className="carousel slide">
                    <div className="container carousel-inner">
                      <div className="carousel-item match-item active">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220630/eb247b70f97804312613feb567803f54_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/caef4dd0013e3a335aef2461f4b75052_ss300.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220519/768f161d74b731ae811921a5f3f35fb6.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220627/f326de91b5673cdd93397ced04c8b39b.jpg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="avatar-box">
                                <Image
                                  src="https://sta.cvndnss.com/file/head/20220625/bba872f07eb03082abff1b0c6c524fd7_ss300.jpeg"
                                  height={80}
                                  width={80}
                                  alt="no image"
                                  className="avatar"
                                />
                                <div className="name ellipsis">BLV AK47</div>
                                <div className='live'>
                                    <Image className="live" src="https://sta.cvndnss.com/web/assets/soco/img/live.png" 
                                    height={16}
                                    width={28}
                                    alt="no image"
                                    hidden=""
                                    />
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
          </div>
        </div>
      </div>
    </div>
  );
}
