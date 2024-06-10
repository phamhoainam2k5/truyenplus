import {Link, useParams} from "react-router-dom";
import {Add} from "@mui/icons-material";
import {Pagination, Tooltip} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";


function ListChap() {
    const { storyId } = useParams();
    const [chapters, setChapters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [chaptersPerPage] = useState(2);
    const indexOfLastChapter = currentPage * chaptersPerPage;
    const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
    const currentChapters = chapters.slice(indexOfFirstChapter, indexOfLastChapter);
    useEffect(() => {
        fetchChapters();
    }, []);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const fetchChapters = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/chapters/story/${storyId}`);
            setChapters(response.data);
        } catch (error) {
            console.error('Lỗi rồi:', error);
        }
    };
    const deleteChapters = async (chapterId) => {
        if (window.confirm('Bạn có chắc muốn xoá chương không?')) {
            try {
                await axios.delete(`http://localhost:8080/api/chapters/${chapterId}`);
                alert('Xoá chương thành cng!');
                fetchChapters();
            } catch (error) {
                console.error('Lỗi khi xoá chương:', error);
                alert('Sorry,lỗi rồi hu hu');
            }
        }
    };
    const renderChapters = currentChapters.map((chap, index) => (
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
    ));

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
                    {chapters.length > 0 ? (
                        <div>
                            <div className="recent-orders">

                                <table>
                                    <thead>
                                    <tr>
                                        <th>Số chương</th>
                                        <th>Tên chương</th>
                                        <th>Tên truyện</th>


                                        <th style={{display: "flex", justifyContent: "center"}}>
                                            Action
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {renderChapters}
                                    </tbody>
                                </table>

                            </div>


                        </div>

                    ) : (
                        <p>Không có chương nào được tìm thấy.</p>
                    )}
                </div>
            </div>
            <div className="pagination">
                <Pagination
                    count={Math.ceil(chapters.length / chaptersPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </main>
    )
}

export default ListChap