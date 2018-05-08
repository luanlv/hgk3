/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import LoadingBar from 'react-redux-loading-bar';

class Layout extends React.Component {

  componentDidMount() {
      init();
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5a95014dd7591465c7080c1b/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
  }

  render() {

    // const en = this.props.data && this.props.data.lang === 'en'
      return (
        <div id="wrapper">

        <div id="header_wrapper">
          <div className="main clearfix">
            <div className="logo floatLeft">
              <a href="/">
                <img src="/logo/logo.png" style={{width: 'auto', height: 50}} alt="Hoàng Gia Khánh - Chuyên gia về thiết bị lọc nước, diệt khuẩn, cây nước nóng lạnh" />
              </a>
            </div>
            <div className="header_right floatRight">
              <div id="menu" className="clearfix">
                <span id="mobile_btn">&nbsp;</span>
                <ul className="menu clearfix">
                  <li className>
                    <a href="/" style={{lineHeight: '40px !important'}}>Trang chủ</a>
                  </li>
                  <li className>
                    <a href="/gioi-thieu" style={{lineHeight: '40px !important'}}>Giới thiệu</a>
                  </li>

                  <li className="unclickable">
                    <a href="#" style={{lineHeight: '40px !important'}}>Sản phẩm</a>
                    <ul className="clearfix">
                      <li className>
                        <a href="/cua-hang">MÁY LỌC NƯỚC</a>
                      </li>
                      <li className>
                        <a href="/linh-kien">PHỤ KIỆN MÁY LỌC NƯỚC</a>
                      </li>
                    </ul>
                  </li>

                  <li className="pickup">
                    <a href="/phan-phoi">Hệ thống<br /> phân phối</a>
                  </li>

                  <li className="pickup">
                    <a href="/tin-tuc" style={{lineHeight: '40px !important'}}>Tin tức</a>
                  </li>

                  <li className="pickup">
                    <a href="/lien-he" style={{lineHeight: '40px !important'}}>Liên hệ</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {this.props.children}

        <hr />

        <div id="footer_wrapper">
          <div id="footer" className="main clearfix">
            <div className="footer-menu-mobile">
              <div className="container">
                <ul>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Vì sao chọn Hoàng Gia Khánh</b><i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#tai-sao-chon-sp-karofi-sg18.html">Vì sao chọn SP Hoàng Gia Khánh</a></li>
                      <li><a href="#dat-qcvn6-1-2010-byt/">Đạt QCVN6-1:2010/BYT</a></li>
                      <li><a href="#cong-nghe-loc-nuoc-ro-tien-tien-cho-may-loc-nuoc-sg19.html
  ">Công nghệ RO tiên tiến</a></li>
                      <li><a href="#san-pham-thong-minh-sg20.html">Sản phẩm thông minh</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Sản phẩm</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#may-loc-nuoc-28">Máy lọc nước</a></li>
                      <li><a href="#cay-nuoc-nong-lanh-13">Cây nước nóng lạnh</a></li>
                      <li><a href="http://karofi.com/thiet-bi-diet-khuan">Thiết bị diệt khuẩn</a></li>
                      <li><a href="#linh-phu-kien-18">Phụ kiện</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#trang-chuyen-gia/" data-toggle="dropdown"><b>Trang chuyên gia</b><i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#trang-chuyen-gia/tra-cuu-nguon-nuoc/">Tra cứu nguồn nước</a></li>
                      <li><a href="#trang-chuyen-gia/quy-chuan-chat-luong-nuoc/">Quy chuẩn CL nước</a></li>
                      <li><a href="#trang-chuyen-gia/giai-phap-xu-ly-nuoc/">Giải pháp XL nước</a></li>
                      <li><a href="#trang-chuyen-gia/huong-dan-su-dung-xu-ly-su-co/">HD xử lý sự cố</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Hỗ trợ</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#faq.html">Hỏi đáp</a></li>
                      <li><a href="#tu-van-su-dung-cc13">Tư vấn sử dụng</a></li>
                      <li><a href="http://karofi.com/dang-ky-bao-hanh.html">Đăng ký bảo hành</a></li>
                      <li><a href="http://karofi.com/dang-ky-bao-duong.html">Dịch vụ bảo dưỡng</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Giới thiệu</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#ve-chung-toi-sg1.html">Về chúng tôi</a></li>
                      <li><a href="#tin-su-kien-cc5">Bản tin Hoàng Gia Khánh</a></li>
                      <li><a href="#trach-nhiem-xa-hoi-cc25">Trách nhiệm xã hội</a></li>
                      <li><a href="#bao-chi-noi-ve-karofi-cc6">Báo chí nói gì về Hoàng Gia Khánh</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Tin tức</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#tin-san-pham-cc4">Tin sản phẩm</a></li>
                      <li><a href="#tin-khuyen-mai-cc27">Tin khuyến mãi</a></li>
                      <li><a href="#tin-tuyen-dung-cc20">Tin tuyển dụng</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Bạn có biết</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      {/*         <li><a href="#ban-co-biet-cc16">Bạn có biết?</a></li> */}
                      <li><a href="#hieu-ve-nuoc-cc17">Hiểu về nước</a></li>
                      <li><a href="#nuoc-va-suc-khoe-cc18">Nước và sức khỏe</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Liên hệ</b> <i className="icon-arrow" /></a>
                    <ul className="dropdown-menu">
                      <li className="hotline"><a href="tel:0985 340 830">0985 340 830</a></li>
                      <li className="mail"><a href="mailto:contact@maylocnuocmokin.com">contact@maylocnuocmokin.com</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" data-toggle="dropdown"><b>Hotline: 1900 6333362</b> <i className="icon-arrow" /></a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="clearfix" />
            <div className="footer-menu-desktop clearfix">
              <div className="footer_box" style={{paddingLeft: 22}}>
                <h3>Vì sao chọn Hoàng Gia Khánh</h3>
                <ul>
                  <li><a href="#tai-sao-chon-sp-karofi-sg18.html">Vì sao chọn SP Hoàng Gia Khánh</a></li>
                  <li><a href="#dat-qcvn6-1-2010-byt/">Đạt QCVN6-1:2010/BYT</a></li>
                  <li><a href="#cong-nghe-loc-nuoc-ro-tien-tien-cho-may-loc-nuoc-sg19.html">Công nghệ RO tiên tiến</a></li>
                  <li><a href="#san-pham-thong-minh-sg20.html">Sản phẩm thông minh</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 60}}>
                <h3>Sản phẩm</h3>
                <ul>
                  <li><a href="#may-loc-nuoc-28">Máy lọc nước</a></li>
                  <li><a href="#cay-nuoc-nong-lanh-13">Cây nước nóng lạnh</a></li>
                  <li><a href="#thiet-bi-diet-khuan">Thiết bị diệt khuẩn</a></li>
                  <li><a href="#linh-phu-kien-18">Phụ kiện</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 60}}>
                <h3><a href="#trang-chuyen-gia">Trang chuyên gia</a></h3>
                <ul>
                  <li><a href="#trang-chuyen-gia/tra-cuu-nguon-nuoc/">Tra cứu nguồn nước</a></li>
                  <li><a href="#trang-chuyen-gia/quy-chuan-chat-luong-nuoc/">Quy chuẩn CL nước</a></li>
                  <li><a href="#trang-chuyen-gia/giai-phap-xu-ly-nuoc/">Giải pháp XL nước</a></li>
                  <li><a href="#trang-chuyen-gia/huong-dan-su-dung-xu-ly-su-co/">HD xử lý sự cố</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 100}}>
                <h3>Hỗ trợ</h3>
                <ul>
                  <li><a href="#faq.html">Hỏi đáp</a></li>
                  <li><a href="#tu-van-su-dung-cc13">Tư vấn sử dụng</a></li>
                  <li><a href="#dang-ky-bao-hanh.html">Đăng ký bảo hành</a></li>
                  <li><a href="#dang-ky-bao-duong.html">Dịch vụ bảo dưỡng</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 22}}>
                <h3>Giới thiệu</h3>
                <ul>
                  <li><a href="#ve-chung-toi-sg1.html">Về chúng tôi</a></li>
                  <li><a href="#ban-tin-karofi-cc5">Bản tin Hoàng Gia Khánh</a></li>
                  <li><a href="#trach-nhiem-xa-hoi-cc25">Trách nhiệm xã hội</a></li>
                  <li><a href="#bao-chi-noi-ve-karofi-cc6">Báo chí nói gì về Hoàng Gia Khánh</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 60}}>
                <h3><a href="#tin-tuc-cc3">Tin tức</a></h3>
                <ul>
                  <li><a href="#tin-san-pham-cc4">Tin sản phẩm</a></li>
                  <li><a href="#tin-khuyen-mai-cc27">Tin khuyến mãi</a></li>
                  <li><a href="#tin-tuyen-dung-cc20">Tin tuyển dụng</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 60}}>
                <h3><a href="#ban-co-biet-cc16">Bạn có biết</a></h3>
                <ul>
                  <li><a href="#hieu-ve-nuoc-cc17">Hiểu về nước</a></li>
                  <li><a href="#nuoc-va-suc-khoe-cc18">Nước và sức khỏe</a></li>
                </ul>
              </div>
              <div className="footer_box" style={{paddingLeft: 100}}>
                <h3>Liên hệ</h3>
                <ul>
                  <li><span><img src="phone.png" /></span><span>0911 535 999</span></li>

                  <li className="clearfix">
                    <span><img src="social.png" /></span>
                    <a href="#" target="_blank" rel="nofollow"><img src="facebook.png" /></a>
                      <a href="#" target="_blank" rel="nofollow"><img src="plus.png" /></a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div id="goToTop">
          <i className="fa fa-angle-up fa-3x" aria-hidden="true" />
        </div>

        <div className="footer-desktop">
          <div id="copyright_wrapper">
            <div id="copyright" className="main">
              <ul style={{color: 'white'}}>
                <li><a href="#" title="DMCA.com Protection Status" className="dmca-badge"> <img src="//images.dmca.com/Badges/dmca_protected_sml_120aj.png?ID=18992782-b75d-45a8-a019-e1dbbdb5291f" alt="DMCA.com Protection Status" /></a> </li>
                <li><a rel="nofollow" href="#" style={{color: 'white'}}>Hỏi đáp</a></li>
                <li><a rel="nofollow" href="#" style={{color: 'white'}}>Liên hệ</a></li>
                <li>Bản quyền thuộc về Công ty Hoàng Gia Khánh</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-mobile">
          <div id="copyright_wrapper">
            <div id="copyright" className="main">
              <ul className="floatLeft">
                <li>Copyright © 2015 Hoàng Gia Khánh Vietnam. All Rights Reserved</li>
              </ul>
              <ul className="language floatRight">
                <li className="en"><a href="http://karofi.com/en/">English</a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>);
  }
}

