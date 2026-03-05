'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBarsStaggered, FaXmark, FaMagnifyingGlass } from 'react-icons/fa6';
import './Header.css';

const navLinks = [
  { href: '/home',     label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Recipes' },
  { href: '/catogry',  label: 'Categories' },
  { href: '/faq',      label: 'FAQ' },
];

export default function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container h-100 d-flex align-items-center justify-content-between gap-3">

        {/* Logo */}
        <Link href="/home" className="header-logo">
          <Image src="/logo.svg" alt="FlavorLand logo" width={34} height={34} />
          Flavor<span className="accent">Land</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`header-nav ${open ? 'open' : ''}`}>
          <ul className="list-unstyled d-flex align-items-center gap-1 m-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname.startsWith(href) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/search" className="header-search-btn ms-2">
                <FaMagnifyingGlass size={13} />
                Search
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="header-toggler"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBarsStaggered />}
        </button>

      </div>
    </header>
  );
}
