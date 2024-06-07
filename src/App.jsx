import React from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ImageReduce from "./components/ImageReduce.jsx";

const App = () => {
    return (
        <>
            <Header />
            <ImageReduce />
            <Footer />
        </>
    );
};

export default App;
