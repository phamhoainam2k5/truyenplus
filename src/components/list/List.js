import "./List.css"
import {Add} from "@mui/icons-material";
import {Link, useLocation} from 'react-router-dom';
import { Pagination, PaginationItem, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import axios from 'axios';
function List() {
    const [stories, setStories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.message) {
            alert(location.state.message); // Hiển thị thông báo thành công
        }
    }, [location.state]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/stories');
            setStories(response.data);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    const deleteStory = async (storyId) => {
        if (window.confirm('Are you sure you want to delete this story?')) {
            try {
                await axios.delete(`http://localhost:8080/api/stories/${storyId}`);
                alert('Story deleted successfully!');
                // Gọi lại hàm fetchStories để cập nhật danh sách
                fetchStories();
            } catch (error) {
                console.error('Error deleting story:', error);
                alert('Failed to delete the story.');
            }
        }
    };
    return (
        <main className="single_pages">
            <section className="video_items flex">
                <div className="lefts">
                    <div className="left_content">
                        <div className="item add-product"style={{width:"30%"}}>
                            <Link to="/create">
                                <div>
                                    <Add className="material-icons-sharp">add</Add>
                                    <p>Add Video</p>
                                </div>
                            </Link>
                        </div>

                        <div className="recent-orders">

                            <table>
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên truyện</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th style={{display: "flex", justifyContent: "center"}}>
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {stories.map((story, index) => (
                                    <tr key={story.postId}>
                                        <td>{index + 1}</td>
                                        <td>{story.title}</td>
                                        <td>{story.author}</td>
                                        <td>{story.status}</td>
                                        <td style={{display: "flex"}}>
                                            <a href="">
                                                <i className="fa-solid fa-pen-to-square"/>
                                            </a>
                                            <a href="#" onClick={() => deleteStory(story.storyId)}>
                                                <i className="fa-solid fa-x"/>
                                            </a>
                                            <a href="">
                                                <i className="fa-solid fa-download"/>
                                            </a>
                                            <a href="">
                                                <i className="fa-solid fa-eye"/>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="pagination">
                            <Pagination
                                count={10}

                            />
                        </div>



                    </div>
                </div>
            </section>
        </main>

    )
}

export default List;