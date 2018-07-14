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
                <h2 className="title-news title-sigle-left">Giá trị cốt lõi</h2>
              </div>
              <div className="baiviet"><p style={{textAlign: 'justify'}}>
                <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Uy tín</em></strong>: Chữ tín luôn được đề cao trong các mối quan hệ… và NIỀM TIN là giá trị cao nhất mà Hoàng Gia Khánh muốn xây dựng và gìn giữ.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Sáng tạo</em></strong>: cải tiến, sáng tạo là hoạt động liên tục của công ty, của mỗi thành viên nhằm đưa ra những giải pháp tốt hơn. Hoàng Gia Khánh tiên phong sáng tạo những sản phẩm và dịch vụ tốt nhất nhằm bảo vệ sức khỏe mọi người.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Ý chí dẫn đầu: </em></strong>Dưới đường lối chiến lược từ tập đoàn và Ban lãnh đạo, Hoàng Gia Khánh luôn phấn đấu dẫn đầu không những về chất lượng hàng hóa, dịch vụ mà còn cả về trách nhiệm với cộng đồng, xã hội.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Kiên định</em></strong>: Trong định hướng đường lối phát triển, Hoàng Gia Khánh luôn kiên định đi theo một lộ trình nhất quán, cũng như phấn đấu hết mình vì mục tiêu đó.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Tôn trọng con người</em></strong>: Với quan niệm phát triển con người chính là phát triển bền vững. Hoàng Gia Khánh luôn chú trọng đầu tư để mỗi cá nhân có được những cơ hội tốt nhất phát triển bản thân và sự nghiệp. Vấn đề chăm sóc đời sống tinh thần cho cán bộ nhân viên cũng được ban lãnh đạo đặc biệt quan tâm.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong><em>Trách nhiệm xã hội: </em></strong>Hoàng Gia Khánh luôn cống hiến cho xã hội với trọng trách lớn là bảo vệ sức khỏe mọi gia đình. Ngoài ra, trong sự phát triển của Hoàng Gia Khánh không thể thiếu được những hoạt động gắn mình với công tác xã hội, từ thiện… góp phần vì một xã hội tốt đẹp hơn.</span></span></p>
                <p style={{textAlign: 'right'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><em>Nguồn:<a href="http://hoanggiakhanh.com" target="_blank" title="hoanggiakhanh.com">hoanggiakhanh.com</a></em></span></span></p></div>
            </div>
        <div className="t-main_sidebar col-md-3">
          <h3 className="title-sigle-right">
            Hoàng Gia Khánh việt nam
          </h3>
          <ul>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gioi-thieu" title="Về chúng tôi" >Về chúng tôi </a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gia-tri-cot-loi" title="Giá trị cốt lõi" className="t-active">Giá trị cốt lõi</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/tam-nhin-su-menh" title="Tầm nhìn và Sứ mệnh">Tầm nhìn và Sứ mệnh </a></li>
          </ul>
        </div>
      </div>
  </div>

  </div>
    );
  }
}

export default About
