// app/layout.js
 import React from 'react';
import '/globals.css';
 import Navbar from '@/components/Navbar.js';
 import Footer from '@/components/Footer';
 
 
export default function Layout({ children }) {
  return (
       <html lang="en">
         <body className="min-h-screen bg-gray-100">
          <header className="bg-cyan-400">
            
            <Navbar />
           </header>
          <main>{children}</main> {/* This renders the content of each page */}
          
           <Footer />
        </body>
       </html>
  );
}
