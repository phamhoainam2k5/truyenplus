import React, {useState} from "react";
import ReactQuill from 'react-quill';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./../list/List.css";
import {ArrowBack} from "@mui/icons-material";
import 'react-quill/dist/quill.snow.css';

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
                <section className="video_items fl{ex">
                    <div className="lefts" style={{width: '650px'}}>
                        <div className="left_content">
                            <form onSubmit={handleSubmit} >
                                <div className="form-infor-chapter">
                                    <div className="number-chapters">
                                        <h3>Số chương:</h3>
                                        <input 
                                            type="number" 
                                            className="chapterNumber" 
                                            placeholder="Nhập số chương"
                                            value={chapterNumber}
                                            onChange={(e) => setChapterNumber(e.target.value)} required
                                        />
                                    </div>
                                    <div className="title-chapter">
                                        <h3>Tiêu đề:</h3>
                                        <input 
                                            type="text" 
                                            // style={{
                                                
                                            // }} 
                                            placeholder="Nhập tiêu đề" 
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} required
                                        />
                                    </div>
                                </div>
                                <div className="form-content-chapter">
                                    <h3>Nội dung:</h3>
                                    <ReactQuill
                                        placeholder="Nhập nội dung chương..."
                                        style={{ 
                                            height: '550px', 
                                            width: '610px',
                                        }}
                                        className="react-quill-editor"
                                        theme='snow'
                                        modules={{
                                            toolbar: [
                                                [{ 'font': [] }],
                                                ['bold', 'italic', 'underline'],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                [{ 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }]
                                            ]
                                        }}
                                    />
                                </div>
                                <div className="btn" style={{display: 'flex', marginTop: '55px'}}>
                                    <div>
                                        <button type="submit" style={{
                                            fontWeight: "bold",
                                            padding: '10px',
                                            width: '100px',
                                            background: 'red',
                                            borderRadius: '5px'
                                        }}>Submit
                                        </button>
                                    </div>
                                    <div className="item add-product" style={{width: "30%"}}>
                                        <Link to={`/chapters/${storyId}`} style={{color: "black"}}>
                                            <div>
                                                <ArrowBack className="material-icons-sharp">add</ArrowBack>
                                                <p>Quay về danh sách chương</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CreateChap