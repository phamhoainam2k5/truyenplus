import React, {useEffect, useState} from "react";
import axios from "axios";
import "./../list/List.css";
import {Link, useNavigate} from "react-router-dom";
import {Add, ArrowBack} from "@mui/icons-material";
import {Alert, Modal, Stack} from "@mui/material";
import ReactQuill from "react-quill";
import "./Create.css";
import 'react-quill/dist/quill.snow.css';
import striptags from "striptags";


function Create() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filePreview, setFilePreview] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);


    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert("Không phải ảnh đề nghị chọn lại");
            setFilePreview("");
            setFile(null);
            return;
        }
        setFile(selectedFile);
        setFilePreview(URL.createObjectURL(selectedFile));
    };
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'header', 'blockquote',
        'indent',
        'direction', 'align',
    ];

    const modules = {
        toolbar: [
            [{ 'font': [] }, { 'size': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            ['clean']
        ]
    };

    const handleCategoryChange = (categoryId) => {
        if (!selectedCategories.includes(categoryId)) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            const dataCategories = selectedCategories.filter(id => id !== categoryId)
            setSelectedCategories(dataCategories);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = () => {
            axios.get('http://localhost:8080/api/categories')
                .then(response => {
                    setCategories(response.data);
                })
                .catch(error => {
                    console.error('Lỗi rồi:', error);
                });
        };

        fetchCategories();
    }, []);

    const handleChangeDescription = (value) => {
        setDescription(value);
    };

    const convertToUppercase = (title) => {
        return title.replace(/(?:^|\s)\S/g, char => char.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const plainTextContent = striptags(title);
        const plainTextContents = striptags(description);
        if (plainTextContent.length < 5) {
            alert("Tiêu đề phải có ít nhất 5 ký tự");
            return;
        }
        if (plainTextContents.length < 30) {
            alert("Mô tả phải có ít nhất 30 ký tự");
            return;
        }
        if (selectedCategories.length === 0) {
            alert("Vui lòng chọn 1 danh mục");
            return;
        }

        const titleData = convertToUppercase(title);

        const data = {
            title: titleData,
            image: file,
            description: description,
            author: author,
            status: "New",
            categories: selectedCategories
        };

        axios.post("http://localhost:8080/api/stories", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setOpen(true);
                console.log(response.data);
                setTimeout(() => {
                    navigate("/list");
                }, 1000);
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert("Không được trùng tên truyện,hãy nhập lại tên khác !");
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
                                <Link to="/list">
                                    <div>
                                        <ArrowBack className="material-icons-sharp">add</ArrowBack>
                                        <p>Quay lại danh sách truyện</p>
                                    </div>
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-create-story">
                                    <div className="form-cover-title-author">
                                        <div className="form-cover-image">
                                            <h3>Chọn ảnh từ thiết bị của bạn:</h3>
                                            <div className="image-upload">
                                                <label htmlFor="file-input">
                                                    <div className="image-preview">
                                                        {filePreview ? (
                                                            <img src={filePreview} alt="Không có ảnh" width="200"
                                                                 height="200"/>
                                                        ) : (
                                                            <div className="image-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    width="50"
                                                                    height="50"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                </label>
                                                <input type="file" id="file-input" onChange={handleChange}
                                                       style={{display: 'none'}} required/>
                                            </div>
                                        </div>
                                        <div className="form-title-author">
                                            <div className="form-title-story">
                                                <h3>Tiêu đề:</h3>
                                                <input
                                                    type="text"
                                                    placeholder="Nhập tiêu đề"
                                                    value={title}
                                                    style={{width: '100%', padding: '10px'}}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-author-of-story">
                                                <h3>Tác giả:</h3>
                                                <input
                                                    type="text"
                                                    className="author"
                                                    placeholder="Nhập tên tác giả"
                                                    value={author}
                                                    style={{width: '100%', padding: '10px'}}
                                                    onChange={(e) => setAuthor(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-description">
                                        <h3>Mô tả:</h3>
                                        <ReactQuill value={description} onChange={handleChangeDescription}
                                                    modules={modules} formats={formats}/>
                                    </div>
                                    <div className="form-category">
                                        <h3>Thể loại:</h3>
                                        <div className="category-container">
                                            <div className="category-grid">
                                                {categories.map((category, index) => (
                                                    <div key={category.categoryId} className="category-item">
                                                        <input
                                                            type="checkbox"
                                                            id={category.categoryId}
                                                            value={category.categoryId}
                                                            defaultChecked={selectedCategories.includes(category.categoryId)}
                                                            onChange={() => handleCategoryChange(category.categoryId)}
                                                        />
                                                        <label
                                                            htmlFor={category.categoryId}>{category.categoryName}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" style={{
                                        padding: '10px',
                                        width: '100px',
                                        marginTop: '20px',
                                        background: 'var(--color-danger)',
                                        borderRadius: 'var(--border-radius-1)'
                                    }}>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Modal open={open} onClose={handleClose}>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="success">Thêm truyện thành công rồi</Alert>
                </Stack>
            </Modal>
        </>
    );
}

export default Create;
