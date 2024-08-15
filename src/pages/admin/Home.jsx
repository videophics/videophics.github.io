import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

/* Utils */
import { logOut } from "../../utils/admin";

/* Components */
import WithAuth from "../../components/admin/WithAuth";

function Home() {
  const logOutProcess = () => {
    logOut();
  };

  return (
    <WithAuth>
      {({ user }) => (
        <>
          <Helmet>
            <title>Admin - Videophics</title>
          </Helmet>
          <div className="container py-12 mx-auto max-w-[1300px]">
            <h1 className="text-center text-white text-3xl font-[500] mt-10">
              Welcome to Admin Panel{" "}
              <span className="text-gray-500">
                :-)
              </span>
            </h1>
            <div className="_admin-account w-full max-w-[450px] mx-auto mt-5 text-white text-center">
              <p className="text-gray-400">
                {user.email} (
                <button
                  className="text-blue-500 hover:underline text-sm"
                  onClick={logOutProcess}
                >
                  Sign Out
                </button>
                )
              </p>
            </div>
            <div className="_admin-menu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <NavLink to="/admin/blog">
                <div className="bg-orange-light/10 shadow-md rounded-md p-6 hover:shadow-lg transition duration-300 hover:hover:bg-gray-700 cursor-pointer select-none">
                  <h2 className="text-white text-lg font-[500]">
                    My Blog
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Manage blog posts at one place
                  </p>
                </div>
              </NavLink>
              <NavLink to="/admin/sitemap">
                <div className="bg-orange-light/10 shadow-md rounded-md p-6 hover:shadow-lg transition duration-300 hover:hover:bg-gray-700 cursor-pointer select-none">
                  <h2 className="text-white text-lg font-[500]">
                    Sitemap
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Manage sitemap.xml file for SEO
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </WithAuth>
  );
}

export default Home;
