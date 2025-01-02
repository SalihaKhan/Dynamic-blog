// src/app/blog/page.tsx

import Link from 'next/link';

const BlogPage = () => {
  const posts = [
    { id: 1, title: 'Understanding JavaScript', excerpt: 'A deep dive into JavaScript concepts and techniques.' },
    { id: 2, title: 'React Basics', excerpt: 'An introduction to React, a JavaScript library for building UIs.' },
    { id: 3, title: 'CSS Flexbox Guide', excerpt: 'Learn how to use CSS Flexbox for modern layouts.' },
    { id: 4, title: 'Next.js Overview', excerpt: 'Learn how Next.js simplifies server-side rendering and static generation.' },
    { id: 5, title: 'TypeScript Essentials', excerpt: 'Get started with TypeScript, a superset of JavaScript for better tooling and safety.' },
    { id: 6, title: 'Tailwind CSS Tips', excerpt: 'Discover helpful tips and best practices for using Tailwind CSS in your projects.' },
    { id: 7, title: 'Node.js Fundamentals', excerpt: 'A guide to understanding the core concepts of Node.js and its asynchronous model.' },
    { id: 8, title: 'GraphQL Introduction', excerpt: 'An introduction to GraphQL and how it can improve API development.' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-bold mb-6 text-center">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-3">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-3 block">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
