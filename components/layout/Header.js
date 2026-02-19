"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Mail, Linkedin, Facebook, X, ChevronDown, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbarWrapper}>

      {/* Top Orange Bar */}
      <div className={styles.topBar}>
        <span className={styles.inquiryText}>Inquiry : +91 83209 77346</span>

        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/solidworks_authorised_center?igsh=eG94d2w5M2tjemQ2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://wa.me/+918320977346" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/solidworks-authorized-training-services-center-vadodara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583191423828#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={18} />
          </a>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>

          {/* Logo & Brand Name */}
          <Link href="/" className={styles.brandContainer} onClick={closeMenu}>
            <div className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Bhavya Future EduTech"
              />
            </div>
            <div className={styles.brandTextContainer}>
              <div className={styles.brandNameRow}>
                <span className={styles.brandNameBhavya}>Bhavya</span>
                <span className={styles.brandNameFuture}>Future EduTech</span>
              </div>
              <span className={styles.tagline}>Learn Design, Lead the World</span>
            </div>
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>

          {/* Menu */}
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.mobileVisible : ""}`}>
            <li>
              <Link href="/" className={isActive("/") ? styles.active : ""} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about") ? styles.active : ""} onClick={closeMenu}>About Us</Link>
            </li>
            <li className={styles.dropdownParent}>
              <Link
                href="/services"
                className={`${styles.navLinkWithIcon} ${isActive("/services") ? styles.active : ""}`}
                onClick={closeMenu}
              >
                Services <ChevronDown size={16} />
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/services/solidworks-training" onClick={closeMenu}>SOLIDWORKS Training</Link>
                </li>
                <li>
                  <Link href="/services/placement" onClick={closeMenu}>Placements</Link>
                </li>
                <li>
                  <Link href="/services/design-services-manpower" onClick={closeMenu}>Design Services & Manpower Supply</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery" className={isActive("/gallery") ? styles.active : ""} onClick={closeMenu}>Gallery</Link>
            </li>
            <li>
              <Link href="/testimonials" className={isActive("/testimonials") ? styles.active : ""} onClick={closeMenu}>Testimonials</Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact") ? styles.active : ""} onClick={closeMenu}>Contact Us</Link>
            </li>
            {/* Mobile-only CTA */}
            <li className={styles.mobileCta}>
              <a href="https://wa.me/+918320977346" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <button className={styles.ctaButton}>Inquire</button>
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <a href="https://wa.me/+918320977346" target="_blank" rel="noopener noreferrer">
              <button className={styles.ctaButton}>Inquire</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
