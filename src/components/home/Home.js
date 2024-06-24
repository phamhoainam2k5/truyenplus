import "./Home.css"
import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {Link} from "react-router-dom";
function Home() {
    const [stories, setStories] = useState([]);
    const [storiesStatus, setStoriesStatus] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/stories/status')
            .then(response => {
                setStoriesStatus(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy ra các truyện full:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/stories')
            .then(response => {
                setStories(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy ra các truyện:', error);
            });
    }, []);

    const handleExpand = (e) => {
        e.preventDefault();
        setIsExpanded(true);
    };

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true
    };
    return (
        <main>
            <div className="container">
                <div className="wrapper homepage">
                    <div className="main-wrapper">
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
                                        {stories.map((story, index) => (
                                            <div className="item" key={index}>
                                                <a className="cover" >
                                                    <img src={'http://localhost:8080/'+story.image} alt={story.title} />
                                                    <span  />
                                                    {/* <a className="cover">
                                                        <img src={`http://localhost:8080/video/${story.image}`}
                                                            alt={story.title}
                                                        />
                                                    <span/> */}
                                                </a>
                                                <div className="info">
                                                    <h3>
                                                        <Link to={`/story/${story.storyId}`}>
                                                            {story.title}
                                                        </Link>
                                                    </h3>
                                                    <a className="sts sts_1">
                                                        {story.totalChapters} Chương
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
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
                                    {storiesStatus.length > 0 ? (
                                        <Slider {...settings} className="listitems">
                                            {storiesStatus.map((story, index) => (
                                                <div className="item" key={index}>
                                                    <a className="cover" href={`/`}>
                                                        <img src={`http://localhost:8080/video/${story.image}`}
                                                             alt={story.title}/>
                                                    </a>
                                                    <div className="info">
                                                        <h3>
                                                            <a href={`/`} title={story.title}>
                                                                {story.title}
                                                            </a>
                                                        </h3>
                                                        <small className="label-full">
                                                            <span>Full</span> {story.totalChapters} chương
                                                        </small>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <p>Loading...</p>
                                    )}

                                </div>
                            </div>
                            <div id="loadpage">
                                <div>
                                    <a href="/the-loai/all" className="xem-them">XEM THÊM</a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="onpage">
                            {/*dungf toán tử 3 ngôi để kiếm tra điều kiện nếu như giá trị của isEx là đúng thì s thêm class"expand" vào còn k thì thôi*/}
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