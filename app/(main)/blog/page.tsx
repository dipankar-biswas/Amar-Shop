"use client";

import { SimplePage } from "../components/SimplePage";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Write a Blog Post Your Readers Will Love",
      date: "February 9, 2026",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "9 Content Marketing Trends and Ideas to Increase Traffic",
      date: "February 7, 2026",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Marketing Strategies",
      date: "February 5, 2026",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <SimplePage title="Blog">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group rounded border border-gray-300 bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-3">
              <p className="text-xs text-[#ef553f]">{post.date}</p>
              <h3 className="text-lg text-[20px] font-semibold">
                {post.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </SimplePage>
  );
};

export default BlogPage;
