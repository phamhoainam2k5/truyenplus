import "./Story.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
function Story() {
    const { storyId } = useParams();
    const [chapters, setChapters] = useState([]);
    const [story, setStory] = useState(null);

    useEffect(() => {
        const fetchStoryInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/stories/${storyId}`);
                setStory(response.data);

            } catch (error) {
                console.error('Error fetching story info:', error);
            }
        };

        fetchStoryInfo();
    }, []);
    const fetchChapters = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/chapters/story/${storyId}`);
            setChapters(response.data);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };
    useEffect(() => {
        fetchChapters();
    }, []);


    return (
        <main>

            <div className="container">
                <div className="wrapper">
                    <div className="main-wrapper">
                        <div className="leftCol" itemScope="" itemType="http://schema.org/Book">
                            <div className="book-info-top">
                                <div className="book-info-pic">
                                    <img src={'http://localhost:8080/video/' + story.image} alt={story.title}/>

                                </div>
                                <ul className="book-info-text">
                                    <li>
                                        <h1 itemProp="name">{story.title}</h1>
                                    </li>

                                    <li className="li--genres">
                                        Thể loại :{" "}
                                        {story.categories.map((category, index) => (
                                            <span key={category.categoryId}>
        <a

        >
          {category.categoryName}
        </a>
                                                {index !== story.categories.length - 1 && ", "}
      </span>
                                        ))}
                                    </li>
                                    <li>Tác giả : {story.author}</li>
                                    <li>Số chương : {story.totalChapters}</li>
                                    <li>
                                        Trạng thái :
                                        <span className="label-status label-updating"> {story.status}</span>
                                    </li>

                                    <li>Cập nhật cuối: 6/10/2024</li>


                                </ul>
                            </div>

                            <div id="gioithieu">
                                <h2>Giới thiệu nội dung {story.title}: </h2>
                                <div itemProp="description">
                                    <p>

                                        {story.description}
                                    </p>
                                </div>
                            </div>
                            <div style={{clear: "both"}}/>

                            <div style={{clear: "both"}}/>
                            <div id="chapter" className="chapter">
                                <div className="book-info-chapter">
                                    <div className="row title-list-chapter">
                                        <span>Danh sách chương</span>
                                    </div>
                                    <div id="chapter-list">
                                        <div className="chapter-list">
                                            <div className="row">
                                                {chapters.map((chapter, index) => (
                                                    <div className="col-md-6 col-sm-12" key={index}>
              <span>
                <Link to={`/chapter/${story.storyId}/${chapter.chapterId}`}>
                  {chapter.title}
                </Link>
              </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loading-div" style={{display: "none"}}>
                                    Loading…
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Story