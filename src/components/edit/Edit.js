import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Add } from "@mui/icons-material";
import {Alert, Modal, Stack} from "@mui/material";

function Edit() {
    const { id } = useParams();
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
    const[open,setOpen]=useState(false);

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
                    const { title, author, description, categories, image, status } = response.data;
                    setTitle(title);
                    setAuthor(author);
                    setDescription(description);
                    setStatus(status);
                    setFileUrl(`http://localhost:8080/video/${image}`);
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


    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFileUrl(URL.createObjectURL(e.target.files[0]));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('status', status);
        formData.append('categories', selectedCategories);
console.log(formData);
        if(file){
            formData.append('image',file)

        }

        axios.put(`http://localhost:8080/api/stories/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
              setOpen(true)
                navigate("/list");
            })
            .catch(error => {
                console.error("Lỗi khi cập nhật truyện:", error);
            });
    };

    return (
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="lefts">
                        <div className="left_content">
                            <div className="item add-product" style={{ width: "30%" }}>
                                <Link to="/list">
                                    <div>
                                        <Add className="material-icons-sharp">add</Add>
                                        <p>Quay lại danh sách truyện</p>
                                    </div>
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit} noValidate encType="multipart/form-data"
                                  className="form-container">
                                <br/>  <br/>
                                <h3>Chọn ảnh :</h3>
                                <div className="image-upload">
                                    <label htmlFor="file-input" className="image-preview">
                                        {fileUrl ? <img src={fileUrl} alt="Selected file" style={{
                                                maxWidth: '100%',
                                                height: '100%'
                                            }}/> :
                                            <div className="image-icon">📷</div>}
                                    </label>
                                    <input type="file" id="file-input" onChange={handleChange} accept="image/*"/>
                                </div>
                                <br/> <br/>
                                <h3>Tiêu đề:</h3>
                                <input type="text" className="title" style={{
                                    width: '50%',
                                    padding: ' 10px'
                                }} placeholder="Nhập tiêu đề" value={title}
                                       onChange={(e) => setTitle(e.target.value)} required/>
                                <br/> <br/>
                                <h3>Tác giả:</h3>
                                <input type="text" className="author" style={{
                                    width: '50%',
                                    padding: ' 10px'
                                }} placeholder="Nhập tên tác giả" value={author}
                                       onChange={(e) => setAuthor(e.target.value)} required/>
                                <br/>     <br/>
                                <h3>Mô tả:</h3>
                                <textarea id="description" style={{
                                    width: '50%',
                                    padding: ' 10px'
                                }} rows="4" placeholder="Nhập mô tả" value={description}
                                          onChange={(e) => setDescription(e.target.value)} required></textarea>
                                <br/> <br/>
                                <h3>Thể loại:</h3>
                                {categories.map(category => (
                                    <div key={category.categoryId}>
                                        <input type="checkbox" id={category.categoryId}

                                               defaultChecked={selectedCategories.includes(category.categoryId)}
                                               onChange={()=>{handleCategoryChange(category.categoryId)}}/>
                                        <label htmlFor={category.categoryId}>{category.categoryName}</label>
                                    </div>
                                ))}

                                {hasChapter && (
                                    <div>
                                        <h3>Trạng thái</h3>

                                        <input type="radio" id="update" name="status" value="Update"
                                               checked={status === "Update"}
                                               onChange={(e) => setStatus(e.target.value)}/>
                                        <label htmlFor="update">Update</label>
                                        <input type="radio" id="full" name="status" value="Full"
                                               checked={status === "Full"} onChange={(e) => setStatus(e.target.value)}/>
                                        <label htmlFor="full">Full</label>
                                    </div>
                                )}

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
                <Modal
                    open={open}
                    onClose={handleClose}

                >
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity="success">
                            This is a filled success Alert.
                        </Alert>

                    </Stack>

                </Modal>
            </main>
        </>
    );
}

export default Edit;
