import "./Header.css"
import {useEffect, useState} from "react";
import axios from "axios";
function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Lôi không lấy được list danh mục:', error);
            });
    }, []);
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
                                    <a href=" " className="dropdown">
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
                                    <a href="" className="dropdown">
                                        THỂ LOẠI <i className="fa fa-angle-down"/>
                                    </a>
                                    <ul className="menu-subs menu-mega menu-column-3">
                                        {categories.map((category) => (
                                        <li className="menu-item">
                                            <a href="/the-loai/tien-hiep">{category.categoryName}</a>
                                        </li>
                                        ))}
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
                                        NHIỆM VỤ
                                    </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="" className="dropdown">
                                        TÀI KHOẢN <i className="fa fa-angle-down"/>
                                    </a>
                                    <ul className="menu-subs menu-column-1">
                                        <li className="menu-item">
                                            <a href="/list">Quản lý hệ thống</a>
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