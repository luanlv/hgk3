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
        <div id="breadCrumb" className="clearfix t-breadCrumb">
          <div className="main clearfix">
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <a href="#" itemProp="url">
                <span itemProp="title">Trang chủ</span>
              </a>
            </div>
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="breadSep">&gt;</span>
              <a href="#may-loc-nuoc-28" itemProp="url">
                <span itemProp="title">MÁY LỌC NƯỚC</span>
              </a>
            </div>
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="breadSep">&gt;</span>
              <a href="#may-loc-nuoc-tieu-chuan-sro-9" itemProp="url">
                <span itemProp="title">Máy lọc nước tiêu chuẩn sRO</span>
              </a>
            </div>
            <div className="breadItem" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
              <span className="breadSep">&gt;</span>
              <a className="current" href="#may-loc-nuoc-tieu-chuan-sro-9-cap-sp55.html" itemProp="url">
                <span itemProp="title">Máy lọc nước sRO 9 cấp KT-KS90</span>
              </a>
            </div>
          </div>
        </div>


        <div id="content_wrapper" className="product_layout product_detail_layout main clearfix">
          <form method="post">
            <input type="hidden" name="cart_id" defaultValue="KT-KS90" />
            <div id="product_detail_wrapper" className="clearfix t-product_detail_wrapper">
              <div id="product_image_wrapper" className="floatLeft">
                <div id="product_image_large">
                  <a rel="Phoenix" href="#images/products/may loc nuoc thong minh sRO 1.1, 9 cap.jpg"><img className="large_image" src="https://karofi.com/images/products/may loc nuoc thong minh sRO 1.1, 9 cap.jpg" alt="Máy lọc nước tiêu chuẩn sRO 9 cấp" title="Máy lọc nước tiêu chuẩn sRO 9 cấp" /></a>
                </div>
              </div>
              <div id="product_info" className="floatRight">
                <h1>Máy lọc nước tiêu chuẩn sRO 9 cấp</h1>
                <div id="info_wrapper" className="clearfix">
                  {/*<p><strong>Thương hiệu:</strong> Karofi</p>*/}
                  <p><strong>Bảo hành:</strong> 24 tháng đối với phần điện, không bảo hành các vật tư tiêu hao trong quá trình sử dụng như lõi lọc</p>
                  <p><strong>Model:</strong> KT-KS90</p>
                  <ul>
                    <li>
                      <p>
                        Bộ vi điều khiển </p>
                    </li>
                    <li>
                      <p>
                        Màng RO Filmtec DOW - USA</p>
                    </li>
                    <li>
                      <p>
                        Công suất: 10L/H</p>
                    </li>
                    <li>
                      <p>
                        Giá niêm yết (không tủ): <span style={{color: '#ff0000'}}><strong>6.100.000 VNĐ</strong></span></p>
                    </li>
                  </ul>
                  <p style={{textAlign: 'right'}}>
                  </p>						<div id="div-btn-buy-product" className="clearfix">
                  <div className="buy-at-tiki">
                    <a href="#danhthucniemtin/3-ngay-1-sh-va-100-qua-tang-sieu-khuyen-mai-chua-tung-co-tai-karofi/?utm_source=Product%20page&utm_medium=Tet%20campaign&utm_campaign=Button%20sRO" target="_blank">
                      <div className="tiki">KHUYẾN MÃI</div>
                      <span>3 ngày 1 xe SH</span>
                    </a>
                  </div>
                  <div className="buy-at-pico">
                    <a href="#he-thong-phan-phoi-5" target="_blank">
                      <div className="pico">HỆ THỐNG PHÂN PHỐI</div>
                      <span>6000 đại lý TQ</span>
                    </a>
                  </div>
                </div>
                </div>
                <div className="clear" />
                <p className="phone">HOTLINE: 1900 64 18 (7:30 - 21:00)</p>
              </div>
              <div className="clear" />
              <div className="clearfix">
                <div id="tab-container" className="tab-container">
                  <ul className="etabs">
                    <li className="tab"><a href="#uu-diem-vuot-troi">Ưu điểm vượt trội</a></li>
                    <li className="tab"><a href="#tieu-chuan-chat-luong">Tiêu chuẩn chất lượng</a></li>
                    <li className="tab"><a href="#thong-so-ky-thuat">Thông số kỹ thuật</a></li>
                  </ul>
                  <div className="panel-container">
                    <div id="uu-diem-vuot-troi">
                      <p>
                        <span style={{fontSize: 14}}>Máy lọc nước tiêu chuẩn sRO 9 cấp thương hiệu Karofi là một sản phẩm máy lọc nước chất lượng mà người dùng không thể bỏ qua. Bên cạnh thiết kế hiện đại, phù hợp với nhiều không gian sống, sản phẩm còn được được nhiều tiêu chuẩn như: </span></p>
                      <h2>
                        <span style={{fontSize: 14}}>1.      Đạt chuẩn quốc gia về nước uống trực tiếp</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>Vượt qua quy trình kiểm tra nghiêm ngặt, Viện SKNN&amp;MT - Bộ Y Tế đã cấp chứng nhận QCVN6-1 cho <a href="#may-loc-nuoc-28">Máy lọc nước</a> Karofi. Đây là Quy chuẩn quốc gia cao nhất về nước uống trực tiếp, lần đầu tiên cấp cho một thương hiệu máy lọc nước tại Việt Nam.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>Nguồn nước được cấp chứng nhận QCVN6-1 phải đạt quy chuẩn của BYT đối với 21 chỉ tiêu hóa lý độc hại như: Asen, Amoni, Chì, Cyanua, Thủy ngân, Đồng, Nitrat... và 5 chỉ tiêu vi sinh: vi khuẩn E.coli, Coliform, Streptococci feacal, Pseudomonas aeruginosa, Bào tử vi khuẩn kị khí khử sulfit, đảm bảo an toàn tuyệt đối cho sức khỏe người dùng khi uống trực tiếp.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><a href="#dat-qcvn6-1-2010-byt/"><img alt="Máy lọc nước uống trực tiếp" src="/karofi/images/uploads/images/QCVN6/QCVN6.png" style={{height: 285, width: 300}} title="Máy lọc nước uống trực tiếp" /></a></span></p>
                      <h2>
                        <span style={{fontSize: 14}}>2.      Công nghệ lọc RO</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>Công nghệ lọc RO có khả năng loại bỏ 99,9% Amip, Asen, các ion kim loại nặng, virus, vi khuẩn và các tạp chất khác cho nguồn nước hoàn toàn tinh khiết. <a href="https://karofi.com">Máy lọc nước Karofi</a> sử dụng màng lọc RO Filmtec, nhập khẩu trực tiếp từ tập đoàn DOW-USA được NSF chứng nhận và khuyên dùng.</span></p>
                      <h2>
                        <span style={{fontSize: 14}}>3.      Hệ thống lọc 9 cấp</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>Hệ thống lọc 9 cấp với các lõi 5, 6, 7, 8, 9 có chức năng:</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Lõi số 5 - GAC-T33: Lõi được cấu tạo từ than hoạt tính gáo dừa, có tác dụng làm cho nước có vị ngon hơn, ngọt hơn, phù hợp với nhu cầu sử dụng của mọi người.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Lõi số 6 - Lõi Khoáng đá: Lõi được cấu tạo từ khoáng đá tự nhiên giúp bổ sung khoáng chất có lợi cho cơ thể.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Lõi số 7 - Lõi Hồng ngoại xa: chứa các hạt bóng gốm có khả năng hấp thụ năng lượng nhiệt bên ngoài để phát ra các tia hồng ngoại xa khiến nước được hoạt hóa và dễ hấp thụ vào máu hơn.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Lõi số 8: Lõi Nano Silver có khả năng diệt tới 99,99% vi khuẩn trong nước. </span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Đèn UV: Được lắp đặt ở vị trí cuối cùng trong hệ thống lọc nước Karofi, đèn UV giúp ngăn chặn 100% nguy cơ tái nhiễm khuẩn của nước trong quá trình lưu thông trong hệ thống lọc.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><a href="karofi.com/danhthucniemtin/3-ngay-1-sh-va-100-qua-tang-sieu-khuyen-mai-chua-tung-co-tai-karofi?utm_source=Product page&utm_medium=Tet campaign&utm_campaign=Inpage-sRO" target="_blank"><img alt="Chương trình khuyến mại Đánh thức niềm tin" src="/karofi/images/uploads/images/Trang/Resize%20KV%20Tet-640x360px.png" /></a></span></p>
                      <h3 style={{textAlign: 'center'}}>
                        <span style={{color: '#ff0000'}}><span style={{fontSize: 14}}>KHUYẾN MÃI 100% quà tặng khi mua máy lọc nước Karofi &amp; </span></span></h3>
                      <h3 style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><span style={{color: '#ff0000'}}>cơ hội nhận "3 NGÀY 1 SH" dành cho khách hàng may mắn</span> <span style={{color: '#0000ff'}}>&gt;&gt; <a href="#danhthucniemtin/khuyen-mai/">Xem ngay</a></span></span></h3>
                      <h2>
                        <span style={{fontSize: 14}}>4.      Tích hợp bộ vi điều khiển</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>-        Tự động sục rửa màng RO: Mỗi lần máy bắt đầu thực hiện quá trình lọc, máy lọc nước tiêu chuẩn sRO sẽ tự động sục rửa màng lọc RO trong 15s đầu tiên giúp kéo dài tuổi thọ của màng RO và đảm bảo hiệu suất màng lọc.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Bộ điều khiển van áp thấp: người dùng chủ động cho máy hoạt động trong trường hợp nước cấp đầu vào yếu hoặc không ổn định.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><a href="/karofi/images/uploads/images/Karofi sRO/sro-tem-moi.png"><img alt="Máy lọc nước sRO" src="/karofi/images/uploads/images/Karofi%20sRO/sro-tem-moi.png" style={{height: 355, width: 400}} title="Máy lọc nước sRO" /></a></span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><a href="#co-che-hoat-dong-cua-bo-vi-dieu-khien-trong-may-sro-bv26.html">Bộ vi điều khiển máy sRO</a></span></p>
                      <h2>
                        <span style={{fontSize: 14}}>5.      Tiết kiệm chi phí</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>-        Tiết kiệm chi phí thay thế lõi lọc và các linh phụ kiện</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Tiết kiệm chi phí sử dụng: 1 lít nước qua máy lọc sRO Karofi giá 193đ trong khi đó bạn phải trả 9000đ/lít nếu dùng nước đóng chai.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Tiết kiệm điện năng: van áp cao tự động ngắt điện khi nước đầy tránh lãng phí điện, chỉ tiêu thụ khoảng 3 kw/tháng.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>         Xem thêm tính kinh tế khi sử dụng máy lọc nước Karofi <a href="#su-dung-tiet-kiem-sg23.html"><span style={{color: '#0000ff'}}>tại đây</span></a></span></p>
                      <h2>
                        <span style={{fontSize: 14}}>6.      Linh phụ kiện chất lượng cao</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>Bình áp nhựa thép Hybrid siêu bền, vòi Karofi công nghệ Mỹ, tủ IQ sang trọng, van điện từ KSD tự động, bơm hút Karofi êm ái có thể hút sâu tới 2m….</span></p>
                      <h2>
                        <span style={{fontSize: 14}}>7.      Bảo hành 2 năm, hỗ trợ kĩ thuật 24/7</span></h2>
                      <p>
                        <span style={{fontSize: 14}}>         Xem thêm điều khoản bảo hành <a href="#quy-dinh-bao-hanh-sg34.html"><span style={{color: '#0000ff'}}>tại đây</span></a><span style={{color: '#0000ff'}}> </span></span></p>
                      <p>
                        <span style={{fontSize: 14}}><a href="#may-loc-nuoc-28"><span style={{color: '#0000ff'}}>Tìm hiểu thêm các sản phẩm máy lọc nước Karofi</span></a></span></p>							</div>
                    <div id="tieu-chuan-chat-luong">
                      <p>
                        <span style={{fontSize: 14}}>Với quá trình sản xuất nghiêm ngặt, các sản phẩm Karofi khi được đưa ra thị trường luôn là các sản phẩm tốt nhất. Nhờ đó, máy lọc nước tiêu chuẩn sRO 9 cấpđã đạt nhiều tiêu chuẩn chất lượng như:</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        <a href="https://karofi.com" target="_blank" title="Máy lọc nước"><span style={{color: '#0000ff'}}>Máy lọc nước</span></a> KAROFI được sản xuất theo quy trình công nghệ cấp chứng nhận phù hợp ISO 9001:2008.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-       Nước qua máy lọc nước Karofi đạt tiêu chuẩn QCVN 6-1:2010/BYT (Quy chuẩn kỹ thuật quốc gia về nước khoáng thiên nhiên và nước uống đóng chai). Đây là Quy chuẩn quốc gia cao nhất về nước uống trực tiếp, lần đầu tiên cấp cho một thương hiệu máy lọc nước tại Việt Nam.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><a href="/karofi/images/uploads/images/QCVN6/QCVN6.png"><img alt="Máy lọc nước uống trực tiếp" src="/karofi/images/uploads/images/QCVN6/QCVN6.png" style={{height: 285, width: 300}} title="Máy lọc nước uống trực tiếp" /></a></span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Có nguồn gốc xuất xứ rõ ràng: sản xuất và lắp ráp tại công ty cổ phần Karofi Việt Nam.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Sử dụng màng lọc RO Filmtec, nhập khẩu trực tiếp từ Hoa Kỳ.</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Hệ thống tem nhãn sắc nét, cụ thể, rõ ràng:</span></p>
                      <p>
                        <span style={{fontSize: 14}}>      + Tem chức năng: được dán trên từng lõi, thể hiện rõ ràng vật liệu cấu tạo, tác dụng và thời hạn sử dụng của các bộ phận như: lõi số 1, 2, 3, bơm, bình áp, vòi.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><img alt src="https://karofi.com/karofi/images/uploads/images/Karofi%20iRO%202.0/300x256xanh,P20may,P202_0,P207,P20cap.jpg.pagespeed.ic._5JaRLkMZV.webp" /></span></p>
                      <p>
                        <span style={{fontSize: 14}}>     + Tem phụ: Dán trên sản phẩm có hotline, website và xuất xứ sản phẩm rõ ràng giúp người mua yên tâm về nguồn gốc sản phẩm.</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><img alt="Tem phụ máy lọc nước tiêu chuẩn sRO 9 cấp Model KS90" src="https://karofi.com/karofi/images/uploads/images/Karofi%20sRO/KT-KS90.png" style={{height: 357, width: 400}} /></span></p>
                      <p>
                        <span style={{fontSize: 14}}>      + Tem xác thực sản phẩm chính hãng</span></p>
                      <p style={{textAlign: 'center'}}>
                        <span style={{fontSize: 14}}><img alt src="/karofi/images/uploads/images/Nuong/Tem%20SMS%20Karofi%208055.jpg" style={{height: 188, width: 300}} /></span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Bao bì được làm từ vật liệu thân thiện với môi trường, có độ bền và khả năng chịu lực kéo, lực nén và nhiệt cao giúp bảo vệ toàn vẹn cho sản phẩm</span></p>
                      <p>
                        <span style={{fontSize: 14}}>-        Giải thưởng về chất lượng: "Top 100 sản phẩm vàng 2012", “Sản phẩm đảm bảo Chất  lượng 2013”, "Top 100 Sản phẩm Chất lượng cao", "Đối tác chính thức với Dow Water &amp; Process Solution". Xem thêm <a href="#thanh-tich-dat-duoc-sg5.html"><span style={{color: '#0000ff'}}>tại đây</span></a></span></p>
                      <p>
                      </p>							</div>
                    <div id="thong-so-ky-thuat">
                      <div>
                        <table border={1}>
                          <tbody>
                          <tr>
                            <td>
                              Tên Model</td>
                            <td>
                              KSI90 (<strong>Không tủ: KT-KS90</strong>)</td>
                          </tr>
                          <tr>
                            <td>
                              Hệ thống cấp lọc</td>
                            <td>
                              9 cấp lọc</td>
                          </tr>
                          <tr>
                            <td>
                              Công suất lọc</td>
                            <td>
                              10 L/H</td>
                          </tr>
                          <tr>
                            <td>
                              Màng lọc</td>
                            <td>
                              Màng RO Filmtec™50</td>
                          </tr>
                          <tr>
                            <td>
                              Bình áp</td>
                            <td>
                              Nhựa thép Hybrid siêu bền</td>
                          </tr>
                          <tr>
                            <td>
                              Van điện từ</td>
                            <td>
                              KSD</td>
                          </tr>
                          <tr>
                            <td>
                              Bộ vi điều khiển</td>
                            <td>
                              Có</td>
                          </tr>
                          <tr>
                            <td>
                              Bơm</td>
                            <td>
                              Radian</td>
                          </tr>
                          <tr>
                            <td>
                              Điện áp</td>
                            <td>
                              220V – 50 Hz</td>
                          </tr>
                          <tr>
                            <td>
                              Điện năng tiêu thụ</td>
                            <td>
                              24w/h</td>
                          </tr>
                          <tr>
                            <td>
                              Kích thước có tủ</td>
                            <td>
                              850 x 430 x 330 ( mm)</td>
                          </tr>
                          <tr>
                            <td>
                              Thời gian bảo hành</td>
                            <td>
                              24 tháng</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <span style={{fontSize: 14}}>* </span>Giá bán trên chưa bao gồm thuế VAT 10%</p>							</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div id="sanphamnoibat" className="main">
          <div className="block_title clearfix">
            <h2>Sản phẩm liên quan</h2>
          </div>
          <ul id="carouselPromo">
            <li>
              <div className="product_box">
                <div className="product_image_wrapper">
                  <div className="product_image">
                    <a href="#may-loc-nuoc-tieu-chuan-sro-9-cap-sp76.html" title="Máy lọc nước tiêu chuẩn sRO 9 cấp"><img src="https://karofi.com/images/products/may loc nuoc thong minh sRO 1.1, 7 cap.jpg" alt="Máy lọc nước tiêu chuẩn sRO 9 cấp" /></a>
                  </div>
                </div>
                <div className="product_info">
                  <h3 className="product_title"><a href="#may-loc-nuoc-tieu-chuan-sro-9-cap-sp76.html" title="Máy lọc nước tiêu chuẩn sRO 9 cấp">Máy lọc nước tiêu chuẩn sRO 9 cấp</a></h3>
                  <p>Model: KT-KS90-A</p>
                </div>
              </div>
            </li>
            <li>
              <div className="product_box">
                <div className="product_image_wrapper">
                  <div className="product_image">
                    <a href="#may-loc-nuoc-tieu-chuan-sro-7-cap-sp8.html" title="Máy lọc nước tiêu chuẩn sRO 7 cấp"><img src="https://karofi.com/images/products/may loc nuoc thong minh sRO 1.1, 7 cap.jpg" alt="Máy lọc nước tiêu chuẩn sRO 7 cấp" /></a>
                  </div>
                </div>
                <div className="product_info">
                  <h3 className="product_title"><a href="#may-loc-nuoc-tieu-chuan-sro-7-cap-sp8.html" title="Máy lọc nước tiêu chuẩn sRO 7 cấp">Máy lọc nước tiêu chuẩn sRO 7 cấp</a></h3>
                  <p>Model: KT-KS70</p>
                </div>
              </div>
            </li>
            <li>
              <div className="product_box">
                <div className="product_image_wrapper">
                  <div className="product_image">
                    <a href="#may-loc-nuoc-tieu-chuan-sro-8-cap-sp7.html" title="Máy lọc nước tiêu chuẩn sRO 8 cấp"><img src="https://karofi.com/images/products/may loc nuoc thong minh sRO 1.1, 7 cap.jpg" alt="Máy lọc nước tiêu chuẩn sRO 8 cấp" /></a>
                  </div>
                </div>
                <div className="product_info">
                  <h3 className="product_title"><a href="#may-loc-nuoc-tieu-chuan-sro-8-cap-sp7.html" title="Máy lọc nước tiêu chuẩn sRO 8 cấp">Máy lọc nước tiêu chuẩn sRO 8 cấp</a></h3>
                  <p>Model: KT-KS80</p>
                </div>
              </div>
            </li>
          </ul>
          {/*<div id="Prev2"></div>
           <div id="Next2"></div> */}
          <div className="seo-text-product">
          </div>
        </div>


      </div>
    );
  }
}

export default NewsDetail
