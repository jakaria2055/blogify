import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../components/common/Loading"; // ✅ path must be correct


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Latest Blog</h1>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {blogs.map((blog) => (
            
          <Link
            to={`blog/${blog.id}`}
            key={blog.id}
            className="bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-2xl p-6 transition-shadow duration-300 flex flex-col justify-between hover:border-blue-300"
          >
            <div className="">
              <h2 className="text-lg font-semibold text-blue-900 hover:underline mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">{blog.body.slice(0,100)}</p>
            </div>
            <div className="mt-4 text-right text-sm text-blue-800">
              Read More ⏩
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
