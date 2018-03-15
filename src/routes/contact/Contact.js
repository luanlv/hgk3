import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {
  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div>
        <div id="content_wrapper" className="product_layout main clearfix">
          <div id="contact_wrapper" className="clearfix">
            <div className="contact floatLeft">
              <div className="box">
                <div id="dnn_ctr547342_ModuleContent">
                  <div id="dnn_ctr547342_HtmlModule_HtmlModule_lblContent" className="Normal">
                    <div style={{textAlign: 'justify', lineHeight: 2}}><strong><span style={{fontSize: 14}}>CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU HOÀNG GIA KHÁNH</span></strong></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><strong><span style={{color: '#8b4513'}}><span style={{fontSize: 12}}>Trụ sở: Số 20 Thảo Nguyên Xanh - KĐT Ecopark - Hà Nội</span></span></strong></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontSize: 12}}><strong>Điện thoại: </strong>0911 535 999</span></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><strong><span style={{color: '#b22222'}}><span style={{fontSize: 12}}>Nhà máy: khu Công nghiệp Bát Tràng, Huyện Gia Lâm, TP. Hà Nội</span></span></strong></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontSize: 12}}><strong>Email: </strong>contact@maylocnuocmokin.com</span></div>
                  </div>
                </div>
              </div>
              <div className="box">
                <h3>Bản đồ</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.7911918227073!2d105.845611!3d20.960899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5aa63eb775465717!2zTcOheSBs4buNYyBuxrDhu5tjIHRow7RuZyBtaW5oIEtBUk9GSQ!5e0!3m2!1sen!2sus!4v1496734122411" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>
            </div>
            <div className="contact floatRight">
              <form method="post">
                <div className="box">
                  <h3 className="black">Mọi yêu cầu thắc mắc xin gửi mail về cho chúng tôi. Xin chân thành cảm ơn!</h3>
                  <div className="row clearfix">
                    <label>Họ và tên: </label>
                    <input type="text" name="txtName" />
                  </div>
                  <div className="row clearfix">
                    <label>Email: </label>
                    <input type="text" name="txtEmail" />
                  </div>
                  <div className="row clearfix">
                    <label>Điện thoại: </label>
                    <input type="text" name="txtPhone" />
                  </div>
                  <div className="row clearfix">
                    <label>Câu hỏi: </label>
                    <textarea name="txtContent" defaultValue={""} />
                  </div>
                  <div className="row clearfix">
                    <label>&nbsp; </label>
                    <input type="submit" name="submit" defaultValue="Gửi thông tin" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
