'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@/styles/globals.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggling mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Menu', path: '#menu' },
    { name: 'Profil', path: '#profile' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Testimoni', path: '#testimonials' },
    { name: 'Chefs', path: '#chefs' },
    { name: 'Gallery', path: '#gallery' },
  ];

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Resto</h1>
          <span>.</span>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} onClick={closeMobileMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <i
          className={`mobile-nav-toggle d-xl-none ${isMobileMenuOpen ? 'bi bi-x' : 'bi bi-list'}`}
          onClick={toggleMobileMenu}
        ></i>

        {/* Call-to-Action Button */}
        <Link href="#book-a-table" className="btn-getstarted">
          Book a Table
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
