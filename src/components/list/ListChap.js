import {Link, useParams} from "react-router-dom";
import {Add} from "@mui/icons-material";
import axios from "axios";
import {useEffect, useState} from "react";
import {Tooltip} from "@mui/material";

function ListChap() {
    const {storyId} = useParams();
    const [chapters, setChapters] = useState([]);


    const fetchChapters = () => {
        axios.get(`http://localhost:8080/api/chapters/story/${storyId}`)
            .then(response => {
                setChapters(response.data);
            })
            .catch(error => {
                console.error('Lỗi rồi:', error);
            });
    };

    useEffect(() => {
        fetchChapters();
    }, []);
    const deleteChapters = (chapterId) => {
        if (window.confirm('Bạn có chắc muốn xoá chương không?')) {
            axios.delete(`http://localhost:8080/api/chapters/${chapterId}`)
                .then(() => {
                    alert('Xoá chương thành công!');
                    fetchChapters();
                })
                .catch(error => {
                    console.error('Lỗi khi xoá chương:', error);
                    alert('Xin lỗi, có lỗi xảy ra.');
                });
        }
    };

    return (
        <main className="single_pages">
            <div className="lefts">
                <div className="left_content">
                    <div className="item add-product" style={{width: "30%"}}>
                        <Link to={`/create/${storyId}`}>
                            <div>
                                <Add className="material-icons-sharp">add</Add>
                                <p>Thêm chap</p>
                            </div>
                        </Link>
                    </div>
                    <div className="item add-product" style={{width: "30%"}}>
                        <Link to="/list">
                            <div>
                                <Add className="material-icons-sharp">add</Add>
                                <p>Quay về danh sách truyện</p>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <div className="recent-orders">
                            <table>
                                <thead>
                                <tr>
                                    <th>Số chương</th>
                                    <th>Tên chương</th>
                                    <th>Tên truyện</th>
                                    <th style={{display: "flex", justifyContent: "center"}}>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {chapters.map((chap, index) => (
                                    <tr key={chap.chapterId}>
                                        <td>{chap.chapterNumber}</td>
                                        <td>{chap.title}</td>
                                        <td>{chap.story.title}</td>
                                        <td style={{display: "flex"}}>
                                            <Tooltip title="Sửa chương">
                                                <Link to={`/editChapter/${chap.story.storyId}/${chap.chapterId}`}>
                                                    <i className="fa-solid fa-pen-to-square"/>
                                                </Link>
                                            </Tooltip>
                                            <a href="#" onClick={() => deleteChapters(chap.chapterId)}>
                                                <Tooltip title="Xoá chương">
                                                    <i className="fa-solid fa-x"/>
                                                </Tooltip>
                                            </a>
                                            <Tooltip title="Xem chương">
                                                <Link to={`/chapter/${chap.story.storyId}/${chap.chapterId}`}>
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
        </main>
    );
}

export default ListChap;
