/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */
const version = 1

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children, v, seo, scriptTop, css  } = this.props;
    return (
      <html className="no-js" lang={this.props.lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href={"/css/main_style.css?v=" + version } type="text/css" media="screen" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="animate.css" />
          <script src="/js/jquery_3.2.0.min.js" type="text/javascript" />
          <script src="/js/jquery_googlemap.js" type="text/javascript" />
          <script src="/js/pagination_loadmore.js" type="text/javascript" />
          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" + version }/>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <script dangerouslySetInnerHTML={{ __html: scriptTop }} />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }} />



          <link rel="stylesheet" type="text/css" href="https://karofi.com/video-js/video-js.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="https://karofi.com/fancybox/jquery.fancybox-1.3.4.css" media="screen" />
          <link rel="stylesheet" href="https://karofi.com/css/mobile.css" type="text/css" media="screen" />
          <link rel="stylesheet" href="https://karofi.com/css/menu_style.css" type="text/css" media="screen" />
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"/>
          <script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"/>
          <script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"/>
          <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"/>
          <script language="javascript" type="text/javascript" src="/js/menu_index.js"/>
          <script language="javascript" type="text/javascript" src="/js/jquery.flexslider-min.js"/>
          <script language="javascript" type="text/javascript" src="/js/jquery.carouFredSel-5.5.0-packed.js" />
          <script language="javascript" type="text/javascript" src="/js/jquery.hashchange.min.js" />
          <script language="javascript" type="text/javascript" src="/js/jquery.easytabs.min.js" />
          <script type="text/javascript" src="/js/jquery.flexisel.js" />
          <script type="text/javascript" src="/fancybox/jquery.fancybox-1.3.4.pack.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"/>
          <script  src={scripts[0] + "?v=" + v } />
          <script  src={scripts[1] + "?v=" + v } />

          <script dangerouslySetInnerHTML={{ __html: this.props.scriptBottom }} />
          <a href="tel:1900633362">
            <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show" id="coccoc-alo-phoneIcon" >
              <div className="coccoc-alo-ph-circle"/><div className="coccoc-alo-ph-circle-fill"/><div className="coccoc-alo-ph-img-circle"/></div>
          </a>
        </body>
      </html>
    );
  }
}

export default Html;
