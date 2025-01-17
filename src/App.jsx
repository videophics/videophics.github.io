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
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* :: Website */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/services/:service"
            element={
              <Layout>
                <ServicesView />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>

              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogView />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />

          {/* :: Admin */}
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin_Home />
              </Layout>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <Layout>
                <Admin_Blog />
              </Layout>
            }
          />
          <Route
            path="/admin/blog/edit/:postId"
            element={
              <Layout>
                <Admin_BlogEdit />
              </Layout>
            }
          />
          <Route
            path="/admin/blog/add"
            element={
              <Layout>
                <Admin_BlogAdd />
              </Layout>
            }
          />
          <Route
            path="/admin/sitemap"
            element={
              <Layout>
                <Admin_Sitemap />
              </Layout>
            }
          />

          {/* Legal */}
          <Route
            path="/legal/privacy-policy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/legal/cookies-policy"
            element={
              <Layout>
                <Cookie />
              </Layout>
            }
          />
          <Route
            path="/legal/terms-and-conditions"
            element={
              <Layout>
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
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
