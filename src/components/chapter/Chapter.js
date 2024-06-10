import "./Chapter.css";
import { Dialog } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Chapter() {
    const [openEditModal, setOpenEditModal] = useState(false);
    const { chapterId, storyId } = useParams();

    const [chapters, setChapters] = useState([]);
    const [chapter, setChapter] = useState(null);

    useEffect(() => {
        const fetchChapterInfo = () => {
            axios.get(`http://localhost:8080/api/chapters/${chapterId}`)
                .then(response => {
                    setChapter(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(' Lỗi rồi:', error);
                });
        };

        fetchChapterInfo();
    }, [chapterId, storyId]);

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };

    const handleEditClick = () => {
        setOpenEditModal(true);
    };

    const fetchChapters = () => {
        axios.get(`http://localhost:8080/api/chapters/story/${storyId}`)
            .then(response => {
                setChapters(response.data);
            })
            .catch(error => {
                console.error('Lỗi rồi:', error);
            });
    };

    useEffect(() => {
        fetchChapters();
    }, []);


    return (
        <div className="vung-doc" id="vungdoc" style={{ backgroundColor: "#fafaf3", color: "#000000", fontSize: 18 }}>
            <div className="chapter_wrap">
                <div className="chapter_control" id="gotochap">
                    <a href="#" className="back disabled">&lt;&lt; Chương trước</a>
                    <a onClick={handleEditClick} className="btn-dschuong" />
                    <a href="" className="next">Chương tiếp &gt;&gt;</a>
                </div>
                <div>
                    <h1 className="current-book">
                        <a href="/de-ba">{chapter && chapter.story.title}</a>{" "}
                        <span className="current-chapter">Chương {chapter && chapter.chapterNumber}: {chapter && chapter.title}</span>
                    </h1>
                </div>
                <div className="clearfix" />
            </div>
            <div className="truyen">
                {chapter && chapter.content}
            </div>
            <div className="chapter_wrap">
                <div className="clearfix" />
                <div className="chapter_control control--last">
                    <a href="/de-ba/chuong-2/974743.html" className="next">Chương tiếp &gt;&gt;</a>
                </div>
                <div className="clearfix" />
            </div>
            <Dialog open={openEditModal} onClose={handleCloseEditModal}>
                <div id="browse-chapter">
                    <div className="title-list-chapter"><span>Danh sách chương</span>
                        <Close className="button b-close" onClick={handleCloseEditModal} />
                    </div>
                    <div className="content">
                        <div className="b-ajax-wrapper">
                            <div className="chapter-list">
                                <div className="row">
                                    {chapters.map((chap, index) => (
                                        <div className="col-md-6 col-sm-12" key={index}>
                                            <span>
                                                <Link to={`/chapter/${storyId}/${chap.chapterId}`}>
                                                    {chap.title}
                                                </Link>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default Chapter;
