
import Hero from "./component/hero";
import React from "react";
import BlogList from "./component/blogPost";
const blogPosts = [
  {
    id: '1',
    title: 'Understanding React Server Components',
    excerpt: 'Learn the basics of React Server Components and how they improve performance.',
    date: 'Jan 1, 2025',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'Mastering Next.js 15 Features',
    excerpt: 'Explore the latest features in Next.js 15 and how they revolutionize web development.',
    date: 'Dec 20, 2024',
    author: 'Jane Smith',
  },
  {
    id: '3',
    title: 'Tailwind CSS Tips and Tricks',
    excerpt: 'Speed up your development with these Tailwind CSS tips and tricks.',
    date: 'Nov 15, 2024',
    author: 'Emily Johnson',
  },
  {
    id: '4',
    title: 'Optimizing Web Performance in 2025',
    excerpt: 'Discover cutting-edge techniques to boost website speed and performance.',
    date: 'Oct 10, 2024',
    author: 'Michael Brown',
  },
  {
    id: '5',
    title: 'The Future of Full-Stack Development',
    excerpt: 'Explore emerging trends in full-stack development for 2025 and beyond.',
    date: 'Sep 25, 2024',
    author: 'Sarah Wilson',
  },
  {
    id: '6',
    title: 'GraphQL vs REST: What to Choose?',
    excerpt: 'Dive into the differences between GraphQL and REST and when to use each.',
    date: 'Aug 14, 2024',
    author: 'David Clark',
  },
];


 const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" bg-gray-50">
      <BlogList posts={blogPosts}  />
    </div>
     
    

    
    </div>
  );
}
export default Home