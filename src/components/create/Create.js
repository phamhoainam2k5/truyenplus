import React, {useEffect, useState} from "react";
import ReactQuill from 'react-quill';
import {Link, useNavigate} from "react-router-dom";
import {ArrowBack, Bolt} from "@mui/icons-material";
import axios from "axios";
import "./../list/List.css"
import "./Create.css"
import 'react-quill/dist/quill.snow.css';

function Create() {
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filePreview, setFilePreview] = useState("");

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFilePreview(URL.createObjectURL(selectedFile));
    }

    const handleCategoryChange = (e) => {
        const categoryId = parseInt(e.target.value, 10);
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        }

    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            title: title,
            image: file,
            description: description,
            author: author,
            status: "New",
            categories: selectedCategories
        }
        
        axios.post("http://localhost:8080/api/stories", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            alert("Thêm thành công!");
            navigate("/list");
        })
        .catch(error => {
            console.error("Lỗi:", error.response.data);
        });
    }

    return (
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="lefts">
                        <div className="left_content">
                            <div>
                                <h1 style={{textAlign: 'center', color: "red"}}>
                                    THÊM TRUYỆN VÀO DANH SÁCH
                                </h1>
                            </div>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="form-create-story">
                                    <div className="infor-basic">
                                        <div className="cover-image">
                                            <div className="image-upload">
                                                <h3>Ảnh bìa truyện</h3>
                                                <label htmlFor="file-input">
                                                    <div className="image-preview">
                                                        {filePreview ? (
                                                            <img src={filePreview} alt="Preview"/>
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
                                                <input type="file" id="file-input" onChange={handleChange} style={{display: 'none'}} required/>
                                            </div>
                                        </div>
                                        <div className="infor">
                                            <div className="form-title-story">
                                            <h3>Tiêu đề:</h3>
                                                <input type="text" placeholder="Nhập tiêu đề" value={title} style={{ width: '50%',padding: ' 10px'}} onChange={(e) => setTitle(e.target.value)} required/><br/><br/>
                                            </div>
                                            <div className="form-author-of-story">
                                                <h3>Tác giả:</h3>
                                                <input type="text" className="author" placeholder="Nhập tên tác giả" value={author} 
                                                    style={{
                                                        width: '50%',
                                                        padding: ' 10px'
                                                    }}
                                                    onChange={(e) => setAuthor(e.target.value)} required
                                                />
                                            </div>
                                            <div className="form-description">
                                                <h3>Mô tả:</h3>
                                                <ReactQuill
                                                    style={{ 
                                                        height: '170px', 
                                                        width: '500px',
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
                                        </div>
                                    </div>
                                    <div className="form-category">
                                        <h3>Thể loại:</h3>
                                        <div class="category-container">
                                            {categories.map(category => (
                                                <div key={category.categoryId} className="category">
                                                    <input
                                                        type="checkbox"
                                                        id={category.categoryId}
                                                        value={category.categoryId}
                                                        checked={selectedCategories.includes(category.categoryId)}
                                                        onChange={handleCategoryChange}
                                                    />
                                                    <label>{category.categoryName}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', marginTop: '15px'}}>
                                        <button type="submit" 
                                            style={{
                                                fontWeight: "bold",
                                                padding: '10px',
                                                width: '100px',
                                                background: 'red',
                                                borderRadius: '5px'
                                            }}
                                        >
                                            Submit
                                        </button>
                                        <div className="item add-product" style={{width: "30%"}}>
                                            <Link to="/list" style={{color: "black"}}>
                                                <div>
                                                    <ArrowBack className="material-icons-sharp">add</ArrowBack>
                                                    <p>Quay lại danh sách truyện</p>
                                                </div>
                                            </Link>
                                        </div>
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

export default Create;
