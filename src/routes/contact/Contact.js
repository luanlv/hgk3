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
                    <div style={{textAlign: 'justify', lineHeight: 2}}><strong><span style={{color: '#8b4513'}}><span style={{fontSize: 12}}>Trụ sở: P803 - Tòa B2- Khu đô thị Ecopark - Văn Giang - Hưng Yên</span></span></strong></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontSize: 12}}><strong>Điện thoại: </strong>0911 535 999</span></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><strong><span style={{color: '#b22222'}}><span style={{fontSize: 12}}>Nhà máy: khu Công nghiệp Bát Tràng, Huyện Gia Lâm, TP. Hà Nội</span></span></strong></div>
                    <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontSize: 12}}><strong>Email: </strong>contact@maylocnuocmokin.com</span></div>
                  </div>
                </div>
              </div>
              <div className="box">
                <h3>Bản đồ</h3>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.390753596397!2d105.92032671544298!3d20.976968036026424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aee03fd1691f%3A0x38d59b52456c6127!2zQ-G7pW0gbMOgbmcgbmdo4buBIHThuq1wIHRydW5nIHjDoyBCw6F0IFRyw6BuZywgxJBUMzc4LCBHaWEgTMOibSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1525766668859" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />


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
