'use client'
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Link from 'next/link';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`${styles.header} d-flex align-items-center justify-content-between px-5 py-3`}>
            <div className={styles.logo}>
                <Link href="/home">Delicious Recipes</Link>
            </div>

            <div className={styles.barContainer}>
                {menuOpen 
                    ? <FaRegWindowClose className={styles.bar} onClick={toggleMenu} /> 
                    : <FaBarsStaggered className={styles.bar} onClick={toggleMenu} />
                }
            </div>

            <nav className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
                <ul className="d-flex gap-4 list-unstyled m-0 align-items-center">
                    <li><Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setMenuOpen(false)}>   About Us   </Link></li>
                    <li><Link href="/products" onClick={() => setMenuOpen(false)}>Recipes  </Link></li>
                    <li><Link href="/search" onClick={() => setMenuOpen(false)}>  Search Recipe</Link></li>
                    <li><Link href="/catogry" onClick={() => setMenuOpen(false)}>    catogry    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
