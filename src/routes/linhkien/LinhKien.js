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
                <span itemProp="title">Phụ kiện máy lọc nuớc</span>
              </a>
            </div>
          </div>
        </div>

        <div id="content_wrapper" className="product_layout main clearfix">

          <h1>Trang linh phụ kiện máy lọc nước</h1>

          <div id="Gallery">
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/vandientuxanh.jpg" alt="Exterior" />
              </a>
              <div>Van điện tử xanh</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/vandientughi.png" alt="Exterior" />
              </a>
              <div>Van điện tử ghi</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/ruotmayotawa.png" alt="Exterior" />
              </a>
              <div>Ruột máy OTAWA</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/quatlammat.png" alt="Exterior" />
              </a>
              <div>Quạt làm mát</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/nguongoldkorea.png" alt="Exterior" />
              </a>
              <div>Nguồn Gold Korea</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/nguonghikorea.png" alt="Exterior" />
              </a>
              <div>Nguồn ghi Korea</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loitaokhoangtokorea.png" alt="Exterior" />
              </a>
              <div>Lõi tao khoáng to Korea</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loitaokhoangkorea.png" alt="Exterior" />
              </a>
              <div>Lõi tạo khoáng Korea</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loitaokhoangkoreamaughi.png" alt="Exterior" />
              </a>
              <div>Lõi tạo khoáng Korea màu ghi</div>
            </div>
            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loitaokhoangkorea3.png" alt="Exterior" />
              </a>
              <div>Lõi tao khoáng Korea 3</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loilocso2.png" alt="Exterior" />
              </a>
              <div>Lõi lọc số 2</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/loi12cocmica.png" alt="Exterior" />
              </a>
              <div>Lõi 1,2 cốc mica</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/donghoap.png" alt="Exterior" />
              </a>
              <div>Đồng hồ áp</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/denuv.png" alt="Exterior" />
              </a>
              <div>Đèn UV</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/denbao.png" alt="Exterior" />
              </a>
              <div>Đèn báo</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/cocvat.png" alt="Exterior" />
              </a>
              <div>Cốc vát</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/cocvatvang.png" alt="Exterior" />
              </a>
              <div>Cốc vát vàng</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/cocso1mica.png" alt="Exterior" />
              </a>
              <div>Cốc số 1 bộ cốc mica</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/cocbeomaugold.png" alt="Exterior" />
              </a>
              <div>Cốc béo màu gold</div>
            </div>


            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/chanbanhxe.png" alt="Exterior" />
              </a>
              <div>Chân bánh xe</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/bomloai1.png" alt="Exterior" />
              </a>
              <div>Bơm loại 1</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/bomloai2.png" alt="Exterior" />
              </a>
              <div>Bơm loại 2</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/boloilochokodai.png" alt="Exterior" />
              </a>
              <div>Bộ lõi lọc hokodai</div>
            </div>


            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/binhnong.png" alt="Exterior" />
              </a>
              <div>Bình nóng</div>
            </div>


            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/binhaomautrang.png" alt="Exterior" />
              </a>
              <div>Bình áo màu trắng</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/aothapjeak.png" alt="Exterior" />
              </a>
              <div>Áo thấp jeak</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/aocaojeak.png" alt="Exterior" />
              </a>
              <div>Áo cao jeak</div>
            </div>

            <div className="gallery-item">
              <a href="http://abvichico.com/images/full/Exterior2.jpg">
                <img src="/lpk/1B4A0367.png" alt="Exterior" />
              </a>
              <div>1B4A0367</div>
            </div>

          </div>{/*end #Gallery*/}
        </div>

      </div>
    );
  }
}

export default About
