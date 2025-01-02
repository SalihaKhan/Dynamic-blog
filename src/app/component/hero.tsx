'use client'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center text-center">
      <div className="space-y-6">
        {/* <!-- Animated Heading --> */}
        <h1 className="text-5xl font-extrabold leading-tight opacity-0 animate-fadeIn">
          Unlock the Future of Programming
        </h1>
        <p className="text-xl opacity-0 animate-fadeIn animation-delay-200ms">
          Dive into the latest tech tutorials, programming insights, and industry trends.
        </p>

        {/* <!-- Call to Action Button --> */} 
        <div>
          <a 
            href="/blog" 
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-md text-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Start Learning Now
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Animation on Scroll (Optional) --> */}
  <style jsx>{`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    .animation-delay-200ms {
      animation-delay: 200ms;
    }
  `}</style>
</section>

  )
}

export default Hero


