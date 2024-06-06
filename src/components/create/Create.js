import {useEffect, useState} from "react";
import axios from "axios";
import "./../list/List.css"
import {useNavigate} from "react-router-dom";

function Create() {
    const [file, setFile] = useState();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filePreview, setFilePreview] = useState(""); // State để lưu trữ URL xem trước
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFilePreview(URL.createObjectURL(selectedFile));
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }
    const navigate=useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                setCategories(response.data); // Giả sử API trả về mảng các đối tượng danh mục
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("image", file);
        formData.append("description", description);
        formData.append("author", author);
        formData.append("status", "New");

        formData.append("categories", selectedCategory);
console.log("d",file)
        axios.post("http://localhost:8080/api/stories", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
                navigate('/list', { state: { message: "Thêm thành công!" } });

                // Handle success
            })
            .catch(error => {
                console.error("lỗi", error.response.data);
                // Xử lý lỗi
            });
    }

    return (
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="lefts">
                        <div className="left_content">
                            <form onSubmit={handleSubmit} noValidate="novalidate" encType="multipart/form-data">
                                <h3>Upload your photo :</h3>
                                <input type="file" onChange={handleChange}/>
                                {filePreview && <img src={filePreview} alt="Preview" width="200" height="200"/>} {/* Hiển thị ảnh xem trước */}
                                <h3>Title :</h3>
                                <input type="text" className="title" placeholder="Enter Title" value={title}
                                       onChange={(e) => setTitle(e.target.value)} required/><br/><br/>

                                <h3>Author :</h3>
                                <input type="text" className="author" placeholder="Enter Author" value={author}
                                       onChange={(e) => setAuthor(e.target.value)} required/><br/><br/>

                                <h3>Description :</h3>
                                <textarea id="description" rows="4" placeholder="Enter Description" value={description}
                                          onChange={(e) => setDescription(e.target.value)}
                                          required></textarea><br/><br/>

                                <h3>Category :</h3>
                                <select value={selectedCategory} onChange={handleCategoryChange}>
                                    <option value="">Select a category</option>
                                    {categories.map(category => (
                                        <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                                    ))}
                                </select><br/><br/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Create;
