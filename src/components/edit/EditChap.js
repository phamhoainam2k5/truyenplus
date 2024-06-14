import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Add} from "@mui/icons-material";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';

function EditChap() {
    const {storyId, chapterId} = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [chapterNumber, setChapterNumber] = useState("");
    const navigate = useNavigate();
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',


        'header', 'blockquote',
        'indent',
        'direction', 'align',

    ];

    const modules = {
        toolbar: [
            [{'font': []}, {'size': []}],
            ['bold', 'italic', 'underline', 'strike'],


            [{'header': '1'}, {'header': '2'}, 'blockquote'],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'direction': 'rtl'}],
            [{'align': []}],

            ['clean']
        ]
    };
    const handleChangeContent = (value) => {
        setContent(value);
    };
    useEffect(() => {

        axios.get(`http://localhost:8080/api/chapters/${chapterId}`)
            .then(response => {
                const chapterData = response.data;
                setTitle(chapterData.title);
                setContent(chapterData.content);
                setChapterNumber(chapterData.chapterNumber);
            })
            .catch(error => {
                console.error("Lỗi rùi hu hu:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedChapterData = {
            title: title,
            content: content,

        };

        axios.put(`http://localhost:8080/api/chapters/${chapterId}`, updatedChapterData)
            .then(response => {
                console.log(response.data);
                alert("Chương đã được cập nhật thành công!");
                navigate(`/chapters/${storyId}`);
            })
            .catch(error => {
                console.error("Lỗi khi cập nhật chương:", error.response.data);
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
                                        <Add className="material-icons-sharp"/>
                                        <p>Quay về danh sách chương</p>
                                    </div>
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <h3>Tiêu đề:</h3>
                                <input
                                    type="text"
                                    className="title"
                                    placeholder="Nhập tiêu đề"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                                <br/>
                                <br/>

                                <h3>Nội dung:</h3>
                                <ReactQuill
                                    value={content}
                                    onChange={handleChangeContent}
                                    modules={modules}
                                    formats={formats}
                                />
                                <br/>
                                <br/>

                                <h3>Số chương:</h3>
                                <input
                                    type="number"
                                    className="chapterNumber"
                                    readOnly={true}
                                    value={chapterNumber}
                                    onChange={(e) => setChapterNumber(e.target.value)}
                                    required
                                />
                                <br/>
                                <br/>

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

export default EditChap;