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
              <div id="dnn_ctr530995_ModuleContent"
                style={{fontSize: '18px !important'}}
              >
                <div id="dnn_ctr530995_HtmlModule_HtmlModule_lblContent" className="Normal">
                  <span style={{fontFamily: 'hermesRegularVNU', fontSize: 13, lineHeight: '20.7999992370605px'}}>Hiện nay các sản phẩm của chúng tôi đã có mặt trên &nbsp;hàng chục nghìn cửa hàng đại lý trên toàn quốc</span>
                  <p style={{color: 'rgb(245, 222, 179)', fontFamily: 'hermesRegularVNU', fontSize: 13, lineHeight: '20.7999992370605px'}}><span style={{color: '#000000'}}>Với hệ thống phân phối trải dài trên toàn quốc chúng tôi luôn mong muốn tối đa hóa sự tiện lợi của khách hàng sản phẩm có thể tới tận tay người tiêu dùng một cách nhanh nhất.<br />
        <img alt src="http://maylocnuocotawa.com//Portals/27218/bandovietnam.jpg" style={{width: 420, height: 519, borderWidth: 0, borderStyle: 'solid'}} /><br />
        Hình 1: Hệ thống phân phối của công ty trên cả nước.<br />
        <img alt src="http://maylocnuocotawa.com/Portals/27218/hethongphanphoi.png" style={{width: 616, height: 350, borderWidth: 0, borderStyle: 'solid'}} /><br />
        Hình 2: Kênh phân phối sản phẩm nhật khẩu của công ty đến người tiêu dùng.</span></p>
                </div>
                {/* End_Module_530995 */}
              </div>

            </div>
        <div className="t-main_sidebar col-md-3">
          <h3 className="title-sigle-right">
            Hoàng Gia Khánh việt nam
          </h3>
          <ul>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#ve-chung-toi-sg1.html" title="Về chúng tôi" className="t-active">Về chúng tôi </a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#gia-tri-cot-loi-sg2.html" title="Giá trị cốt lõi">Giá trị cốt lõi</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#tam-nhin-va-su-menh-sg4.html" title="Tầm nhìn và Sứ mệnh">Tầm nhìn và Sứ mệnh </a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#thanh-tich-dat-duoc-sg5.html" title="Thành tích đạt được">Thành tích đạt được</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#ban-tin-Hoàng Gia Khánh-cc5"> Bản tin Hoàng Gia Khánh</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#trach-nhiem-xa-hoi-cc25"> Trách nhiệm xã hội</a></li>
            <li><img src="https://karofi.com/img/bullet.png" alt /> <a href="#bao-chi-noi-ve-Hoàng Gia Khánh-cc6"> Báo chí nói gì về Hoàng Gia Khánh</a></li>
          </ul>
        </div>
      </div>
  </div>

  </div>
    );
  }
}

export default About
