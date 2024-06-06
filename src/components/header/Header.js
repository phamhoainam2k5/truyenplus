import "./Header.css"
function Header() {
    return (
        <header className="header">
            <div className="container container-header">
                <div className="header-top">
                    <div className="header-search">
                        <div className="searching">
                            <form name="frmsearch" action="/search">
                                <input
                                    id="search"
                                    autoComplete="off"
                                    placeholder="Nhập tên hoặc tác giả..."
                                    name="q"
                                />
                                <button type="submit">
                                    <i className="fa fa-search"/>
                                </button>
                            </form>
                            <div id="div--q"></div>
                        </div>
                    </div>
                    <div id="htop">
                        <ul>
                            <li className="register">
                                <a href="/account/register">
                                    <i className="fa fa-user"/> Đăng ký
                                </a>
                            </li>
                            <li className="login">
                                <a href="/account/login">
                                    <i className="fa fa-lock"/> Đăng nhập
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="wrapper header-wrap">
                    <div className="header-item-left">
                        <div className="top-logo">
                            <a href="/home" title="Truyện Plus - Đọc truyện online nhanh nhất">
                                <img
                                    src="https://truyenplus.vn/images/logov2.png"
                                    alt="Đọc truyện Online, Truyenplus.vn"
                                    title="Đọc truyện Online, Truyenplus.vn"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="header-item-center">
                        <div className="overlay"/>
                        <nav className="menu" id="menu">
                            <div className="menu-mobile-header">
                                <button type="button" className="menu-mobile-arrow">
                                    <i className="fa fa-angle-left"/>
                                </button>
                                <div className="menu-mobile-title"/>
                                <button type="button" className="menu-mobile-close">
                                    <i className="fa fa-close"/>
                                </button>
                            </div>
                            <ul className="menu-section">
                                <li className="menu-item-has-children">
                                    <a href="javascript:;" className="dropdown">
                                        DANH MỤC <i className="fa fa-angle-down"/>
                                    </a>
                                    <ul className="menu-subs menu-mega menu-column-3">
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-full"
                                                title="Danh sách Truyện Full"
                                            >
                                                Truyện Full
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/danh-sach/truyen-hot" title="Danh sách Truyện Hot">
                                                Truyện Hot
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-ngan"
                                                title="Danh sách Ngôn Tình Ngắn"
                                            >
                                                Ngôn Tình Ngắn
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-ngon-tinh-hay"
                                                title="Danh sách Ngôn Tình Hay"
                                            >
                                                Ngôn Tình Hay
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-18"
                                                title="Danh sách Ngôn Tình 18+"
                                            >
                                                Ngôn Tình 18+
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-hoan"
                                                title="Danh sách Ngôn Tình Hoàn"
                                            >
                                                Ngôn Tình Hoàn
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-nguoc"
                                                title="Danh sách Ngôn Tình Ngược"
                                            >
                                                Ngôn Tình Ngược
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-sung"
                                                title="Danh sách Ngôn Tình Sủng"
                                            >
                                                Ngôn Tình Sủng
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-ngon-tinh-hai-huoc"
                                                title="Danh sách Ngôn Tình Hài"
                                            >
                                                Ngôn Tình Hài
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/ngon-tinh-sac"
                                                title="Danh sách Ngôn Tình Sắc"
                                            >
                                                Ngôn Tình Sắc
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-dam-my-hay"
                                                title="Danh sách Đam Mỹ Hay"
                                            >
                                                Đam Mỹ Hay
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/danh-sach/dam-my-hai" title="Danh sách Đam Mỹ Hài">
                                                Đam Mỹ Hài
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/danh-sach/dam-my-h" title="Danh sách Đam Mỹ H">
                                                Đam Mỹ H
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-teen-hay"
                                                title="Danh sách Truyện Teen Hay"
                                            >
                                                Truyện Teen Hay
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-kiem-hiep-hay"
                                                title="Danh sách Kiếm Hiệp Hay"
                                            >
                                                Kiếm Hiệp Hay
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/danh-sach/truyen-tien-hiep-hay"
                                                title="Danh sách Tiên Hiệp Hay"
                                            >
                                                Tiên Hiệp Hay
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:;" className="dropdown">
                                        THỂ LOẠI <i className="fa fa-angle-down"/>
                                    </a>
                                    <ul className="menu-subs menu-mega menu-column-3">
                                        <li className="menu-item">
                                            <a href="/the-loai/tien-hiep">Tiên Hiệp</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/kiem-hiep">Kiếm Hiệp</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/ngon-tinh">Ngôn Tình</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/do-thi">Đô Thị</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/sung">Sủng</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/quan-truong">Quan Trường</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/vong-du">Võng Du</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/khoa-huyen">Khoa Huyễn</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/huyen-huyen">Huyền Huyễn</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/di-gioi">Dị Giới</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/di-gioi">Dị Giới</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/di-nang">Dị Năng</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/quan-su">Quân Sự</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/lich-su">Lịch Sử</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/xuyen-khong">Xuyên Không</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/cung-dau">Cung Đấu</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/nu-cuong">Nữ Cường</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/gia-dau">Gia Đấu</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/dong-phuong">Đông Phương</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/dam-my">Đam Mỹ</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/dam-my">Đam Mỹ</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/bach-hop">Bách Hợp</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/mat-the">Mạt Thế</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/truyen-teen">Truyện Teen</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/nu-phu">Nữ Phụ</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/doan-van">Đoản Văn</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/sac">Sắc</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/nguoc">Ngược</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/trong-sinh">Trọng Sinh</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/the-loai/khac">Khác</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/the-loai/ngon-tinh">NGÔN TÌNH</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/blog">BLOG </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/list">
                                        NHIỆM VỤ <span className="label-menu">Free</span>
                                    </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="javascript:;" className="dropdown">
                                        TÀI KHOẢN <i className="fa fa-angle-down"/>
                                    </a>
                                    <ul className="menu-subs menu-column-1">
                                        <li className="menu-item">
                                            <a href="/account/register">Đăng ký</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/account/login">Đăng nhập</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-item-right">
                        <a href="#" className="menu-icon">
                            <i className="ion ion-md-search"/>
                        </a>
                        <a href="#" className="menu-icon">
                            <i className="ion ion-md-heart"/>
                        </a>
                        <a href="#" className="menu-icon">
                            <i className="ion ion-md-cart"/>
                        </a>
                        <button type="button" className="menu-mobile-trigger">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;