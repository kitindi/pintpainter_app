import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import PostPage from "./pages/PostPage/PostPage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import MainLayout from "./pages/Layout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />

          <Route path="/:username" element={<UserProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
