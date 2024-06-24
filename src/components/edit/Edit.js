import React, {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import axios from "axios";
import {Add, ArrowBack} from "@mui/icons-material";
import {Alert, Modal, Stack} from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./../list/List.css";
import "./../create/Create.css";
import striptags from "striptags";

function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [hasChapter, setHasChapter] = useState(false);
    const [status, setStatus] = useState("New");
    const [file, setFile] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const checkChapter = () => {
            axios.get(`http://localhost:8080/api/stories/chap/${id}`)
                .then(response => {
                    const hasChapters = response.data > 0;
                    setHasChapter(hasChapters);
                })
                .catch(error => {
                    console.error("Looi rùi hi hi:", error);
                });
        };
        checkChapter();
    }, []);

    useEffect(() => {
        const fetchStories = () => {
            axios.get(`http://localhost:8080/api/stories/${id}`)
                .then(response => {
                    const {title, author, description, categories, image, status} = response.data;
                    setTitle(title);
                    setAuthor(author);
                    setDescription(description);
                    setStatus(status);
                    setFileUrl(`http://localhost:8080/${image}`);
                    // setFileUrl(`http://localhost:8080/video/${image}`);
                    setFile(file);
                    const categoryIds = categories.map(category => category.categoryId);
                    setSelectedCategories(categoryIds);
                })
                .catch(error => {
                    console.error('Lỗi truyện:', error);
                });

            axios.get('http://localhost:8080/api/categories')
                .then(response => {
                    setCategories(response.data);
                    console.log(typeof response.data[0].categoryId)
                })
                .catch(error => {
                    console.error('Lỗi danh mục:', error);
                });
        };
        fetchStories();
    }, []);

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

    const handleChangeDescription = (value) => {
        setDescription(value);
    };

    console.log(description)

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert("Không phải ảnh đề nghị chọn lại");
            setFileUrl("");
            setFile("");
        }
        setFile(selectedFile);
        setFileUrl(URL.createObjectURL(e.target.files[0]));
    };

    const handleCategoryChange = (categoryId) => {
        console.log(categoryId);
        console.log(selectedCategories);
        if (!selectedCategories.includes(categoryId)) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            const dataCategories = selectedCategories.filter(id => id !== categoryId)
            setSelectedCategories(dataCategories);
        }
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
        if (selectedCategories.length == 0) {
            alert("Vui lòng chọn 1 danh mục ");
            return
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('status', status);
        formData.append('categories', selectedCategories);
        console.log(formData);
        if (file) {
            formData.append('image', file)
        }

        axios.put(`http://localhost:8080/api/stories/${id}`, formData, {
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
                alert("Không được trùng tên truyện,hãy nhập lại tên khác !")
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
                            <div>
                                <h1 style={{textAlign: 'center', color: "red"}}>
                                    SỬA TRUYỆN
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
                                                        {fileUrl ? (<img src={fileUrl} alt="Selected file" style={{
                                                            maxWidth: '100%',
                                                            height: '100%'
                                                        }}/>) : (
                                                            <div className="image-icon">
                                                                <svg
                                                                    xmlns="http:www.w3.org/2000/svg"
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
                                                    <input 
                                                        type="text" 
                                                        placeholder="Nhập tiêu đề" 
                                                        value={title} style={{ width: '50%',padding: ' 10px'}} 
                                                        onChange={(e) => setTitle(e.target.value)} 
                                                        required
                                                    /><br/><br/>
                                            </div>
                                            <div className="form-author-of-story">
                                                <h3>Tác giả:</h3>
                                                <input 
                                                    type="text" 
                                                    className="author" 
                                                    placeholder="Nhập tên tác giả" 
                                                    value={author} 
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
                                                    value={description}
                                                    onChange={handleChangeDescription}
                                                    modules={modules}
                                                    formats={formats}
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
                                                        defaultChecked={selectedCategories.includes(category.categoryId)}
                                                        onChange={() => handleCategoryChange(category.categoryId)}
                                                    />
                                                    <label htmlFor={category.categoryId}>{category.categoryName}</label>
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
            <Modal open={open} onClose={handleClose}>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="success">Sửa truyện thành công rồi</Alert>
                </Stack>
            </Modal>
        </>
    );
}

export default Edit;