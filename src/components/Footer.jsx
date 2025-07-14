import React from 'react';
import { Link } from "react-router-dom";  // Fixed import
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
        <footer className='bg-blue-600 text-white py-8'>
            {/* Social Icons */}
            <div className='flex justify-center gap-6 mb-6'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <MdFacebook size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <CiLinkedin size={24} />
                </a>
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <MdWhatsapp size={24} />
                </a>
                <a href="mailto:contact@example.com" className="hover:scale-110 transition-transform">
                    <CgMail size={24} />
                </a>
            </div>

            {/* Copyright Text */}
            <div className='text-center text-sm'>
                <span>Copyright © 2025 BLOGIFY Labs Inc</span>
                <span className='mx-1'>•</span>
                <Link to="/trademark-policy" className='hover:underline'>
                    Trademark Policy
                </Link>
            </div>
        </footer>
    );
};

export default Footer;