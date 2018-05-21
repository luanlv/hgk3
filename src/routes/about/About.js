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
                <h2 className="title-news title-sigle-left">Về chúng tôi</h2>
              </div>
              <div className="baiviet"><h2>
                <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>A – <strong>THÔNG TIN LIÊN HỆ </strong></span></span></h2>
                <p>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>CÔNG TY CỔ PHẦN Hoàng Gia Khánh VIỆT NAM</span></span></p>
                <p>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Trụ sở chính       :</span></span>P803 - Tòa B2- Khu đô thị Ecopark - Văn Giang - Hưng Yên </p>
                <p>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Nhà máy             : Khu Công nghiệp Bát Tràng, Huyện Gia Lâm, TP. Hà Nội </span></span></p>
                <h2>
                  <span style={{fontSize: 14}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><strong>B – GIỚI THIỆU CHUNG VỀ CÔNG TY</strong></span></span></h2>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Công Ty Cổ phần Hoàng Gia Khánh Việt Nam tiền thân là nhà nhập khẩu, lắp ráp và phân phối máy lọc nước cho nhiều đơn vị tại Việt Nam. Nhờ thấu hiểu sâu sắc nhu cầu của khách hàng về nước sạch và nước tinh khiết, công ty Cổ phẩn Hoàng Gia Khánh Việt Nam ra đời nhằm cung cấp các giải pháp về nước nhằm bảo vệ sức khỏe cho cộng đồng. Kể từ khi thành lập đến nay, Hoàng Gia Khánh đã có những bước phát triển mạnh mẽ và khẳng định được vị thế của mình tại Việt Nam và vươn tầm quốc tế nhờ những chiến lược định hướng đúng đắn từ phía Ban lãnh đạo và Tập đoàn.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Đến nay, <strong>Hoàng Gia Khánh</strong> đã có đội ngũ gần 500 nhân sự tài năng và nhiệt huyết, thường xuyên được bồi dưỡng khả năng chuyên môn cũng như các kỹ năng khác để đáp ứng tốt nhất mọi công việc. Hệ thống sản xuất được kết hợp tự động cao, trên dây chuyền hiện đại. Lực lượng kỹ sư, công nhân chuyên nghiệp, có kiến thức chuyên sâu về sản phẩm và được đào tạo nâng cao về chuyên môn nhằm đáp ứng mọi yêu cầu sản xuất cho dù là khắt khe nhất. Hệ thống nhà xưởng, kho bãi và phương tiện vận chuyển hiện đại, có quy mô đáp ứng nhu cầu sản xuất, lưu kho và vận chuyển cho thị trường toàn quốc.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Sản phẩm <strong>máy lọc nước Hoàng Gia Khánh</strong> được sử dụng những linh kiện tốt nhất hiện nay. Với phương châm luôn đi tiên phong trong công nghệ, Hoàng Gia Khánh đã cho ra đời dòng <strong>máy lọc nước thông minh iRO</strong> với bộ vi xử lý thông minh - đây là phát minh đột phá lần đầu tiên xuất hiện tại Việt Nam.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Trung tâm dịch vụ khách hàng của Hoàng Gia Khánh được xây dựng đảm bảo quy chuẩn quốc tế. Dịch vụ chăm sóc khách hàng luôn được chú trọng, đảm bảo tiêu chí Chất lượng – Uy tín – Tận tâm nhằm phục vụ khách hàng mọi lúc, mọi nơi, một cách linh hoạt và kịp thời nhất.</span></span></p>
                <p style={{textAlign: 'justify'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}>Tính thời điểm hiện tại máy lọc nước tốt nhất của Hoàng Gia Khánh đã có mặt tại 3000 điểm bản lẻ và phủ rộng trên trên toàn quốc. Sản phẩm được xuất khẩu rộng rãi ra thị trường quốc tế (Trung Quốc, Campuchia, Lào, Myanmar, Trung Đông, Mỹ Latinh…)</span></span></p>
                <p style={{textAlign: 'right'}}>
                  <span style={{fontSize: 12}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><em>Nguồn:<a href="https://hoanggiakhanh.com" target="_blank" title="hoanggiakhanh.com">hoanggiakhanh.com</a></em></span></span></p></div>
        </div>
        <div className="t-main_sidebar col-md-3">
          <h3 className="title-sigle-right">
            Hoàng Gia Khánh việt nam
          </h3>
          <ul>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gioi-thieu" title="Về chúng tôi" className="t-active">Về chúng tôi </a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="/gia-tri-cot-loi" title="Giá trị cốt lõi">Giá trị cốt lõi</a></li>
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
