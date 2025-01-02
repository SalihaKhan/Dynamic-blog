
  import React from 'react';
  import Link from 'next/link';
  
  // BlogPost type
  interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
  }
  
  interface BlogListProps {
    posts: BlogPost[];
  }
  
  const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
  <Link key={post.id} href={`/posts/${post.id}`}>
    <div className="cursor-pointer bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      <Link href={`/blog/${post.id}`} className="text-2xl font-semibold mb-3 hover:text-blue-500 transition-colors">
        {post.title}
      </Link>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center text-gray-400 text-sm">
        <p>{post.date}</p>
        <p>{post.author}</p>
      </div>
    </div>
  </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogList;
    