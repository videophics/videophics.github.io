import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import Layout from './Layout';

/* Pages */
import Home from "./pages/Home";
import ServicesView from "./pages/ServicesView";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/legal/Privacy";
import Cookie from "./pages/legal/Cookie";
import Terms from "./pages/legal/Terms";

import Admin_Home from "./pages/admin/Home";
import Admin_Blog from "./pages/admin/Blog";
import Admin_BlogEdit from "./pages/admin/BlogEdit";
import Admin_BlogAdd from "./pages/admin/BlogAdd";
import Admin_Sitemap from "./pages/admin/Sitemap";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    return () => { };
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* :: Website */}
          <Route
            path="/"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/services/:service"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <ServicesView />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout theme={theme} setTheme={setTheme}>

              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <BlogView />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <ContactUs />
              </Layout>
            }
          />

          {/* :: Admin */}
          <Route
            path="/admin"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Admin_Home />
              </Layout>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Admin_Blog />
              </Layout>
            }
          />
          <Route
            path="/admin/blog/edit/:postId"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Admin_BlogEdit />
              </Layout>
            }
          />
          <Route
            path="/admin/blog/add"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Admin_BlogAdd />
              </Layout>
            }
          />
          <Route
            path="/admin/sitemap"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Admin_Sitemap />
              </Layout>
            }
          />

          {/* Legal */}
          <Route
            path="/legal/privacy-policy"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/legal/cookies-policy"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Cookie />
              </Layout>
            }
          />
          <Route
            path="/legal/terms-and-conditions"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <Terms />
              </Layout>
            }
          />

          {/* Redirects */}
          <Route path="/about" element={<Navigate to="/about-us" />} />
          <Route path="/contact" element={<Navigate to="/contact-us" />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <Layout theme={theme} setTheme={setTheme}>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
