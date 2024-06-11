import "./List.css";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import {Pagination, Tooltip} from "@mui/material";

function List() {
    const [stories, setStories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [storiesPerPage] = useState(3);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = () => {
        axios.get("http://localhost:8080/api/stories")
            .then(response => {
                setStories(response.data);
            })
            .catch(error => {
                console.error("Lấy ra danh sách truyện:", error);
            });
    };

    const deleteStory = (storyId) => {
        if (window.confirm("Bạn có muốn xoá truyện không?")) {
            axios.delete(`http://localhost:8080/api/stories/${storyId}`)
                .then(() => {
                    alert("Xoá truyện thành công hi hi!");
                    fetchStories();
                })
                .catch(error => {
                    console.error("Lỗi xoá truyện k đc", error);
                    alert("Lỗi rùi hi hi.");
                });
        }
    };

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <main className="single_pages">
            <div className="lefts">
                <div className="left_content">
                    <div className="item add-product" style={{width: "30%"}}>
                        <Link to="/create">
                            <div>
                                <Add className="material-icons-sharp"/>
                                <p>Thêm truyện</p>
                            </div>
                        </Link>
                    </div>

                    <div className="content-wrapper">
                        <div className="recent-orders">
                            <table>
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên truyện</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th>Tổng số chương</th>
                                    <th style={{display: "flex", justifyContent: "center"}}>
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {currentStories.map((story, index) => (
                                    <tr key={story.storyId}>
                                        <td>{index + 1}</td>
                                        <td>{story.title}</td>
                                        <td>{story.author}</td>
                                        <td>{story.status}</td>
                                        <td>{story.totalChapters}</td>
                                        <td style={{display: "flex"}}>
                                            <Tooltip title="Sửa truyện">
                                                <Link to={`/edit/${story.storyId}`}>
                                                    <i className="fa-solid fa-pen-to-square"/>
                                                </Link>
                                            </Tooltip>
                                            <a
                                                href="#"
                                                onClick={() => deleteStory(story.storyId)}
                                            >
                                                <Tooltip title="Xoá truyện">
                                                    <i className="fa-solid fa-x"/>
                                                </Tooltip>
                                            </a>
                                            <Tooltip title="Xem chương">
                                                <Link to={`/chapters/${story.storyId}`}>
                                                    <i className="fa-solid fa-list"></i>
                                                </Link>
                                            </Tooltip>

                                                <Tooltip title="Xem truyện">
                                                    <Link to={`/story/${story.storyId}`}>
                                                    <i className="fa-solid fa-eye"/>
                                                </Link>
                                                </Tooltip>

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pagination">
                <Pagination
                    // hiển thị số lượng trang tính bằng cách lấy tổng lượng truyện trong mảng chia cho tổng lượng truyện hiển thị ở mỗi trang
                    count={Math.ceil(stories.length / storiesPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </main>

    );
}

export default List;
