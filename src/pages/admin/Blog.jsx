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

import fi from "../../utils/firebase";
const Blogs = collection(getFirestore(fi), "Blogs");

/* Components */
import WithAuth from "../../components/admin/WithAuth";

function Blog() {
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
    <WithAuth>
      {() => (
        <>
          <Helmet>
            <title>My Blog - Admin</title>
          </Helmet>
          <div className="container mx-auto max-w-[1300px] py-10 text-white">
            <Link to="/admin">
              <button className="mb-5">&larr; Go back</button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-[500] text-center text-white">
              <span className="text-gray-500">Admin /</span>{" "}
              Blog
            </h1>
            <div className="pt-8 mt-7">
              <div className="mt-2 bg-yellow-light/10 shadow-md rounded-md p-8">
                <p className="text-white text-lg font-[600]">
                  My Blog
                </p>
                <div className="border-t border-gray-700 mt-4"></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-7 min-h-[300px]">
                  <div className="rounded-md p-4 border border-gray-700">
                    <p className="mb-3 text-gray-400 text-[13px] uppercase font-[500]">
                      Actions
                    </p>
                    <Link to="/admin/blog/add">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-[500] text-sm py-2 px-4 rounded">
                        Add Post
                      </button>
                    </Link>
                  </div>
                  {blogslist.map((blog) => (
                    <div
                      key={blog.id}
                      className="flex flex-col justify-between"
                    >
                      <div className="flex gap-2">
                        <Link to={"/blog/" + blog.id} target="_blank">
                          <div className="hover:opacity-50 transition duration-300">
                            <h2 className="text-white text-lg font-[400] leading-6 line-clamp-2">
                              {blog.title}
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                              {blog.author} |{" "}
                              {blog.publishedAt.toDate().toDateString()}
                            </p>
                          </div>
                        </Link>
                        <div className="ml-auto">
                          <Link to={"/admin/blog/edit/" + blog.id}>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-[500] text-sm py-2 px-2 rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <a href={blog.thumbnail} target="_blank" rel="noreferrer">
                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          className="w-full h-[200px] object-cover mt-5 rounded-md hover:opacity-50 transition duration-300 border bg-gray-700"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </WithAuth>
  );
}

export default Blog;
