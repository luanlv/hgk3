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
                <a href="#" title="Máy lọc nước uRO 1.0"><img src="/p/mays8.png" alt="Máy lọc nước uRO 1.0" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy lọc nước uRO 1.0">Máy lọc nuớc OTAWA</a></h2>
              <div className="product_model">Model: OTW S8 XLS</div>
              <div className="short_desc">
                <ul>
                  <li>
                    <div>
                      Kích thước: 420 x 300 x 1189 (mm)</div>
                  </li>

                  <li>
                    <div>
                      Điện áp: 220V/50Hz</div>
                  </li>

                  <li>
                    <p>
                      Điện năng tiêu thụ: 24W
                    </p>
                  </li>

                  <li>
                    <p>
                      Công nghệ Nhật Bản</p>
                  </li>
                  <li>
                    <p>
                      Công suất: 10Lít/h</p>
                  </li>
                </ul>
              </div>
              {/*<a rel="nofollow" href="#" title="Máy lọc nước HOKODAI" className="readmore">Xem chi tiết</a>*/}
            </div>
          </div>
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy Lọc Nước RO Karofi Plus"><img src="/p/f12.jpg" alt="Máy Lọc Nước RO Karofi Plus" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy Lọc Nước RO Karofi Plus">Máy lọc nuớc OTAWA</a></h2>
              <div className="product_model">Model: OTW F12 Modern</div>
              <div className="short_desc">
                <ul>
                  <li>
                    <div>
                      Kích thước: 420 x 300 x 1189 (mm)</div>
                  </li>

                  <li>
                    <div>
                      Điện áp: 220V/50Hz</div>
                  </li>

                  <li>
                    <p>
                      Điện năng tiêu thụ: 24W
                    </p>
                  </li>

                  <li>
                    <p>
                      Công nghệ Nhật Bản</p>
                  </li>
                  <li>
                    <p>
                      Công suất: 10Lít/h</p>
                  </li>
                </ul>
              </div>
              {/*<a rel="nofollow" href="#" title="Máy Lọc Nước RO Karofi Plus" className="readmore">Xem chi tiết</a>*/}
            </div>
          </div>
          <div className="clear" />
          <div className="divider" />
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy lọc nước uRO 1.0"><img src="/p/lamyco.jpg" alt="Máy lọc nước uRO 1.0" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy lọc nước uRO 1.0">Máy lọc nuớc LAMYCO</a></h2>
              <div className="product_model">Model: 2018</div>
              <div className="short_desc">
                <ul>
                  <li>
                    <div>
                      Kích thước: 420 x 300 x 1189 (mm)</div>
                  </li>

                  <li>
                    <div>
                      Điện áp: 220V/50Hz</div>
                  </li>

                  <li>
                    <p>
                      Điện năng tiêu thụ: 24W
                    </p>
                  </li>

                  <li>
                    <p>
                      Công nghệ Hàn Quốc</p>
                  </li>
                  <li>
                    <p>
                      Công suất: 10Lít/h</p>
                  </li>
                </ul>
              </div>
              {/*<a rel="nofollow" href="#" title="Máy lọc nước HOKODAI" className="readmore">Xem chi tiết</a>*/}
            </div>
          </div>
          <div className="product_box clearfix">
            <div className="product_image_wrapper">
              <div className="product_image">
                <a href="#" title="Máy Lọc Nước RO Karofi Plus"><img src="/p/hokodai.jpg" alt="Máy Lọc Nước RO Karofi Plus" data-pin-nopin="true" /></a>
              </div>
            </div>
            <div className="product_info">
              <h2 className="product_title"><a href="#" title="Máy Lọc Nước RO Karofi Plus">Máy lọc nuớc HOKODAI</a></h2>
              <div className="product_model">Model: 2018</div>
              <div className="short_desc">
                <ul>
                  <li>
                    <div>
                      Kích thước: 420 x 300 x 1189 (mm)</div>
                  </li>

                  <li>
                    <div>
                      Điện áp: 220V/50Hz</div>
                  </li>

                  <li>
                    <p>
                      Điện năng tiêu thụ: 24W
                    </p>
                  </li>

                  <li>
                    <p>
                      Công nghệ Hàn Quốc</p>
                  </li>
                  <li>
                    <p>
                      Công suất: 10Lít/h</p>
                  </li>
                </ul>
              </div>
              {/*<a rel="nofollow" href="#" title="Máy Lọc Nước RO Karofi Plus" className="readmore">Xem chi tiết</a>*/}
            </div>
          </div>
          <div className="clear" />
          <div className="divider" />

        </div>

      </div>
    );
  }
}

export default About
