import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./../list/List.css";
import {Add} from "@mui/icons-material";


function CreateChap() {
    const { storyId } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [chapterNumber, setChapterNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const chapterData = {
            title: title,
            content: content,
            chapterNumber: chapterNumber
        };

        axios.post(`http://localhost:8080/api/chapters/${storyId}`, chapterData)
            .then(response => {
                console.log(response.data);
                alert("Thêm chương thành công!");
                navigate(`/chapters/${storyId}`);
            })
            .catch(error => {
                console.error("Lỗi rôi :", error.response.data);
            });
    };

    return (
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="lefts">
                        <div className="left_content">
                            <div className="item add-product" style={{width: "30%"}}>
                                <Link to={`/chapters/${storyId}`}>
                                    <div>
                                        <Add className="material-icons-sharp">add</Add>
                                        <p>Quay về danh sách chương</p>
                                    </div>
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} >
                                <h3>Tiêu đề:</h3>
                                <input type="text" className="title" placeholder="Nhập tiêu đề" value={title}
                                       onChange={(e) => setTitle(e.target.value)} required/><br/><br/>

                                <h3>Nội dung:</h3>
                                <textarea id="content" rows="4" placeholder="Nhập nội dung" value={content}
                                          onChange={(e) => setContent(e.target.value)} required></textarea><br/><br/>

                                <h3>Số chương:</h3>
                                <input type="number" className="chapterNumber" placeholder="Nhập số chương"
                                       value={chapterNumber}
                                       onChange={(e) => setChapterNumber(e.target.value)} required/><br/><br/>

                                <button type="submit" style={{
                                    padding: '10px',
                                    width: '100px', background: 'var(--color-danger)',
                                    borderRadius: 'var(--border-radius-1)'
                                }}>Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CreateChap