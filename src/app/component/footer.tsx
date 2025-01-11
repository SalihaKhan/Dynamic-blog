'use client'
import React from 'react';
// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white mx-2"
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white mx-2"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

