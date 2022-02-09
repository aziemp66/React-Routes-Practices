import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<AllMeetupsPage />} />
        </Routes>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
