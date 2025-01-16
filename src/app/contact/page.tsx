

// src/app/contact/page.tsx
'use client'
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [commentData, setCommentData] = useState({ name: '', comment: '' });

  // Handle form data for message submission
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle comment input change
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle message submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentData.name && commentData.comment) {
      setComments([...comments, { name: commentData.name, comment: commentData.comment }]);
      setCommentData({ name: '', comment: '' });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>

        {status && (
          <div className="mt-4 text-center text-lg">
            <p className={status === 'Message sent successfully!' ? 'text-green-500' : 'text-yellow-500'}>
              {status}
            </p>
          </div>
        )}
      </form>

      {/* Comment Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Comments</h2>

        {/* Comment Submission Form */}
        <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label htmlFor="commenter-name" className="block text-lg font-medium">Your Name</label>
            <input
              type="text"
              id="commenter-name"
              name="name"
              value={commentData.name}
              onChange={handleCommentChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-lg font-medium">Your Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={commentData.comment}
              onChange={handleCommentChange}
              required
              rows={4}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Submit Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-8">
          {comments.length === 0 ? (
            <p className="text-center text-gray-500">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-700 mt-2">{comment.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
