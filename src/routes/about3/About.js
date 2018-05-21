import React from 'react';

import {Title, BreadCrumb} from './components'

class About extends React.Component {

  render() {

    const about = this.props.data.information.value.about

    return (
      <div>
        <div id="breadCrumb" className="clearfix t-breadCrumb">
          <div className="main clearfix">
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <a href="#" itemProp="url">
                <span itemProp="title">Trang chủ</span>
              </a>
            </div>
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="breadSep">&gt;</span>
              <a className="current" href="#ve-chung-toi-sg1.html" itemProp="url">
                <span itemProp="title">Về chúng tôi</span>
              </a>
            </div>
          </div>
        </div>

        <div className="clear" />

        <div id="content_wrapper" className="product_layout product_detail_layout main clearfix">
          <div className="row">
            <div className="col-md-9">
              <div id="product_info">
                <h2 className="title-news title-sigle-left">Tầm nhìn và Sứ mệnh</h2>
              </div>
              <div className="baiviet"><h2 style={{textAlign: 'justify'}}>
                <span style={{fontFamily: 'arial,helvetica,sans-serif'}}><span style={{fontSize: 14}}><strong>Tầm nhìn</strong></span></span></h2>
                <p style={{textAlign: 'justify'}}>
                  Từ những thành công đã đạt được, KAROFI tiếp tục mở rộng, phát triển với mục tiêu trở thành top 5 thương hiệu tại ĐNA đến năm 2020 và TOP 5 thương hiệu tại Châu Á sản phẩm thiết bị về môi trường (<a href="https://karofi.com/may-loc-nuoc-28">Máy lọc nước</a>, <a href="https://karofi.com/cay-nuoc-nong-lanh-13">Cây nước nóng lạnh</a>…)</p>
                <h2 style={{textAlign: 'justify'}}>
                  <span style={{fontFamily: 'arial,helvetica,sans-serif'}}><span style={{fontSize: 14}}><strong>Sứ mệnh</strong></span></span></h2>
                <p style={{textAlign: 'justify'}}>
                  Tạo ra những giá trị khác biệt đóng góp cho cuộc sống hạnh phúc hơn của mọi người trên hành tinh xanh tươi đẹp.</p>
                <p style={{textAlign: 'right'}}>
                  <em>Nguồn:<a href="https://hoanggiakhanh.com" target="_blank" title="hoanggiakhanh.com">hoanggiakhanh.com</a></em></p></div>
            </div>
        <div className="t-main_sidebar col-md-3">
          <h3 className="title-sigle-right">
            Hoàng Gia Khánh việt nam
          </h3>
          <ul>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gioi-thieu" title="Về chúng tôi">Về chúng tôi </a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gia-tri-cot-loi" title="Giá trị cốt lõi">Giá trị cốt lõi</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/tam-nhin-su-menh" title="Tầm nhìn và Sứ mệnh" className="t-active">Tầm nhìn và Sứ mệnh </a></li>
          </ul>
        </div>
      </div>
  </div>

  </div>
    );
  }
}

export default About
