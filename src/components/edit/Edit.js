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
//                     setFileUrl(`http://localhost:8080/video/${image}`);
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
            ['bold', 'italic', 'underline', 'strike'],

            [{'header': '1'}, {'header': '2'}, 'blockquote'],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'direction': 'rtl'}],
            [{'align': []}],

            ['clean']
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
                            <div className="item add-product" style={{width: "30%"}}>
                                <Link to="/list">
                                    <div>
                                        <ArrowBack className="material-icons-sharp">add</ArrowBack>
                                        <p>Quay lại danh sách truyện</p>
                                    </div>
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit} noValidate encType="multipart/form-data"
// <<<<<<< interface-text-editor
//                                   className="form-container">
//                                 <br/>  <br/>
//                                 <h3>Chọn ảnh :</h3>
//                                 <div className="image-upload">
//                                     <label htmlFor="file-input" className="image-preview">
//                                         {fileUrl ? <img src={fileUrl} alt="Selected file" style={{
//                                                 maxWidth: '100%',
//                                                 height: '100%'
//                                             }}/> :
//                                             <div className="image-icon">📷</div>}
//                                     </label>
//                                     <input type="file" id="file-input" onChange={handleChange} accept="image/*"/>
//                                 </div>
//                                 <br/> <br/>
//                                 <h3>Tiêu đề:</h3>
//                                 <input type="text" className="title" style={{
//                                     width: '50%',
//                                     padding: ' 10px'
//                                 }} placeholder="Nhập tiêu đề" value={title}
//                                        onChange={(e) => setTitle(e.target.value)} required/>
//                                 <br/> <br/>
//                                 <h3>Tác giả:</h3>
//                                 <input type="text" className="author" style={{
//                                     width: '50%',
//                                     padding: ' 10px'
//                                 }} placeholder="Nhập tên tác giả" value={author}
//                                        onChange={(e) => setAuthor(e.target.value)} required/>
//                                 <br/>     <br/>
//                                 <h3>Mô tả:</h3>
//                                 {/* <textarea id="description" style={{
//                                     width: '50%',
//                                     padding: ' 10px'
//                                 }} rows="4" placeholder="Nhập mô tả" value={description}
//                                           onChange={(e) => setDescription(e.target.value)} required></textarea> */}
//                                 <ReactQuill 
//                                             value={description}
//                                             onChange={handleChangeDescription}
//                                 />
//                                 <br/> <br/>
//                                 <h3>Thể loại:</h3>
//                                 {categories.map(category => (
//                                     <div key={category.categoryId}>
//                                         <input type="checkbox" id={category.categoryId}
//                                                value={category.categoryId}
//                                                checked={selectedCategories.includes(category.categoryId)}
//                                                onChange={handleCategoryChange}/>
//                                         <label
//                                           >{category.categoryName}</label>
// =======
//                             >
//                                 <div className="form-create-story">
//                                     <div className="form-cover-image">

//                                         <h3>Chọn ảnh từ thiết bị của bạn:</h3>
//                                         <div className="image-upload">
//                                             <label htmlFor="file-input">
//                                                 <div className="image-preview">
//                                                     {fileUrl ? (<img src={fileUrl} alt="Selected file" style={{
//                                                         maxWidth: '100%',
//                                                         height: '100%'
//                                                     }}/>) : (
//                                                         <div className="image-icon">
//                                                             <svg
//                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                 fill="none"
//                                                                 viewBox="0 0 24 24"
//                                                                 stroke="currentColor"
//                                                                 width="50"
//                                                                 height="50"
//                                                             >
//                                                                 <path
//                                                                     strokeLinecap="round"
//                                                                     strokeLinejoin="round"
//                                                                     strokeWidth={2}
//                                                                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                                                                 />
//                                                             </svg>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             </label>
//                                             <input type="file" id="file-input" onChange={handleChange}
//                                                    style={{display: 'none'}}
//                                                    required/>
//                                         </div>
//                                     </div>
//                                     <div className="form-title-story">
//                                         <h3>Tiêu đề:</h3>
//                                         <input type="text" className="title" style={{
//                                             width: '100%',
//                                             padding: ' 10px'
//                                         }} placeholder="Nhập tiêu đề" value={title}
//                                                onChange={(e) => setTitle(e.target.value)} required/>
// >>>>>>> interface
                                    </div>
                                    <div className="form-author-of-story">
                                        <h3>Tác giả:</h3>
                                        <input type="text" className="author" style={{
                                            width: '100%',
                                            padding: ' 10px'
                                        }} placeholder="Nhập tên tác giả" value={author}
                                               onChange={(e) => setAuthor(e.target.value)} required/>
                                    </div>
                                    <div className="form-description">
                                        <h3>Mô tả:</h3>
                                        <ReactQuill
                                            value={description}
                                            onChange={handleChangeDescription}
                                            modules={modules}
                                            formats={formats}
                                        />
                                    </div>
                                    <div className="form-category">
                                        <h3>Thể loại:</h3>
                                        <div className="category-container">
                                            <div className="category-grid">
                                                {categories.map(category => (
                                                    <div key={category.categoryId} className="category-item">

                                                        <input type="checkbox" id={category.categoryId}

                                                               defaultChecked={selectedCategories.includes(category.categoryId)}
                                                               onChange={() => {
                                                                   handleCategoryChange(category.categoryId)
                                                               }}/>
                                                        <label
                                                            htmlFor={category.categoryId}>{category.categoryName}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-status">
                                        {hasChapter && (
                                            <div>
                                                <h3>Trạng thái</h3>

                                                <input type="radio" id="update" name="status" value="Update"
                                                       checked={status === "Update"}
                                                       onChange={(e) => setStatus(e.target.value)}/>
                                                <label htmlFor="update">Update</label>
                                                <input type="radio" id="full" name="status" value="Full"
                                                       checked={status === "Full"}
                                                       onChange={(e) => setStatus(e.target.value)}/>
                                                <label htmlFor="full">Full</label>
                                            </div>
                                        )}
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
                    <Alert variant="filled" severity="success">Sửa truyện thành công rồi</Alert>
                </Stack>
            </Modal>
        </>
    );
}

export default Edit;
