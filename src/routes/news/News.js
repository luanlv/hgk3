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

              <div className="clearfix wrap_content">
                {news.map((el, idx) => {
                  return (
                    <div className="col-md-4 col-sm-6" key={idx}>
                      <div className="thumbnail new-item">
                        <a href={"/p/" + el.slug}>
                          <img src={el.coverUrl}  />
                        </a>
                        <div className="caption">
                          <div className="datetime">
                            <span className="date">16</span>
                            <span className="months">Tháng 06</span>
                          </div>
                          <div className="caption-content">
                            <h3>
                              <a href={"/p/" + el.slug} >{el.title}</a>
                            </h3>
                            <p>
                              {el.description.slice(0, 100)} ...
                            </p>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="clearfix" />
            </div>
            <div className="t-main_sidebar col-md-3">
              <h2>Tin mới nhất</h2>
              {recentNews.map((el, idx) => {
                return (
                  <div className="item_post">
                    <div className="col-sm-5 rm_paddingr rm_paddingl">
                      <a href={"/p/" + el.coverUrl}><img src={el.coverUrl} width="100%" /></a>
                    </div>
                    <div className="col-sm-7 rm_paddingr">
                      <h3><a href={"/p/" + el.coverUrl} >{el.title}</a></h3>
                      <p>06/16/2017</p>
                    </div>
                    <div className="clearfix" />
                  </div>
                )
              })}
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
