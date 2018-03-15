import React from 'react';
import Link from '../../components/Link'
import moment from 'moment'
// import {Title, BreadCrumb} from './components'

class News extends React.Component {
  render() {
    let news = this.props.data.allNews.value
    let recentNews = this.props.data.recentNews.value
    let categories = this.props.data.categories.value

    let category = undefined

    if(this.props.slug){
      category = categories.find(p => p.slug === this.props.slug)
    }

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
              <a className="current" href="#tin-tuc-cc3" itemProp="url">
                <span itemProp="title">Tin tức</span>
              </a>
            </div>
          </div>
        </div>

        <div id="content_wrapper" className="product_layout product_detail_layout main clearfix">
          <input type="hidden" id="thisIDCate" defaultValue="content_category_id in (3,5,6,27,4)" />
          <input type="hidden" id="totalPost" defaultValue={8} />
          <div className="row">
            <div className="col-md-9" id="content">
              <div id="product_info" className="fullwidth">
                <h1 className="title-news">Tin tức</h1>
              </div>
              {/* slectWrap */}
              
              <div>Thông tin đang cập nhập ....</div>  
              
            
              
              <div className="clearfix" />
              <div className="btn-loadmore">
                <a href="javascript:void(0)" id="load_more">XEM THÊM</a>
              </div>
              <div className="paging" style={{display: 'none'}}>
                <ul>
                  <li><a href="#tin-tuc-cc3/trang-1">1</a></li><li><a href="#tin-tuc-cc3/trang-2">2</a></li><li><a href="#tin-tuc-cc3/trang-3">3</a></li><li><a href="#tin-tuc-cc3/trang-4">4</a></li><li><a href="#tin-tuc-cc3/trang-5">5</a></li><li><a href="#tin-tuc-cc3/trang-6">6</a></li><li><a href="#tin-tuc-cc3/trang-7">7</a></li><li><a href="#tin-tuc-cc3/trang-8">8</a></li>
                </ul>
              </div>
            </div>
            <div className="t-main_sidebar col-md-3">
              <h2>Tin mới nhất</h2>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
//
// function findCategoryBySlug(slug, categories) {
//   for (let i = 0; i < categories.length; i++){
//     if(categories[i].slug === slug) {
//       return categories[i]
//     }
//   }
//   return {slug:'/', title: 'Không tồn tại'}
// }

export default News
