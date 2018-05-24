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
import {Header, Footer} from '../../components/Partial'
import * as C from './components/index'
import moment from 'moment'
import Slider from 'react-slick';


class Home extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      show: 1
    };
  }

  componentDidMount () {
    let that = this;
    if(process.env.BROWSER) {
      $('#slider').slick({
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
      })

      that.int = setInterval(() => {
        that.setState(prev => {
          return {
            ...prev,
            show: 1 - that.state.show
          }
        })
      }, 4000)
    }

  }
  componentWillUnmount(){
    clearInterval(this.int)
  }

  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      autoplay: true,
      speed: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      // swipeToSlide: false
    };

    let recentNews = this.props.data.recentNews.value || []
    recentNews = recentNews.slice(0, 3)
    // console.log(recentNews)
    return (
      <div>

        <div className="bannerWr">
          <div className="image banner" style={{background: 'linear-gradient( #004aca, #4775c1) !important', height: '45vw', width: '100vw', zIndex: 0, position: 'relative'}}>
            <div className="circle1 animated fadeIn" style={{width: '40vw', position: 'absolute', zIndex: 2, right: '45%', bottom: '3%'}}>
              <div className="spin noCPU">
                <img className="chorki-icon tran6 noCPU" src="/circle01.png" alt style={{width: '38vw'}} />
              </div>
            </div>
            <div className="circle2 animated fadeIn" style={{width: '40vw', position: 'absolute', zIndex: 2, left: '50%', bottom: '5%'}}>
              <div className="spin noCPU">
                <img className="chorki-icon2 tran5 noCPU" src="/circle01.png" alt style={{width: '28vw'}} />
              </div>
            </div>
            <div className="circle2 animated fadeIn" style={{width: '40vw', position: 'absolute', zIndex: 2, left: '48%', bottom: '55%'}}>
              <div className="spin noCPU">
                <img className="chorki-icon2 tran4 noCPU" src="/circle01.png" alt style={{width: '18vw'}} />
              </div>
            </div>

            <span className="textHome textLeft" >
              {/*<h2 style={{opacity: 1, color: 'white', textAlign: 'center'}}>OTAWA thương hiệu đến từ Nhật Bản</h2>*/}
              <figure>
                <h1 className="left" style={{textAlign: 'center'}}>OTAWA <br/> Siêu phẩm công nghệ lọc nuớc </h1>
                {/*<h1 style={{textAlign: 'center'}}>OTAWA <br/> thương hiệu đến từ Nhật Bản</h1>*/}
              </figure>
            </span>

            <span className="textHome textRight">
              <figure>
                <h1 className="right" style={{textAlign: 'center'}}>Thương hiệu đến từ Nhật Bản</h1>
                {/*<h1 style={{textAlign: 'center'}}>OTAWA <br/> thương hiệu đến từ Nhật Bản</h1>*/}
              </figure>
            </span>

              {this.state.show === 1 && <img className="sp animated bounceInLeft" src="left.png" alt style={{width: '13vw', position: 'absolute', zIndex: 2, right: '59%', bottom: '10%'}} />}
              {this.state.show === 1 && <img className="sp animated bounceInRight" src="right.png" alt style={{width: '12vw', position: 'absolute', zIndex: 2, left: '58%', bottom: '20%'}} />}

              {this.state.show === 0 && <img className="sp animated bounceInLeft" src="/p/mays8.png" alt style={{width: '20vw', position: 'absolute', zIndex: 2, right: '56%', bottom: '15%'}} />}
              {this.state.show === 0 && <img className="sp animated bounceInRight" src="right.png" alt style={{width: '12vw', position: 'absolute', zIndex: 2, left: '58%', bottom: '20%'}} />}

            <img className="background" src="31.png" alt="chuong trinh khuyen mai 3 ngay 1 SH" style={{width: '100vw', height: '45vw', position: 'absolute', zIndex: 0}} />


            <div className="light_opacity_img">
              <img className="light_img l1" src="/Light.png" style={{position: 'absolute'}} />
            </div>
            <div className="light_opacity_img">
              <img className="light_img l2" src="/Light.png" style={{position: 'absolute'}} />
            </div>
            <div className="light_opacity_img">
              <img className="light_img l3" src="/Light.png" style={{position: 'absolute'}} />
            </div>

            <div className="light_opacity_img">
              <img className="light_img l4" src="/Light.png" style={{position: 'absolute'}} />
            </div>
            <div className="light_opacity_img">
              <img className="light_img l5" src="/Light.png" style={{position: 'absolute'}} />
            </div>
            <div className="light_opacity_img">
              <img className="light_img l6" src="/Light.png" style={{position: 'absolute'}} />
            </div>

            <div style={{clear: 'both'}} />
          </div>
        </div>

        <div className="containerWr maxWidth">
          <div className="row">
            <h2 style={{textAlign: 'center', margin: '30px auto'}}>Công ty cổ phần xuất nhập khẩu Hoàng Gia Khánh</h2>
            <div className="col-sm-5">
              <img src="/anhcty.jpg" alt style={{maxWidth: '100%'}} />
            </div>
            <div className="col-sm-7" style={{}}>
              <div id="dnn_ctr547351_ModuleContent" style={{padding: 5}}>
                <div id="dnn_ctr547351_HtmlModule_HtmlModule_lblContent" className="Normal">
                  <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><span style={{fontSize: 12}}><em><span style={{color: '#ff0000'}}><strong><span style={{fontSize: 14}}>Chào mừng quý khách đã ghé thăm Website của chúng tôi. </span></strong></span></em><br />
                Hiện nay chúng tôi là nhà phân phối sản phẩm máy lọc nước nhiều sản phẩm công nghệ cao khác..</span></span></div>
                  <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><span style={{fontSize: 12}}>Hưởng ứng chương trình vì sức khỏe của cộng đồng,<span style={{fontSize: 14}}> <span style={{color: '#000080'}}><strong>Công ty cổ phần xuất nhập khẩu Hoàng Gia Khánh</strong></span> </span>đã không ngừng nghiên cứu, tìm hiểu và nhập về những sản phẩm công nghệ cao nhất nhằm bảo vệ môi trường, bảo vệ và nâng cao sức khỏe cộng đồng.</span></span></div>
                  <div style={{textAlign: 'justify', lineHeight: 2}}><span style={{fontFamily: 'arial,helvetica,sans-serif'}}><span style={{fontSize: 12}}>Những sản phẩm của <span style={{color: '#000080'}}><span style={{fontSize: 14}}><strong>Hoàng Gia Khánh </strong></span></span>phân phối không chỉ tốt cho Qúy khách hàng sử dụng mà còn giúp cho Quý khách góp &nbsp;một phần vào chương trình <span style={{fontSize: 14}}><strong><span style={{color: '#008000'}}>“ Bảo vệ môi trường và Nâng cao sức khỏe cộng đồng’</span></strong></span></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div id="content_wrapper" className="maxWidth" style={{marginTop: 30}}>
          <h3 style={{textAlign: 'center', margin: '50px auto 30px auto'}}>Thuơng hiệu <span style={{fontWeight: 'lighter'}}>công ty</span></h3>
          <div className="containerWr">
            <div className="row brand">
              <div className="col-lg-3 col-xs-6 ">
                <img src="/otawa_2.jpg" alt="lamyco2" />
              </div>
              <div className="col-lg-3 col-xs-6">
                <img src="/hokodai_3.jpg" alt="lamyco2" />
              </div>
              <div className="col-lg-3 col-xs-6">
                <img src="/mokin_2.jpg" alt="lamyco2" />
              </div>
              <div className="col-lg-3 col-xs-6">
                <img src="/lamyco_2.jpg" alt="lamyco2" />
              </div>
            </div>
          </div>
          <hr className="beep" />
        </div>

        <hr/>

        <div className="containerWr maxWidth" style={{marginTop: 30}}>
          <h3 style={{textAlign: 'center', margin: '50px auto 30px auto' }} >Sản phẩm <span style={{fontWeight: 'lighter'}}>nổi bật</span></h3>
          <div id="slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 4, "autoplay": true, "autoplaySpeed": 4000}' >
            <div>
              <div className="calloutWr">
                <div className="callout top-left">Máy lọc nước OTW S8 XLS</div>
              </div>
              <div className="imgWr">
                <img src="/p/mays8.png" alt="" />
                <img className="hot" src="/hot.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="calloutWr">
                <div className="callout top-right">Máy lọc nước OTW F12 Modern</div>
              </div>
              <div className="imgWr">
                <img src="/p/f12.jpg" alt="" />
                <img className="hot" src="/hot.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="calloutWr">
                <div className="callout top-right">Máy lọc nước LAMYCO 2018</div>
              </div>
              <div className="imgWr">
                <img src="/p/lamyco.jpg" alt="" />
                <img className="hot" src="/hot.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className="calloutWr">
                <div className="callout top-right">Máy lọc nuớc HOKODAI 2018</div>
              </div>
              <div className="imgWr">
                <img src="/p/hokodai.jpg" alt="" />
                <img className="hot" src="/hot.jpg" alt="" />
              </div>
            </div>


          </div>
        </div>
        {/*<div className="containerWr">*/}
          {/*<h2 style={{textAlign: 'center'}}><span style={{fontWeight: 'lighter'}}>CÁC SẢN PHẨM</span> BÁN CHẠY</h2>*/}
          {/*<div className="row productWr">*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p11.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ xanh tím</a>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p12.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ xanh lá cây</a>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p13.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ vàng đen</a>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p14.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ xanh da trời</a>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p15.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ vàng</a>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-4 col-sm-6 col-12" style={{paddingTop: 30}}>*/}
              {/*<div style={{padding: 5, textAlign: 'center'}}>*/}
                {/*<a href="#">*/}
                  {/*<img src="p/p16.jpeg" alt />*/}
                {/*</a>*/}
              {/*</div>*/}
              {/*<div style={{textAlign: 'center', fontSize: 18, padding: 5, marginTop: 20}}>*/}
                {/*<a href="#">Máy lọc nước vỏ trắng sữa</a>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}


        <hr/>

        <div className="containerWr maxWidth">
          <h3 style={{textAlign: 'center', margin: '50px auto 30px auto'}}>Tin tức <span style={{fontWeight: 'lighter'}}>nổi bật</span></h3>
          <div className="row" style={{marginTop: 30}}>

            {recentNews.map((el,idx) => {
              return (
                <div className="col-md-4 col-12 newWr" key={idx}>
                  <div className="tintucWr">
                    <a href={"/p/" + el.slug} title={el.title}>
                      <img src={el.coverUrl} />
                    </a>
                    <div className="tintuc-desc"
                         style={{background: "#32529d", color: 'white'}}
                    >
                      <a href={"/p/" + el.slug}>
                        <h4
                        style={{color: 'white'}}
                      >{el.title}</h4>
                      </a>
                      <div className="post-excerpt"
                      >
                        {el.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </div>


      </div>
    );
  }
}

export default Home;
