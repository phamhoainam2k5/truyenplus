import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Add, ArrowBack} from "@mui/icons-material";
import {Alert, Modal, Stack} from "@mui/material";
import ReactQuill from "react-quill";
import striptags from "striptags";
import axios from "axios";
import "./../list/List.css";
import 'react-quill/dist/quill.snow.css';

function CreateChap() {
    const {storyId} = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [chapterNumber, setChapterNumber] = useState("");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

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
            ['bold', 'italic', 'underline'],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'align': []}],
        ]
    };

    const handleChangeContent = (value) => {
        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const currentContent = content;
        const currentTitle = title;

        // Loại bỏ các thẻ HTML chỉ để kiểm tra độ dài nội dung
        const plainTextContent = striptags(currentContent);
        const plainTextContents = striptags(currentTitle);

        // Kiểm tra độ dài của content và title
        if (plainTextContent.length < 30) {
            alert("Nội dung phải có ít nhất 30 ký tự");
            return;
        }
        if (plainTextContents.length < 5) {
            alert("Tiêu đề phải có ít nhất 5 ký tự");
            return;
        }
        // Dữ liệu chương để gửi đi
        const chapterData = {
            title: currentTitle,
            content: currentContent,
            chapterNumber: chapterNumber
        };

        // Gửi dữ liệu bằng axios
        axios.post(`http://localhost:8080/api/chapters/${storyId}`, chapterData)
            .then(response => {
                setOpen(true); // Mở modal thành công
                console.log(response.data); // Log dữ liệu phản hồi từ server
                setTimeout(() => {
                    navigate(`/chapters/${storyId}`); // Điều hướng sau khi thêm chương thành công
                }, 1000);
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message); // Hiển thị thông báo lỗi từ server
                } else {
                    alert('Lỗi không xác định.'); // Xử lý lỗi mặc định nếu không có thông tin chi tiết từ server
                }
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
                                            placeholder="Nhập tiêu đề" 
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)} 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-content-chapter">
                                    <h3>Nội dung:</h3>
                                    <div aria-required={true}></div>
                                    <ReactQuill
                                        placeholder="Nhập nội dung chương..."
                                        style={{ 
                                            height: '550px', 
                                            width: '610px',
                                        }}
                                        className="react-quill-editor"
                                        theme='snow'
                                        value={content}
                                        onChange={handleChangeContent}
                                        modules={modules}
                                        formats={formats}
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
                                        }}>
                                        Submit
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
            <Modal open={open} onClose={handleClose}>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="success">Thêm chương thành công rồi</Alert>
                </Stack>
            </Modal>

        </>
    );
}

export default CreateChap