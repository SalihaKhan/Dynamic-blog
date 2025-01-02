// src/pages/blog/[id].tsx

import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Extracts the id parameter from the URL

  // Simulated blog data
  const posts = [
    { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    { id: '3', title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  ];

  // Find the post with the matching ID
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found.</div>; // Handle case where post does not exist
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
