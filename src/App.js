import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import CoursePage from "./pages/Course/CoursePage";
import Page from "./pages/Page/Page";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/home";

const pages = [
    { title: "home_page", component: <HomePage />, path: "/" },
    { title: "about", component: <About />, path: "/About" },
    { title: "Blog", component: <Blog />, path: "/Blog" },
    { title: "Contact", component: <Contact />, path: "/Contact" },
    { title: "Course", component: <CoursePage />, path: "/Course" },
    { title: "page", component: <Page />, path: "/Page" },
];

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {pages.map((page) => (
                        <Route path={page.path} element={page.component} key={page.title} />
                    ))}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
