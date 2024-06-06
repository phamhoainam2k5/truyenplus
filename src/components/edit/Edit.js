import {useState} from "react";
import "../list/List.css";
function Edit() {
    const [file, setFile] = useState();
    const handleChange=(e) =>{
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="lefts">
                        <div className="left_content">
                            <form
                                noValidate="novalidate" encType="multipart/form-data">


                                <h3>Upload your photo :</h3>
                                <input type="file" onChange={handleChange}/>
                                <img src={file}/>


                                <h3>Title :</h3>
                                <input type="text" className="title" placeholder="Enter Title"
                                       required/><br/><br/>


                                <h3>Description :</h3>
                                <textarea id="description" rows="4" placeholder="Enter Description"
                                          required></textarea><br/><br/>


                                <button type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Edit;