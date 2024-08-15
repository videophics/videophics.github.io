import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  collection,
  limit,
  query,
  onSnapshot,
  getFirestore,
} from "@firebase/firestore";

/* Utils */
import fi from "../utils/firebase";
const Blogs = collection(getFirestore(fi), "Blogs");

export default function Blog() {
  const [blogslist, setblogs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(Blogs, limit(10)), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setblogs(data);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Videophics</title>
        <meta
          name="description"
          content="Read our latest trending blogs on branding, marketing, and business growth." />
      </Helmet>
      <div className="container mx-auto py-10 text-white max-w-[1300px]">
        <h1 className="text-4xl font-bold text-center text-gray-50">
          Blog
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogslist.map((blog) => (
            <Link
              to={"/blog/" + blog.id}
              className="hover:opacity-70 transition duration-300 ease-in-out active:scale-100"
              key={blog.id}
            >
              <div key={blog.id}>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-60 object-cover mt-5 bg-gray-700 rounded-md"
                />
                <h1 className="text-2xl font-[500] text-gray-50 mt-5 mb-2">
                  {blog.title}
                </h1>
                <p className="text-gray-400">
                  {blog.author} | {blog.publishedAt.toDate().toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
