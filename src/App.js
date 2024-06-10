import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css"
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Story from "./components/story/Story";
import Chapter from "./components/chapter/Chapter";
import Sidebar from "./components/sidebar/Sidebar";
import List from "./components/list/List";
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import ListChap from "./components/list/ListChap";
import CreateChap from "./components/create/CreateChap";
import EditChap from "./components/edit/EditChap";

function App() {


    return (
        <div className="App">
            <Router>
                <Routes>

                    <Route
                        path="/home"
                        element={
                            <>
                                <Header/>
                                <Home/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route
                        path="/story/:storyId"
                        element={
                            <>
                                <Header/>
                                <Story/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route
                        path="/chapter/:storyId/:chapterId"
                        element={
                            <>
                                <Header/>
                                <Chapter/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <>
                                <Header/>
                                <div className="app__story">
                                    <Sidebar/>
                                    <div className="app__lists">
                                        <List/>
                                    </div>

                                </div>
                                <Footer/>
                            </>
                        }
                    /> <Route
                    path="/create"
                    element={
                        <>
                            <Header/>
                            <div className="app__story">
                                <Sidebar/>
                                <div className="app__lists">
                                    <Create/>
                                </div>

                            </div>
                            <Footer/>
                        </>
                    }
                /><Route
                    path="/edit/:id"
                    element={
                        <>
                            <Header/>
                            <div className="app__story">
                                <Sidebar/>
                                <div className="app__lists">
                                    <Edit/>
                                </div>

                            </div>
                            <Footer/>
                        </>
                    }
                /><Route
                    path="/chapters/:storyId"
                    element={
                        <>
                            <Header/>
                            <div className="app__story">
                                <Sidebar/>
                                <div className="app__lists">
                                    <ListChap/>
                                </div>

                            </div>
                            <Footer/>
                        </>
                    }
                />
                    <Route
                        path="/create/:storyId"
                        element={
                            <>
                                <Header/>
                                <div className="app__story">
                                    <Sidebar/>
                                    <div className="app__lists">
                                        <CreateChap/>
                                    </div>

                                </div>
                                <Footer/>
                            </>
                        }
                    /><Route
                        path="/editChapter/:storyId/:chapterId"
                        element={
                            <>
                                <Header/>
                                <div className="app__story">
                                    <Sidebar/>
                                    <div className="app__lists">
                                        <EditChap/>
                                    </div>

                                </div>
                                <Footer/>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
};
export default App