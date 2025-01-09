// app/layout.js
 import React from 'react';
import '/globals.css';
 import Navbar from '@/components/Navbar';
//  import SessionWrapper from '@/components/SessionWrapper';

export default function Layout({ children }) {
  return (
       <html lang="en">
        {/* <SessionWrapper> */}
        <body className="min-h-screen bg-gray-100">
          <header className="bg-blue-500 p-4 text-white">
            <Navbar />
           </header>
          <main>{children}</main> {/* This renders the content of each page */}
          
          
        </body>
    {/* </SessionWrapper> */}
      </html>
  );
}
