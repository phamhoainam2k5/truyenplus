import "./Chapter.css";
import {Dialog} from "@mui/material";
import {Close} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'

function Chapter() {
    const [openEditModal, setOpenEditModal] = useState(false);
    const {chapterId, storyId} = useParams();
    const navigate = useNavigate();

    const [chapters, setChapters] = useState([]);
    const [chapter, setChapter] = useState(null);

    useEffect(() => {
        const fetchChapterInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/chapters/${chapterId}`);
                setChapter(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Lỗi rồi:', error);
            }
        };

        if (chapterId) {
            fetchChapterInfo();
        }
    }, [chapterId]);

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };


    const handleEditClick = () => {
        setOpenEditModal(true);
    };

    const fetchChapters = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/chapters/story/${storyId}`);
            // Sắp xếp các chương theo `chapterNumber`
            const sortedChapters = response.data.sort((a, b) => a.chapterId - b.chapterId);
            setChapters(sortedChapters);
        } catch (error) {
            console.error('Lỗi rồi:', error);
        }
    };

    useEffect(() => {
        if (storyId) {
            fetchChapters();
        }
    }, [storyId]);

    if (!chapter) {
        return (<p>Loading...</p>);
    }

    const currentChapterIndex = chapters.findIndex(chap => chap.chapterId === parseInt(chapterId, 10));
    const isFirstChapter = currentChapterIndex === 0;
    const isLastChapter = currentChapterIndex === chapters.length - 1;

    const handlePreviousChapter = () => {
        if (currentChapterIndex > 0) {
            const previousChapterId = chapters[currentChapterIndex - 1]?.chapterId;
            if (previousChapterId) {
                navigate(`/chapter/${storyId}/${previousChapterId}`);
            }
        }
    };

    const handleNextChapter = () => {
        if (currentChapterIndex < chapters.length - 1) {
            const nextChapterId = chapters[currentChapterIndex + 1]?.chapterId;
            if (nextChapterId) {
                navigate(`/chapter/${storyId}/${nextChapterId}`);
            }
        }
    };

    return (
        <div className="vung-doc" id="vungdoc" style={{backgroundColor: "#fafaf3", color: "#000000", fontSize: 18}}>
            <div className="chapter_wrap">
                <div className="chapter_control" id="gotochap">
                    <a href="#" onClick={handlePreviousChapter}
                        className={`back ${isFirstChapter ? 'disabled' : ''}`}>&lt;&lt; Chương trước</a>
                    <a onClick={handleEditClick} className="btn-dschuong"/>
                    <a href="#" onClick={handleNextChapter} className={`next ${isLastChapter ? 'disabled' : ''}`}>Chương
                        tiếp &gt;&gt;</a>
                </div>
                <div>
                    <h1 className="current-book">
                        <a href="/de-ba">{chapter.story.title}</a>{" "}
                        <span className="current-chapter">Chương {chapter.chapterNumber}: {chapter.title}</span>
                    </h1>
                </div>
                <div className="clearfix"/>
            </div>
            <div className="truyen">
                <ReactQuill
                    value={chapter.content}
                    readOnly={true}
                    theme={"bubble"}
                />

            </div>
            <div className="chapter_wrap">
                <div className="clearfix"/>
                <div className="chapter_control control--last">
                    <a href="#" onClick={handleNextChapter} className={`next ${isLastChapter ? 'disabled' : ''}`}>Chương
                        tiếp &gt;&gt;</a>
                </div>
                <div className="clearfix"/>
            </div>
            <Dialog open={openEditModal} onClose={handleCloseEditModal}>
                <div id="browse-chapter">
                    <div className="title-list-chapter"><span>Danh sách chương</span>
                        <Close className="button b-close" onClick={handleCloseEditModal}/>
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
