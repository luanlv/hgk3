import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'
import moment from 'moment'

class NewsDetail extends React.Component {
  render() {

    const news = this.props.data.news.value
    const recentNews = this.props.data.recentNews.value
    const categories = this.props.data.categories.value

    return (
      <div>
        <div id="content_wrapper" className="product_layout product_detail_layout main clearfix">
          <div className="row">
            <div className="col-md-9">

              <div id="product_info" className="fullwidth">
                <h1 className="title-page">{news.title}</h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: news.body }} />
        </div>
        <div className="t-main_sidebar col-md-3">
          <h2>Tin mới nhất</h2>
          {recentNews.map((el,idx) => {
            return (
              <div className="item_post">
                <div className="col-sm-5 rm_paddingr rm_paddingl">
                  <a href={"/p/" + el.slug}><img src={el.coverUrl}  width="100%" /></a>
                </div>
                <div className="col-sm-7 rm_paddingr">
                  <h3><a href={"/p/" + el.slug} >{el.title}</a></h3>
                  <p>12/17/2015</p>
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


function findCategoryBySlug(slug, categories) {
  for (let i = 0; i < categories.length; i++){
    if(categories[i].slug === slug) {
      return categories[i]
    }
  }
  return {slug:'/', title: 'Không tồn tại'}
}

export default NewsDetail
