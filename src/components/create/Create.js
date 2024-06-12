import React, {useEffect, useState} from "react";
import axios from "axios";
import "./../list/List.css"
import {Link, useNavigate} from "react-router-dom";
import {Add} from "@mui/icons-material";
import {Alert, Modal, Stack} from "@mui/material";

function Create() {

    const [file, setFile] = useState("");
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
            setFile("");
        }
        setFile(selectedFile);
        setFilePreview(URL.createObjectURL(selectedFile));

    }


    const handleCategoryChange = (categoryId) => {

        console.log(categoryId);
        console.log(selectedCategories);
        if (!selectedCategories.includes(categoryId)) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            const dataCategories=selectedCategories.filter(id => id !== categoryId)
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


    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length<10){
            alert("Tiêu đề phải có ít nhất 10 ký tự");
            return;
        }
        if(description.length < 30){
            alert("Mô tả phải có ít nhất 10 ký tự");
            return;
        }
        if (selectedCategories.length == 0) {
            alert("Vui lòng chọn 1 danh mục ");
            return
        }

        const data = {
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
                setOpen(true)
                console.log(response.data);


                setTimeout(() => {
                    navigate("/list");
                }, 1000);
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
                                                <img src={filePreview} alt="Không có ảnh" width="200" height="200"/>
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
                                <input type="text" className="author" placeholder="Nhập tên tác giả" value={author}
                                       style={{
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

                                            defaultChecked={selectedCategories.includes(category.categoryId)}
                                            onChange={()=>{handleCategoryChange(category.categoryId)}}
                                        />
                                        <label htmlFor={category.categoryId}>{category.categoryName}</label>
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
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="success">
                        Thêm truyện thành công rồi
                    </Alert>

                </Stack>

            </Modal>
        </>
    );
}

export default Create;
