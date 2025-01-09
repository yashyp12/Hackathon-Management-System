"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <span className="flex items-center text-white text-xl font-extrabold">
            Hackathon App
          </span>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-white mt-4 sm:mt-0 ">
          © {new Date().getFullYear()} HackathonApp — All Rights Reserved
        </p>

        
          
         
      </div>
    </footer>
  );
}
