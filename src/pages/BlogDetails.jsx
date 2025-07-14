import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/common/Loading";
import PageNotFound from "../components/PageNotFound";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if(!blog.id) return <PageNotFound />

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <button onClick={()=>navigate(-1)} className="mb-6 text-sm font-medium text-blue-600 hover:underline">
        🔙 Back to Home
      </button>

      <article className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <header className="mb-6">
          <p className="text-sm text-gray-400">Blog ID: {blog.id}</p>
          <h1 className="text-3xl font-bold text-gray-700 mt-2 mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Technology
            </div>
            <span>.</span>
            <span>Author: John Doe</span>
            <span>.</span>
            <span>Published: jul 21, 2015</span>
          </div>
        </header>
        <section className="text-gray-700 leading-7 text-base space-y-4">
          {blog.body.split("/n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </section>
      </article>
    </div>
  );
};

export default BlogDetails;

// next: 1:41
