import "./Story.css"
function Story() {
    return (
        <main>
            <div className="container">
                {" "}
                <div
                    className="breadcrumb breadcrumbs"
                    itemScope=""
                    itemType="http://schema.org/BreadcrumbList"
                >
                    <div className="rdfa-breadcrumb">
                        <div>
                            <p>
            <span
                itemProp="itemListElement"
                itemScope=""
                itemType="http://schema.org/ListItem"
            >
              <a
                  itemProp="item"
                  href="https://truyenplus.vn/"
                  className="home"
                  title="Truyện Plus"
              >
                <span itemProp="name" className="bc-sm-hidden">
                  Truyện Plus
                </span>
                <span className="bc-home">Truyện</span>
                <meta itemProp="position" content={1}/>
              </a>
            </span>
                                <span className="separator">»</span>
                                <span
                                    itemScope=""
                                    itemProp="itemListElement"
                                    itemType="http://schema.org/ListItem"
                                >
              <a itemProp="item" href="/bo-cong-anh-no-muon">
                <span itemProp="name">Bồ Công Anh Nở Muộn</span>
              </a>
              <meta itemProp="position" content={2}/>
            </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    <div className="main-wrapper">
                        <div className="leftCol" itemScope="" itemType="http://schema.org/Book">
                            <div className="book-info-top">
                                <div className="book-info-pic">
                                    <img
                                        src="https://truyenplus.vn/media/book/bo-cong-anh-no-muon-lan-rua.jpg"
                                        alt="Bồ Công Anh Nở Muộn"
                                        itemProp="image"
                                    />
                                </div>
                                <ul className="book-info-text">
                                    <li>
                                        <h1 itemProp="name">Bồ Công Anh Nở Muộn</h1>
                                    </li>
                                    <li>
                                        Tác giả :{" "}
                                        <a href="/tac-gia/lan-rua" itemProp="author">
                                            Lan Rùa
                                        </a>
                                    </li>
                                    <li className="li--genres">
                                        Thể loại :{" "}
                                        <a
                                            href="/the-loai/truyen-teen"
                                            title="Đọc truyện Truyện Teen online"
                                        >
                                            Truyện Teen
                                        </a>
                                    </li>
                                    <li>Số chương : 39</li>
                                    <li>
                                        Trạng thái :
                                        <span className="label-status label-updating">Updating</span>
                                    </li>
                                    <li>Nguồn : Wattpad</li>
                                    <li>Cập nhật cuối : 07/10/2018</li>
                                    <li>
                                        <span>Đánh giá : </span>
                                        <em className="rate_row" id="rate_row"/>
                                        <div id="valore"/>
                                        <em className="rate_row_result"/>
                                        <em id="rate_row_cmd">
                                            <em>Đánh giá cho truyện này</em>
                                        </em>
                                    </li>
                                    <li className="clearfix lstbtn">
                                        <a href="#" onClick="gotochaplist(event);">
                  <span className="btn_truyen btn_dschuong">
                    DANH SÁCH CHƯƠNG
                  </span>
                                        </a>
                                        <a href="/bo-cong-anh-no-muon/chuong-0/1211799.html">
                                            <span className="btn_truyen">ĐỌC TỪ ĐẦU</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div
                                            className="fb-like"
                                            data-href="https://truyenplus.vn/bo-cong-anh-no-muon"
                                            data-layout="button_count"
                                            data-action="like"
                                            data-size="small"
                                            data-show-faces="false"
                                            data-share="true"
                                        />
                                        <div
                                            className="fb-save"
                                            data-uri="https://truyenplus.vn/bo-cong-anh-no-muon"
                                            data-size="small"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="new-chap">
                                <h2>
                                    Chương được cập nhật từ ngày:{" "}
                                    <span style={{backgroundColor: "#f8e378"}}>07/10/2018</span>
                                </h2>
                                <a href="/bo-cong-anh-no-muon/chuong-39/1257978.html">
                                    Chương 39: Ở Lại Với Tớ, Được Không?
                                </a>
                                <a href="/bo-cong-anh-no-muon/chuong-38/1257977.html">
                                    Chương 38: Lâu Nhất Có Thể
                                </a>
                                <a href="/bo-cong-anh-no-muon/chuong-37/1257976.html">
                                    Chương 37: Chỉ Cần Có Em Là Có Tất Cả
                                </a>
                                <a href="/bo-cong-anh-no-muon/chuong-36/1257975.html">
                                    Chương 36: Từ Đầu Đến Cuối, Chỉ Thích Riêng Một Mình Anh?
                                </a>
                                <span onClick="infoNotify();" className="btn-notify">
              Nhấn vào đây để nhận thông báo khi có chương mới
            </span>
                            </div>
                            <div id="gioithieu">
                                <h2>Giới thiệu nội dung Bồ Công Anh Nở Muộn: </h2>
                                <div itemProp="description">
                                    <p>
                                        <em>
                                            <b>Thể loại:</b> Thanh thiếu niên
                                            <br/>
                                            <b>Độ tuổi thích hợp: </b>16-22.
                                        </em>
                                        <br/>
                                        <br/>
                                        Cậu ấy, đối với tôi, như một đoá hoa bồ công anh nở muộn!
                                        <br/>
                                        <i>
                                            Đây là bộ truyện ONGOING, không có thời gian ra chap. Mọi
                                            người cân nhắc kỹ trước khi nhảy hố.
                                        </i>
                                        <br/>
                                        <br/>
                                        Truyện viết riêng cho lứa tuổi thanh thiếu niên, truyện về tình
                                        yêu, đam mê và những hoài bão tuổi trẻ.
                                        <br/>
                                        <br/>
                                        <i>P/S: Lan Rua"s story ~ Porcupine &amp; Duck Family</i>
                                    </p>
                                </div>
                            </div>
                            <div style={{clear: "both"}}/>
                            <div style={{width: "100%", textAlign: "center"}}>
            <span
                style={{display: "none"}}
                id="content_more"
                className="content_more show-more"
            >
              <i className="spire show--more"/> Hiện thị
            </span>
                                <span
                                    style={{}}
                                    id="content_less"
                                    className="content_less show-more"
                                >
              <i className="spire show--less"/> Rút gọn
            </span>
                            </div>
                            <div style={{clear: "both"}}/>
                            <div id="chapter" className="chapter">
                                <div className="book-info-chapter">
                                    <div className="row title-list-chapter">
                                        <span>Danh sách chương</span>
                                    </div>
                                    <div id="chapter-list">
                                        <div className="chapter-list">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                      <span>
                        <a href="/chapter">
                          Chương 0: Cậu Ấy
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-1/1211800.html">
                          Chương 1: Đại Lộ Champs-Élysées
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-2/1211801.html">
                          Chương 2: Bồ Công Anh Cậu Tặng Tớ
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-3/1211802.html">
                          Chương 3: Cậu Là Công Chúa Của Các Công Chúa
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-4/1211803.html">
                          Chương 4: Võ Đình Nguyên Anh, Tớ Nhớ Cậu!
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-5/1211804.html">
                          Chương 5: Cậu Cũng Nhớ Tớ, Phải Không?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-6/1211805.html">
                          Chương 6: Tớ Đã Rất Cố Gắng Để Quên Cậu!
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-7/1211806.html">
                          Chương 7: Chiến Thắng Chính Bản Thân Mình
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-8/1211807.html">
                          Chương 8: Mẫn Tiên, Có Phải Chị Thích Ai Rồi Không?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-9/1211808.html">
                          Chương 9: Vì Con Gấu Nhà Tớ Tên Là Kiều Anh
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-10/1211809.html">
                          Chương 10: Có Việc Gì Thì Bình Tĩnh Giải Quyết
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-11/1211810.html">
                          Chương 11: Những Ký Ức Đẹp Đẽ
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-12/1211811.html">
                          Chương 12: Cậu Biết Cậu Bé Đó Là Ai Không?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-13/1211812.html">
                          Chương 13: Vì Tớ Đã Nhớ Cậu Rất Lâu
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-14/1211813.html">
                          Chương 14: Tớ Nắm Tay Cậu Được Không?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-15/1211814.html">
                          Chương 15: Tớ Cố Ý Để Cậu Cầm Về
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-16/1211815.html">
                          Chương 16: Chúng Ta...Thực Sự Chỉ Là Bạn Cấp Ba?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-17/1211816.html">
                          Chương 17: Ngày Tớ Kết Hôn, Cậu Sẽ Tới Chứ?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-18/1211817.html">
                          Chương 18: Trẻ Mồ Côi Rất Đáng Thương, Phải Không Kiều
                          Anh?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-19/1211818.html">
                          Chương 19: Nếu Cậu Ghen Quá Thì Cứ Nói Ra
                        </a>
                      </span>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                      <span>
                        <a href="/bo-cong-anh-no-muon/chuong-20/1211819.html">
                          Chương 20: Đừng Tưởng Tớ Chưa Hết Ghét Cậu
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-21/1211820.html">
                          Chương 21: Lợi Thế Là Cậu Rất Xinh
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-22/1211821.html">
                          Chương 22: Vậy Cậu Cứ Khóc Tiếp Đi, Tớ Đợi!
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-23/1211822.html">
                          Chương 23: Còn Tớ Thì Rất Nhớ Một Người!
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-24/1211823.html">
                          Chương 24: Nếu Xét Về Độ Xinh Thì Cậu Là Vô Đối
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-25/1211824.html">
                          Chương 25: Tớ Thích Cậu
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-26/1211825.html">
                          Chương 26: Cậu Chỉ Cần Hôn Một Ai Đó Là Được
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-27/1211826.html">
                          Chương 27: Tớ Sẽ Đại Diện Họ Nhà Trai
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-28/1211827.html">
                          Chương 28: Cậu Là Những Gì Đẹp Đẽ Nhất Trong Tuổi Trẻ
                          Của Tớ
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-29/1211828.html">
                          Chương 29: Yêu Tớ Đi!
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-30/1257969.html">
                          Chương 30: Một Người Nào Đó Phải Chịu Mưa Để Cậu Khỏi
                          Ướt
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-31/1257970.html">
                          Chương 31: Ai Cũng Xứng Đáng Được Yêu Thương
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-32/1257971.html">
                          Chương 32: Một Đời Chỉ Nắm Tay Một Người
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-33/1257972.html">
                          Chương 33: Tớ Ghét Cậu
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-34/1257973.html">
                          Chương 34: Bông Hoa Nở Muộn
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-35/1257974.html">
                          Chương 35: Nếu Cậu Cũng Thích Tớ, Thì Làm Ơn Quay Đầu
                          Lại
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-36/1257975.html">
                          Chương 36: Từ Đầu Đến Cuối, Chỉ Thích Riêng Một Mình
                          Anh?
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-37/1257976.html">
                          Chương 37: Chỉ Cần Có Em Là Có Tất Cả
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-38/1257977.html">
                          Chương 38: Lâu Nhất Có Thể
                        </a>
                      </span>
                                                    <span>
                        <a href="/bo-cong-anh-no-muon/chuong-39/1257978.html">
                          Chương 39: Ở Lại Với Tớ, Được Không?
                        </a>
                      </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loading-div" style={{display: "none"}}>
                                    Loading…
                                </div>
                            </div>
                            <div className="comment-info">
                                <div
                                    notify="true"
                                    className="fb-comments"
                                    data-href="https://truyenplus.vn/bo-cong-anh-no-muon"
                                    data-width="100%"
                                    data-numposts={10}
                                ></div>
                            </div>
                        </div>
                        <div className="middleCol">
                            <div style={{clear: "both"}}/>
                            <div className="tag tag-left">
                                <h3 className="title list-title">
                                    <i className="spire spire--list"/>
                                    THỂ LOẠI
                                </h3>
                                <ul className="tags tag-name">
                                    <li/>
                                    <li>
                                        <a rel="tag" href="/the-loai/tien-hiep" title=" Đọc online">
                                            Tiên Hiệp
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/kiem-hiep" title=" Đọc online">
                                            Kiếm Hiệp
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/ngon-tinh" title=" Đọc online">
                                            Ngôn Tình
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/do-thi" title=" Đọc online">
                                            Đô Thị
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/sung" title=" Đọc online">
                                            Sủng
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/quan-truong" title=" Đọc online">
                                            Quan Trường
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/vong-du" title=" Đọc online">
                                            Võng Du
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/khoa-huyen" title=" Đọc online">
                                            Khoa Huyễn
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/huyen-huyen" title=" Đọc online">
                                            Huyền Huyễn
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/di-gioi" title=" Đọc online">
                                            Dị Giới
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/di-nang" title=" Đọc online">
                                            Dị Năng
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/quan-su" title=" Đọc online">
                                            Quân Sự
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/lich-su" title=" Đọc online">
                                            Lịch Sử
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/xuyen-khong" title=" Đọc online">
                                            Xuyên Không
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/cung-dau" title=" Đọc online">
                                            Cung Đấu
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/nu-cuong" title=" Đọc online">
                                            Nữ Cường
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/gia-dau" title=" Đọc online">
                                            Gia Đấu
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/dong-phuong" title=" Đọc online">
                                            Đông Phương
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/dam-my" title=" Đọc online">
                                            Đam Mỹ
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/bach-hop" title=" Đọc online">
                                            Bách Hợp
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/mat-the" title=" Đọc online">
                                            Mạt Thế
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/truyen-teen" title=" Đọc online">
                                            Truyện Teen
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/nu-phu" title=" Đọc online">
                                            Nữ Phụ
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/doan-van" title=" Đọc online">
                                            Đoản Văn
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/sac" title=" Đọc online">
                                            Sắc
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/nguoc" title=" Đọc online">
                                            Ngược
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/trong-sinh" title=" Đọc online">
                                            Trọng Sinh
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="tag" href="/the-loai/khac" title=" Đọc online">
                                            Khác
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="xem-nhieu recently">
                                <h3 className="title all-title">
                                    Truyện đang đọc trên <span>truyenplus.vn</span>
                                </h3>
                                <div className="all recently-item"></div>
                            </div>
                            <div style={{clear: "both"}}/>
                            <div className="xem-nhieu">
                                <h3 className="title all-title">
                                    Truyện đọc nhiều <span>trong tháng</span>
                                </h3>
                                <div className="all">
                                    <div className="xem-nhieu-item">
                                        <span>1</span>
                                        <h3>
                                            <a
                                                href="/co-vo-ngot-ngao-co-chut-bat-luong"
                                                title="Cô Vợ Ngọt Ngào Có Chút Bất Lương Đọc online"
                                            >
                                                Cô Vợ Ngọt Ngào Có Chút Bất Lương{" "}
                                                <i>Ngôn Tình,Trọng Sinh,Sủng</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>2</span>
                                        <h3>
                                            <a href="/de-ba" title="Đế Bá Đọc online">
                                                Đế Bá <i>Huyền Huyễn</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>3</span>
                                        <h3>
                                            <a
                                                href="/mao-son-troc-quy-nhan"
                                                title="Mao Sơn Tróc Quỷ Nhân Đọc online"
                                            >
                                                Mao Sơn Tróc Quỷ Nhân <i>Đô Thị,Huyền Huyễn,Linh Dị</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>4</span>
                                        <h3>
                                            <a
                                                href="/linh-vu-thien-ha"
                                                title="Linh Vũ Thiên Hạ Đọc online"
                                            >
                                                Linh Vũ Thiên Hạ{" "}
                                                <i>Tiên Hiệp,Dị Giới,Huyền Huyễn,Xuyên Không</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>5</span>
                                        <h3>
                                            <a
                                                href="/than-dao-dan-ton"
                                                title="Thần Đạo Đan Tôn Đọc online"
                                            >
                                                Thần Đạo Đan Tôn <i>Tiên Hiệp,Huyền Huyễn</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>6</span>
                                        <h3>
                                            <a
                                                href="/bao-boi-cua-tong-giam-doc"
                                                title="Bảo Bối Của Tổng Giám Đốc Đọc online"
                                            >
                                                Bảo Bối Của Tổng Giám Đốc <i>Ngôn Tình,Sắc</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>7</span>
                                        <h3>
                                            <a
                                                href="/hon-trom-55-lan-diep-phi-da"
                                                title="Hôn Trộm 55 Lần Đọc online"
                                            >
                                                Hôn Trộm 55 Lần <i>Ngôn Tình</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>8</span>
                                        <h3>
                                            <a
                                                href="/ngao-the-cuu-trong-thien"
                                                title="Ngạo Thế Cửu Trọng Thiên Đọc online"
                                            >
                                                Ngạo Thế Cửu Trọng Thiên{" "}
                                                <i>Tiên Hiệp,Kiếm Hiệp,Huyền Huyễn</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>9</span>
                                        <h3>
                                            <a
                                                href="/ngao-the-dan-than"
                                                title="Ngạo Thế Đan Thần Đọc online"
                                            >
                                                Ngạo Thế Đan Thần <i>Tiên Hiệp, Huyền Huyễn</i>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="xem-nhieu-item">
                                        <span>10</span>
                                        <h3>
                                            <a
                                                href="/hop-dong-hon-nhan-100-ngay"
                                                title="Hợp Đồng Hôn Nhân 100 Ngày Đọc online"
                                            >
                                                Hợp Đồng Hôn Nhân 100 Ngày <i>Ngôn Tình,Đô Thị</i>
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div style={{clear: "both"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Story