import "./Home.css"
import {useState} from "react";
function Home() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = (e) => {
        e.preventDefault();
        setIsExpanded(true);
    };
    return (
        <main>
            <div className="container">
                <div className="wrapper homepage">
                    <div className="slide">
                        <div id="owl-slide" className="owl-carousel">
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a
                                            href="/thanh-xuan-co-nhau"
                                            title="Đọc truyện Thanh Xuân Có Nhau!"
                                        >
                                            Thanh Xuân Có Nhau!
                                        </a>
                                    </h3>
                                    <a href="/thanh-xuan-co-nhau" title="Số chương : 113">
                                        Số chương : 113
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                    <a href="/ho-nu" title="Đọc truyện Hồ Nữ">
                                            Hồ Nữ
                                        </a>
                                    </h3>
                                    <a href="/ho-nu" title="Số chương : 166">
                                        Số chương : 166
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a href="/giang-ho-di-gioi" title="Đọc truyện Giang Hồ Dị Giới">
                                            Giang Hồ Dị Giới
                                        </a>
                                    </h3>
                                    <a href="/giang-ho-di-gioi" title="Số chương : 93">
                                        Số chương : 93
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a
                                            href="/oan-gia-lam-ban-gai-toi-nha"
                                            title="Đọc truyện Oan Gia! Làm Bạn Gái Tôi Nha!"
                                        >
                                            Oan Gia! Làm Bạn Gái Tôi Nha!
                                        </a>
                                    </h3>
                                    <a href="/oan-gia-lam-ban-gai-toi-nha" title="Số chương : 203">
                                        Số chương : 203
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a
                                            href="/voi-em-anh-mai-la-be-con-bts-fanfic"
                                            title="Đọc truyện Với Em, Anh Mãi Là Bé Con [Bts-Fanfic]"
                                        >
                                            Với Em, Anh Mãi Là Bé Con [Bts-Fanfic]
                                        </a>
                                    </h3>
                                    <a
                                        href="/voi-em-anh-mai-la-be-con-bts-fanfic"
                                        title="Số chương : 66"
                                    >
                                        Số chương : 66
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a
                                            href="/lam-the-nao-de-khong-nho-han"
                                            title="Đọc truyện Làm Thế Nào Để Không Nhớ Hắn"
                                        >
                                            Làm Thế Nào Để Không Nhớ Hắn
                                        </a>
                                    </h3>
                                    <a href="/lam-the-nao-de-khong-nho-han" title="Số chương : 66">
                                        Số chương : 66
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a
                                            href="/mot-lan-bo-lo-la-bo-qua-nhau-ca-doi"
                                            title="Đọc truyện Một Lần Bỏ Lỡ Là Bỏ Qua Nhau Cả Đời"
                                        >
                                            Một Lần Bỏ Lỡ Là Bỏ Qua Nhau Cả Đời
                                        </a>
                                    </h3>
                                    <a
                                        href="/mot-lan-bo-lo-la-bo-qua-nhau-ca-doi"
                                        title="Số chương : 156"
                                    >
                                        Số chương : 156
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src="https://truyenplus.vn/media/book/giang-ho-di-gioi-cuu-long.jpg"
                                    alt="Thanh Xuân Có Nhau! đọc online"
                                />
                                <div className="slide-caption">
                                    <h3>
                                        <a href="/ac-linh-quoc-gia" title="Đọc truyện Ác Linh Quốc Gia">
                                            Ác Linh Quốc Gia
                                        </a>
                                    </h3>
                                    <a href="/ac-linh-quoc-gia" title="Số chương : 1000">
                                        Số chương : 1000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-wrapper">
                        <div className="taghome clearfix">
                            <ul className="taglist">
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
                        <div className="fullCol">

                            <div className="daily-update">
                                <h2 className="title update-title" title="TRUYỆN MỚI CẬP NHẬT">
                                    <i className="spire spire--list"/>
                                    TRUYỆN MỚI CẬP NHẬT
                                </h2>
                            </div>
                            <div id="contentstory">
                                <div className="home-content">
                                    <div className="listitems">
                                        <div className="item">
                                            <a className="cover" href="/bo-cong-anh-no-muon">
                                                <img
                                                    src="https://truyenplus.vn/media/book/bo-cong-anh-no-muon-lan-rua.jpg"
                                                    alt="Bồ Công Anh Nở Muộn"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/story"
                                                        title="Bồ Công Anh Nở Muộn"
                                                    >
                                                        Bồ Công Anh Nở Muộn
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/cao-thu-doi-den-thay-trang">
                                                <img
                                                    src="https://truyenplus.vn/media/book/cao-thu-doi-den-thay-trang-phong-luu-thu-ngoc.jpg"
                                                    alt="Cao Thủ “Đổi Đen Thay Trắng”"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/cao-thu-doi-den-thay-trang"
                                                        title="Cao Thủ “Đổi Đen Thay Trắng”"
                                                    >
                                                        Cao Thủ “Đổi Đen Thay Trắng”
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/nha-tro-cuc-pham">
                                                <img
                                                    src="https://truyenplus.vn/media/book/nha-tro-cuc-pham.jpg"
                                                    alt="Nhà Trọ Cực Phẩm"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/nha-tro-cuc-pham" title="Nhà Trọ Cực Phẩm">
                                                        Nhà Trọ Cực Phẩm
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/trung-sinh-mat-the-doc-sung">
                                                <img
                                                    src="https://truyenplus.vn/media/book/11420077_403906989796764_1539356293_n.jpg"
                                                    alt="Trùng Sinh Mạt Thế Độc Sủng"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/trung-sinh-mat-the-doc-sung"
                                                        title="Trùng Sinh Mạt Thế Độc Sủng"
                                                    >
                                                        Trùng Sinh Mạt Thế Độc Sủng
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/xuyen-ve-co-dai-doat-lay-yeu-thuong"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/1197033,1197034,1197035,1197036,1197037,1197038.jpg"
                                                    alt="Xuyên Về Cổ Đại, Đoạt Lấy Yêu Thương"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/xuyen-ve-co-dai-doat-lay-yeu-thuong"
                                                        title="Xuyên Về Cổ Đại, Đoạt Lấy Yêu Thương"
                                                    >
                                                        Xuyên Về Cổ Đại, Đoạt Lấy Yêu Thương
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/cong-chua-hoa-than">
                                                <img
                                                    src="https://truyenplus.vn/media/book/cong-chua-hoa-than.jpg"
                                                    alt="Công Chúa Hòa Thân"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/cong-chua-hoa-than" title="Công Chúa Hòa Thân">
                                                        Công Chúa Hòa Thân
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/hoang-hau-nuong-nuong-dich-ngu-mao-dac-hieu"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/hoang-hau-nuong-nuong-dich-ngu-mao-dac-hieu.jpg"
                                                    alt="Hoàng Hậu Nương Nương Đích Ngũ Mao Đặc Hiệu"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/hoang-hau-nuong-nuong-dich-ngu-mao-dac-hieu"
                                                        title="Hoàng Hậu Nương Nương Đích Ngũ Mao Đặc Hiệu"
                                                    >
                                                        Hoàng Hậu Nương Nương Đích Ngũ Mao Đặc Hiệu
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/quy-vuong-gia-dich-tuyet-the-doc-phi"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/quy-vuong-gia-dich-tuyet-the-doc-phi.jpg"
                                                    alt="Qủy Vương Gia Đích Tuyệt Thế Độc Phi"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/quy-vuong-gia-dich-tuyet-the-doc-phi"
                                                        title="Qủy Vương Gia Đích Tuyệt Thế Độc Phi"
                                                    >
                                                        Qủy Vương Gia Đích Tuyệt Thế Độc Phi
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/phe-vat-cuong-the-cuc-pham-that-tieu-thu"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/phe-vat-cuong-the-cuc-pham-that-tieu-thu.jpg"
                                                    alt="Phế Vật Cuồng Thê: Cực Phẩm Thất Tiểu Thư"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/phe-vat-cuong-the-cuc-pham-that-tieu-thu"
                                                        title="Phế Vật Cuồng Thê: Cực Phẩm Thất Tiểu Thư"
                                                    >
                                                        Phế Vật Cuồng Thê: Cực Phẩm Thất Tiểu Thư
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/doc-sung-phe-hau">
                                                <img
                                                    src="https://truyenplus.vn/media/book/doc-sung-phe-hau.jpg"
                                                    alt="Độc Sủng Phế Hậu"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/doc-sung-phe-hau" title="Độc Sủng Phế Hậu">
                                                        Độc Sủng Phế Hậu
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/han-mac-tan-thiem-dai-mac-huong">
                                                <img
                                                    src="https://truyenplus.vn/media/book/han-mac-tan-thiem-dai-mac-huong.jpg"
                                                    alt="Hàn Mặc Tân Thiêm Đại Mặc Hương"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/han-mac-tan-thiem-dai-mac-huong"
                                                        title="Hàn Mặc Tân Thiêm Đại Mặc Hương"
                                                    >
                                                        Hàn Mặc Tân Thiêm Đại Mặc Hương
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/cuong-huyet-thien-ma">
                                                <img
                                                    src="https://truyenplus.vn/media/book/cuong-huyet-thien-ma.jpg"
                                                    alt="Cuồng Huyết Thiên Ma"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/cuong-huyet-thien-ma"
                                                        title="Cuồng Huyết Thiên Ma"
                                                    >
                                                        Cuồng Huyết Thiên Ma
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/he-thong-liep-diem">
                                                <img
                                                    src="https://truyenplus.vn/media/book/he-thong-liep-diem.jpg"
                                                    alt="Hệ Thống Liệp Diễm"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/he-thong-liep-diem" title="Hệ Thống Liệp Diễm">
                                                        Hệ Thống Liệp Diễm
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/gian-ninh-quoc-su-yeu-ta-the">
                                                <img
                                                    src="https://truyenplus.vn/media/book/gian-ninh-quoc-su-yeu-ta-the.jpg"
                                                    alt="Gian Nịnh Quốc Sư Yêu Tà Thê"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/gian-ninh-quoc-su-yeu-ta-the"
                                                        title="Gian Nịnh Quốc Sư Yêu Tà Thê"
                                                    >
                                                        Gian Nịnh Quốc Sư Yêu Tà Thê
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/cung-troi-voi-thu">
                                                <img
                                                    src="https://truyenplus.vn/media/book/cung-troi-voi-thu.jpg"
                                                    alt="Cùng Trời Với Thú"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/cung-troi-voi-thu" title="Cùng Trời Với Thú">
                                                        Cùng Trời Với Thú
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/my-thuc-tai-dan-quoc">
                                                <img
                                                    src="https://truyenplus.vn/media/book/my-thuc-tai-dan-quoc.jpg"
                                                    alt="Mỹ Thực Tại Dân Quốc"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/my-thuc-tai-dan-quoc"
                                                        title="Mỹ Thực Tại Dân Quốc"
                                                    >
                                                        Mỹ Thực Tại Dân Quốc
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/anh-de-rat-thich-phat-duong">
                                                <img
                                                    src="https://truyenplus.vn/media/book/anh-de-rat-thich-phat-duong.jpg"
                                                    alt="Ảnh Đế Rất Thích Phát Đường"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/anh-de-rat-thich-phat-duong"
                                                        title="Ảnh Đế Rất Thích Phát Đường"
                                                    >
                                                        Ảnh Đế Rất Thích Phát Đường
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/ong-xa-la-trung-khuyen">
                                                <img
                                                    src="https://truyenplus.vn/media/book/ong-xa-la-trung-khuyen.jpg"
                                                    alt="Ông Xã Là Trung Khuyển"
                                                />
                                                <span className="full-label"/>
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/ong-xa-la-trung-khuyen"
                                                        title="Ông Xã Là Trung Khuyển"
                                                    >
                                                        Ông Xã Là Trung Khuyển
                                                    </a>
                                                </h3>
                                                <a
                                                    className="sts sts_1"
                                                    href="/mau-xuyen-he-thong-thanh-mai-truc-ma-nha-ben/chuong-40/1378661.html"
                                                    title="Chương 40: Phiên ngoại 2"
                                                >
                                                    Chương 40: Phiên ngoại 2
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="daily-update">
                                <h2 className="title update-title" title="TRUYỆN MỚI CẬP NHẬT">
                                    <i className="spire spire--list"/>
                                    TRUYỆN FULL
                                </h2>
                            </div>
                            <div>
                                <div className="home-content">
                                    <div className="listitems owl-slide" id="owl-slide-home">
                                        <div className="item">
                                            <a className="cover" href="/duoc-yeu-phi-yen">
                                                <img
                                                    src="https://truyenplus.vn/media/book/duoc-yeu-phi-yen.jpg"
                                                    alt="Dược Yêu"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/duoc-yeu-phi-yen" title="Dược Yêu">
                                                        Dược Yêu
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 57 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/muoi-gio-toi-ngay-thu-sau">
                                                <img
                                                    src="https://truyenplus.vn/media/book/muoi-gio-toi-ngay-thu-sau-khai-ly-truyenplus-vn.jpg"
                                                    alt="Mười Giờ Tối, Ngày Thứ Sáu"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/muoi-gio-toi-ngay-thu-sau"
                                                        title="Mười Giờ Tối, Ngày Thứ Sáu"
                                                    >
                                                        Mười Giờ Tối, Ngày Thứ Sáu
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 10 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/ran-ret-thu-nu">
                                                <img
                                                    src="https://truyenplus.vn/media/book/ran-ret-thu-nu.jpg"
                                                    alt="Rắn Rết Thứ Nữ"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/ran-ret-thu-nu" title="Rắn Rết Thứ Nữ">
                                                        Rắn Rết Thứ Nữ
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 250 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/yeu-chieu-tong-giam-doc-phuc-hac">
                                                <img
                                                    src="https://truyenplus.vn/media/book/yeu-chieu-tong-giam-doc-phuc-hac1.jpg"
                                                    alt="Yêu Chiều Tổng Giám Đốc Phúc Hắc"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/yeu-chieu-tong-giam-doc-phuc-hac"
                                                        title="Yêu Chiều Tổng Giám Đốc Phúc Hắc"
                                                    >
                                                        Yêu Chiều Tổng Giám Đốc Phúc Hắc
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 96 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/nguoi-tinh-tri-mang">
                                                <img
                                                    src="https://truyenplus.vn/media/book/nguoi-tinh-tri-mang-an-tam.jpg"
                                                    alt="Người Tình Trí Mạng"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/nguoi-tinh-tri-mang"
                                                        title="Người Tình Trí Mạng"
                                                    >
                                                        Người Tình Trí Mạng
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 676 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/ac-doc-nu-phu-trung-sinh">
                                                <img
                                                    src="https://truyenplus.vn/media/book/ac-doc-nu-phu-trung-sinh-ngung-huy-tuyet-dong-truyenplus-vn.jpg"
                                                    alt="Ác Độc Nữ Phụ Trùng Sinh"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/ac-doc-nu-phu-trung-sinh"
                                                        title="Ác Độc Nữ Phụ Trùng Sinh"
                                                    >
                                                        Ác Độc Nữ Phụ Trùng Sinh
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 93 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/tinh-khoi-va-nong-nhiet">
                                                <img
                                                    src="https://truyenplus.vn/media/book/tinh-khoi-va-nong-nhiet-y-sac-truyenplus-vn.jpg"
                                                    alt="Tinh Khôi Và Nồng Nhiệt"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/tinh-khoi-va-nong-nhiet"
                                                        title="Tinh Khôi Và Nồng Nhiệt"
                                                    >
                                                        Tinh Khôi Và Nồng Nhiệt
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 118 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/sep-chung-toi-lai-khoe-vo">
                                                <img
                                                    src="https://truyenplus.vn/media/book/sep-chung-toi-lai-khoe-vo.jpg"
                                                    alt="Sếp Chúng Tôi Lại Khoe Vợ"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/sep-chung-toi-lai-khoe-vo"
                                                        title="Sếp Chúng Tôi Lại Khoe Vợ"
                                                    >
                                                        Sếp Chúng Tôi Lại Khoe Vợ
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 95 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/em-gai-anh-yeu-em">
                                                <img
                                                    src="https://truyenplus.vn/media/book/em-gai-anh-yeu-em-nguyet-vinh-mat.jpg"
                                                    alt="Em Gái, Anh Yêu Em"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/em-gai-anh-yeu-em" title="Em Gái, Anh Yêu Em">
                                                        Em Gái, Anh Yêu Em
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 40 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/phuong-nghich-thien-ha">
                                                <img
                                                    src="https://truyenplus.vn/media/book/phuong-nghich-thien-ha-lo-phi-truyenplus-vn.jpg"
                                                    alt="Phượng Nghịch Thiên Hạ"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/phuong-nghich-thien-ha"
                                                        title="Phượng Nghịch Thiên Hạ"
                                                    >
                                                        Phượng Nghịch Thiên Hạ
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 1157 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/hop-dong-tinh-nhan-nguoi-tinh-hop-dong-cua-tong-giam-doc-bac-tinh"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/hop-dong-tinh-nhan-nguoi-tinh-hop-dong-cua-tong-giam-doc-bac-tinh.jpg"
                                                    alt="Hợp Đồng Tình Nhân (Người Tình Hợp Đồng Của Tổng Giám Đốc Bạc Tình)"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/hop-dong-tinh-nhan-nguoi-tinh-hop-dong-cua-tong-giam-doc-bac-tinh"
                                                        title="Hợp Đồng Tình Nhân (Người Tình Hợp Đồng Của Tổng Giám Đốc Bạc Tình)"
                                                    >
                                                        Hợp Đồng Tình Nhân (Người Tình Hợp Đồng Của Tổng Giám
                                                        Đốc Bạc Tình)
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 334 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/quan-gia">
                                                <img
                                                    src="https://truyenplus.vn/media/book/quan-gia-ham-binh-truyenplus-vn.jpg"
                                                    alt="Quan Gia"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/quan-gia" title="Quan Gia">
                                                        Quan Gia
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 1354 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/bi-thu-trung-sinh">
                                                <img
                                                    src="https://truyenplus.vn/media/book/bi-thu-trung-sinh-bao-thach-tieu-truyenplus-vn.jpg"
                                                    alt="Bí Thư Trùng Sinh"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/bi-thu-trung-sinh" title="Bí Thư Trùng Sinh">
                                                        Bí Thư Trùng Sinh
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 2771 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a
                                                className="cover"
                                                href="/em-gai-diu-dang-va-anh-trai-ma-quy"
                                            >
                                                <img
                                                    src="https://truyenplus.vn/media/book/em-gai-diu-dang-va-anh-trai-ma-quy-luu-van-truyenplus-vn.jpg"
                                                    alt="Em Gái Dịu Dàng Và Anh Trai Ma Quỷ"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a
                                                        href="/em-gai-diu-dang-va-anh-trai-ma-quy"
                                                        title="Em Gái Dịu Dàng Và Anh Trai Ma Quỷ"
                                                    >
                                                        Em Gái Dịu Dàng Và Anh Trai Ma Quỷ
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 52 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/bo-y-quan-dao">
                                                <img
                                                    src="https://truyenplus.vn/media/book/bo-y-quan-dao-tich-mich-doc-nam-hoa-truyenplus-vn.jpg"
                                                    alt="Bố Y Quan Đạo"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/bo-y-quan-dao" title="Bố Y Quan Đạo">
                                                        Bố Y Quan Đạo
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 1303 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/quan-khi">
                                                <img
                                                    src="https://truyenplus.vn/media/book/quan-khi-hong-mong-thu-truyenplus-vn.jpg"
                                                    alt="Quan Khí​"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/quan-khi" title="Quan Khí​">
                                                        Quan Khí​
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 1741 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/tan-the-song-sung">
                                                <img
                                                    src="https://truyenplus.vn/media/book/Tận-Thế-Song-Sủng.jpg"
                                                    alt="Tận Thế Song Sủng"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/tan-the-song-sung" title="Tận Thế Song Sủng">
                                                        Tận Thế Song Sủng
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 433 chương
                                                </small>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="cover" href="/mong-nam-kha">
                                                <img
                                                    src="https://truyenplus.vn/media/book/mong-nam-kha.jpg"
                                                    alt="Mộng Nam Kha"
                                                />
                                            </a>
                                            <div className="info">
                                                <h3>
                                                    <a href="/mong-nam-kha" title="Mộng Nam Kha">
                                                        Mộng Nam Kha
                                                    </a>
                                                </h3>
                                                <small className="label-full">
                                                    <span>Full</span> 14 chương
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="loadpage">
                                <div>
                                    <a href="/the-loai/all" className="xem-them">
                                        XEM THÊM
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="onpage">
                            <div className={`onpagetext ${isExpanded ? 'expand' : ''}`}>
                                <p>
                                    <b>
                                        Web đọc truyện online hay và cập nhật mới nhất - Truyenplus.vn
                                    </b>
                                </p>
                                <p>
                                    Trang web dành cho những tín đồ mê đọc truyện online đêm khuya với
                                    các thể loại hot nhất hiện nay như là đọc truyện ngôn tình, đọc
                                    truyện ma, truyện tiên hiệp, kiếm hiệp. Tất cả được truyenplus.vn
                                    cập nhật thường xuyên từ các dịch giả truyện chuyên nghiệp và đăng
                                    tải hằng ngày.
                                </p>
                                <p>
                                    Bạn đang tìm kiếm một trang web đọc truyện mới nhất? Bạn không
                                    biết đọc truyện ở đâu? Nếu bạn đang loay hoay giữa hàng ngàn danh
                                    mục truyện, bạn vẫn không biết nên đọc truyện gì hay nhất?
                                </p>
                                <p>
                                    Nhưng đừng lo, đã có truyenplus.vn cùng bạn đồng hành bạn qua
                                    những bộ truyện full với hồi kết đẫm nước mắt, hay một cái kết
                                    viên mãn hài lòng. Đến với truyenplus.vn là đến với kho tàng
                                    truyện tranh khổng lồ, và không ngừng cập nhật những xu hướng
                                    truyện đọc mới nhất. Để xứng đáng một trang web đọc truyện miễn
                                    phí, giải trí hữu ích, thân thiện, nhanh nhất và đầy đủ nhất. Tất
                                    cả mang đến một trải nghiệm tuyệt vời nhất cho bạn đọc.
                                </p>
                                <p>
                                    Nếu bạn là người đam mê những câu truyện võ hiệp, đấu kiếm thì các
                                    bộ như “Kiếm động cửu thiên”, “Thế giới hoàn mỹ đồng”,…là những
                                    top truyện kiếm hiệp hay nhất. Hay những câu truyện ma như “Kết
                                    hôn âm dương”, “Hành tẩu âm dương” có làm bạn rùng mình, mất ngủ
                                    đêm khuya. Những cái kết đẫm nước mắt của bộ truyện “ngôn tình
                                    hoàn”, “ngôn tình ngược” sẽ làm bạn có suy nghĩ khác đi về tình
                                    yêu đôi lứa. Ngoài ra, truyenplus.vn còn tổng hợp những truyện
                                    tuổi thơ, truyện teen như Once peace, Doraemon,…để đây sẽ là trang
                                    web đọc truyện dành cho cả gia đình, và không giới hạn lứa tuổi.
                                </p>
                                <p>
                                Với phương châm “bạn đọc vui, chúng tôi vui” thì truyenplus.vn sẽ
                                    luôn phát triển và cập nhật những mẫu truyện hay và miễn phí mới
                                    nhất vì đọc giả thân yêu. Chúc bạn có những phút giây giải trí bên
                                    bộ truyện mình ưng ý.
                                </p>
                            </div>
                            {!isExpanded && (
                                <div className="smore">
                                    <a href="#" title="Xem thêm" className="btn" onClick={handleExpand}>
                                        Hiển thị thêm
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home