const init = () => {



  // $("#flexiselDemo3").flexisel({
  //   visibleItems: 4,
  //   itemsToScroll: 1,
  //   animationSpeed: 1000,
  //   autoPlay: false,
  //   // autoPlaySpeed: 3000,
  //   pauseOnHover: true,
  //   enableResponsiveBreakpoints: true,
  //   responsiveBreakpoints: {
  //     portrait: {
  //       changePoint:480,
  //       visibleItems: 1
  //     },
  //     landscape: {
  //       changePoint:640,
  //       visibleItems: 2
  //     },
  //     tablet: {
  //       changePoint:768,
  //       visibleItems: 3
  //     }
  //   }
  // });
  // $("#pSlider").flexisel({
  //   visibleItems: 1,
  //   // itemsToScroll: 2,
  //   infinite: true,
  //   // animationSpeed: 400,
  //   autoPlay: true,
  //   autoPlaySpeed: 4000,
  //   pauseOnHover: true,
  // });

  $(document).ready(function(){
    // Flexslider
    $('.flexslider').flexslider({
      animation: "slide"
    });
    $("a[rel=Phoenix]").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600,
      'speedOut'		:	200,
      'overlayShow'	:	true,
      'overlayColor'	: 	'#000',
      'overlayOpacity': 	'0.8'
    });
    $('.unclickable > a').each(function(){
      var _this	= $(this);
      _this.click(function(){
        _this.parent().toggleClass("show");
        return false;
      })
    });
    $('body').not(".unclickable").click(function(){
      $('#menu .show').removeClass("show");
    })
    $("#menu #mobile_btn").live("click", function(){
      $("#menu").toggleClass("open");
    });
    if($("#carousel_image_list").length>0){
      $("#carousel_image_list").carouFredSel({
        scroll: 1,
        auto: true,
        prev: '#Prev',
        next: '#Next',
        items: {
          width: 320,
          height:100,
          visible: {
            min: 1,
            max: 3
          }
        }
      });
    }

    $('#tab-container').easytabs();

    $(".accordion_inside").accordion({
      active: 1,
      collapsible: true
    });

    $('#wait_1').hide();
    $('#wait_2').hide();

    // Thắng fix
    function change_alias( alias )
    {
      var str = alias;
      str= str.toLowerCase();
      str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ  |ặ|ẳ|ẵ/g,"a");
      str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
      str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
      str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g,"o");
      str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
      str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
      str= str.replace(/đ/g,"d");
      str= str.replace(/\.|php|html/g,"");
      str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
      /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
      str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
      str= str.replace(/^\-+|\-+$/g,"");
      //cắt bỏ ký tự - ở đầu và cuối chuỗi
      return str;
    }
    var pathname = $(location).attr('pathname');

    pathname =	pathname.slice(pathname.lastIndexOf('/')+1, pathname.length);
    pathname =  change_alias(pathname);

    $('body').addClass("page-"+pathname);

    // set default value

    $('#categoriesNews').change(function(event) {
      if ($(this).val() != 0) {
        window.location.href = $(this).val();
      }

    });

    $(window).scroll(function(event) {
      var flug = $(window).scrollTop();
      if (flug > 400) {
        $('#goToTop').fadeIn('slow');
      }else{
        $('#goToTop').fadeOut('slow');
      }

    });

    $('#goToTop').click(function(event) {
      $('html ,body').animate({scrollTop: 0},'slow');
    });

  });
}

export default Layout
