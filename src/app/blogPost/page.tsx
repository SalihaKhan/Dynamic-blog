'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string; // Image URL field
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/posts.json'); // Fetch the posts.json file
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // If still loading, show a loading message
  if (loading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  // If an error occurred, show an error message
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-900">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          // Check if the image URL is valid (non-empty string)
          const imageUrl = post.imageUrl?.trim() ? post.imageUrl : '/images/placeholder.jpg'; // Use placeholder if empty

          return (
            <div
              key={post.id}
              className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative mb-6">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  width={500}  // Set image width
                  height={300} // Set image height
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
                  <p>{post.title}</p>
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-700 text-lg mb-4">{post.excerpt}</p>
              <Link
                href={`/blogPost/${post.id}`}
                className="text-blue-500 hover:underline text-lg"
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
