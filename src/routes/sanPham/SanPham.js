import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'

class NewsDetail extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      number: 1,
      product: props.data.product.value
    }

  }

  render() {
    // const product = this.props.data.product.value
    // const recentNews = this.props.data.recentNews.value
    // const productRelative = this.props.data.productRelative.value
    // const categories = this.props.data.categories.value
    return (
      <div>
        


  </div>
    );
  }
}

export default NewsDetail
