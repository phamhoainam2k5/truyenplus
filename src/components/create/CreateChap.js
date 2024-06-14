import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./../list/List.css";
import {Add} from "@mui/icons-material";
import ReactQuill from "react-quill";

import 'react-quill/dist/quill.snow.css';

function CreateChap() {
    const {storyId} = useParams();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 30) {
            alert("Nội dung phải có ít nhất 30 ký tự");
            return;
        }
        if (title.length < 5) {
            alert("Tiêu đề phải có ít nhất 5 ký tự");
            return;
        }

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
                if (error.response && error.response.status === 400) {
                    alert("Không được trùng số chương,hãy nhập lại  !")
                } else {
                    console.error("Lỗi:", error);
                }
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

                            <form onSubmit={handleSubmit}>
                                <h3>Tiêu đề:</h3>
                                <input type="text" className="title" placeholder="Nhập tiêu đề" value={title}
                                       onChange={(e) => setTitle(e.target.value)} required/><br/><br/>

                                <h3>Nội dung:</h3>
                                <div aria-required={true}></div>
                                <ReactQuill
                                    value={content}
                                    onChange={handleChangeContent}
                                    modules={modules}
                                    formats={formats}

                                />
                                <br/>
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