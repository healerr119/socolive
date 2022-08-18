import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="inner clearfix">
          <div className="logo-footer">
            <Image
              src="https://sta.cvndnss.com/web/assets/soco/img/logo-footer.png?v=20220121"
              alt="Soco Live"
              height={80}
              width= {80}
            />
          </div>
          <div className="guide">
            <div>
              <a href="/pages/vi/service.html" target="_blank">
                Điều khoản dịch vụ
              </a>
            </div>
            <div>
              <a href="/pages/vi/secrecy.html" target="_blank">
                Chính sách bảo mật
              </a>
            </div>
            <div>
              <a href="/pages/vi/promise.html" target="_blank">
                Lời hứa từ Socolive
              </a>
            </div>
            <div>
              <a href="/pages/vi/about.html" target="_blank">
                Về chúng tôi
              </a>
            </div>
            <div>
              <a href="/pages/vi/contact.html" target="_blank">
                Phương thức liên hệ
              </a>
            </div>
            <div>
              <a href="/pages/vi/disclaimer.html" target="_blank">
                Tuyên bố miễn trừ trách nhiệm
              </a>
            </div>
          </div>
          <div className="desc"><p>Copyright © 2020 <span className="footer-url">socolive</span>, All rights reserved.</p></div>
        </div>
      </div>
    </>
  );
}
