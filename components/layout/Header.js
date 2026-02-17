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
          <Instagram size={18} />
          <div className={styles.whatsappIcon}>W</div>
          <Mail size={18} />
          <Linkedin size={18} />
          <Facebook size={18} />
          <X size={18} />
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
                src="/images/logo.jpeg"
                alt="Bhavya Future EduTech"
              />
            </div>
            <span className={styles.brandName}>Bhavya Future EduTech</span>
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
                  <Link href="/services/solidworks-training" onClick={closeMenu}>SolidWorks Training</Link>
                </li>
                <li>
                  <Link href="/services/placement" onClick={closeMenu}>Placements</Link>
                </li>
                <li>
                  <Link href="/services/design-services-manpower" onClick={closeMenu}>3D Designing Services & Man Power Supply</Link>
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
              <Link href="/contact" onClick={closeMenu}>
                <button className={styles.ctaButton}>Inquire</button>
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Link href="/contact">
              <button className={styles.ctaButton}>Inquire</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
