import React, {useEffect, useState} from "react";
import axios from "axios";
import "./../list/List.css"
import {Link, useNavigate} from "react-router-dom";
import {Add} from "@mui/icons-material";

function Create() {
    const [file, setFile] = useState(null);
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


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', file);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('status', "New");
        formData.append('categories', selectedCategories.join(','));
        axios.post("http://localhost:8080/api/stories", formData, {
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
                            <div className="item add-product" style={{width: "30%"}}>
                                <Link to="/list">
                                    <div>
                                        <Add className="material-icons-sharp">add</Add>
                                        <p>Quay lại danh sách truyện</p>
                                    </div>
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit} encType="multipart/form-data">

                                <br/>
                                <h3>Chọn ảnh từ thiết bị của bạn:</h3>
                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <div className="image-preview">
                                            {filePreview ? (
                                                <img src={filePreview} alt="Preview" width="200" height="200"/>
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

                                    <input type="file" id="file-input" onChange={handleChange} style={{display: 'none'}}
                                           required/>
                                </div>

                                <br/>
                                <h3>Tiêu đề:</h3>
                                <input type="text" placeholder="Nhập tiêu đề" value={title} style={{
                                    width: '50%',
                                    padding: ' 10px'
                                }}
                                       onChange={(e) => setTitle(e.target.value)} required/><br/><br/>
                                <h3>Tác giả:</h3>
                                <input type="text" className="author" placeholder="Nhập tên tác giả" value={author} style={{
                                    width: '50%',
                                    padding: ' 10px'
                                }}
                                       onChange={(e) => setAuthor(e.target.value)} required/><br/><br/>
                                <h3>Mô tả:</h3>
                                <textarea id="description" rows="4" placeholder="Nhập mô tả" value={description}
                                          style={{
                                              width: '50%',
                                              padding: ' 10px'
                                          }}
                                          onChange={(e) => setDescription(e.target.value)}
                                          required></textarea><br/><br/>
                                <h3>Thể loại:</h3>
                                {categories.map(category => (
                                    <div key={category.categoryId}>
                                        <input
                                            type="checkbox"
                                            id={category.categoryId}
                                            value={category.categoryId}
                                            checked={selectedCategories.includes(category.categoryId)}
                                            onChange={handleCategoryChange}
                                        />
                                        <label
                                           >{category.categoryName}</label>
                                    </div>
                                ))}
                                <br/><br/>
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

export default Create;
