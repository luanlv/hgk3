import React from 'react';

import {Title, BreadCrumb} from './components'
import moment from 'moment'

class About extends React.Component {

  render() {

    // let recentNews = this.props.data.recentNews.value
    // let allProducts = this.props.data.allProducts.value
    // let productCategories = this.props.data.productCategories.value
    //
    // let category = undefined
    //
    // if(this.props.slug){
    //   category = productCategories.find(p => p.slug === this.props.slug)
    // }

    return (
      <div>

        <div id="breadCrumb" className="clearfix t-breadCrumb">
          <div className="main clearfix">
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <a href="/" itemProp="url">
                <span itemProp="title">Trang chủ</span>
              </a>
            </div>
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="breadSep">&gt;</span>
              <a className="current" href="#" itemProp="url">
                <span itemProp="title">MÁY LỌC NƯỚC</span>
              </a>
            </div>
          </div>
        </div>

        <div id="content_wrapper" className="product_layout main clearfix">
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy lọc nước uRO 1.0"><img src="/product/hokodai.jpg" alt="Máy lọc nước uRO 1.0" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy lọc nước uRO 1.0">Máy lọc nước HOKODAI</a></h2>
              <div className="product_model">Model: 2018</div>
              <div className="short_desc">
                <ul>
                <li>
                  <div>
                    Điện áp vào: 220V</div>
                </li>

                  <li>
                  <div>
                    Điện áp ra: 24V</div>
                </li>

                  <li>
                    <p>
                      Kích thước: 330 x 440 x 940 (mm)
                    </p>
                  </li>

                <li>
                  <p>
                    Công suất lọc: 10-15L/H</p>
                </li>
                <li>
                  <p>
                    Giá niêm yết:<span style={{color: 'rgb(255, 0, 0)'}}>&nbsp;<strong>X.000.000 VNĐ</strong></span></p>
                </li>
              </ul>
              </div>
              <a rel="nofollow" href="#" title="Máy lọc nước HOKODAI" className="readmore">Xem chi tiết</a>
            </div>
          </div>
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy Lọc Nước RO Karofi Plus"><img src="/product/otawa.jpg" alt="Máy Lọc Nước RO Karofi Plus" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy Lọc Nước RO Karofi Plus">Máy lọc nước nóng lạnh OTAWA</a></h2>
              <div className="product_model">Model: OTW F12 Modern</div>
              <div className="short_desc"><ul>
                <li>
                  <p>
                    <span> </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span >Tích hợp thiết bị diệt khuẩn NanoSilver</span></p>
                </li>
                <li>
                  <p>
                    <span >Bảo vệ toàn diện 2 trong 1</span></p>
                </li>
                <li>
                  <p>
                    <span >Giá niêm yết:&nbsp;</span><a href="#"><span style={{color: '#ff0000'}}>Xem thêm</span></a></p>
                </li>
              </ul></div>
              <a rel="nofollow" href="#" title="Máy Lọc Nước RO Karofi Plus" className="readmore">Xem chi tiết</a>
            </div>
          </div>
          <div className="clear" />
          <div className="divider" />
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy lọc nước thông minh iRO 2.0, 7 cấp"><img src="/product/hokodai2.jpg" alt="Máy lọc nước thông minh iRO 2.0, 7 cấp" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy lọc nước thông minh iRO 2.0, 7 cấp">Máy lọc nước HOKODAI</a></h2>
              <div className="product_model">Model: 2018</div>
              <div className="short_desc"><ul>
                <li>
                  <p>
                    Màn hình cảm ứng hiển thị TDS</p>
                </li>
                <li>
                  <p>
                    Bộ vi điều khiển thông minh</p>
                </li>
                <li>
                  <p>
                    Màng RO Filmtec DOW - USA</p>
                </li>
                <li>
                  <p>
                    Giá niêm yết:<span style={{color: '#ff0000'}}> <strong>7.360.000 VNĐ</strong></span></p>
                </li>
              </ul>
                <p style={{textAlign: 'right'}}>
                  &nbsp;</p></div>
              <a rel="nofollow" href="#" title="Máy lọc nước thông minh iRO 2.0, 7 cấp" className="readmore">Xem chi tiết</a>
            </div>
          </div>
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy lọc nước thông minh iRO 2.0, 8 cấp"><img src="/product/otawa.jpg" alt="Máy lọc nước thông minh iRO 2.0, 8 cấp" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy lọc nước thông minh iRO 2.0, 8 cấp">Máy lọc nước nóng lạnh OTAWA</a></h2>
              <div className="product_model">Model: 2018</div>
              <div className="short_desc"><ul>
                <li>
                  <p>
                    Màn hình cảm ứng hiển thị TDS</p>
                </li>
                <li>
                  <p>
                    Bộ vi điều khiển thông minh</p>
                </li>
                <li>
                  <p>
                    Màng RO Filmtec DOW - USA</p>
                </li>
                <li>
                  <p>
                    Giá niêm yết: <span style={{color: '#ff0000'}}><strong>7.660.000 VNĐ</strong></span></p>
                </li>
              </ul>
                <p style={{textAlign: 'right'}}>
                  &nbsp;</p></div>
              <a rel="nofollow" href="#" title="Máy lọc nước thông minh iRO 2.0, 8 cấp" className="readmore">Xem chi tiết</a>
            </div>
          </div>
          <div className="clear" />
        </div>

      </div>
    );
  }
}

export default About
