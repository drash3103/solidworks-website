'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const images = [
    '/hero/trai1.jpeg',
    '/hero/trai2.png',
    '/hero/plac1.jpeg',
    '/hero/plac2.jpeg',
    '/hero/3d1.jpeg',
    '/hero/3d2.jpeg',
    '/hero/int1.jpeg',
    '/hero/int2.jpeg',
];

const contentSets = [
    {
        heading: <><span className={styles.orangeText}>SOLIDWORKS</span> Training</>,
        tagline: "Authorized SOLIDWORKS Training for Industry-Ready DESIGN Engineers",
        description: "Hands-on training in CAD, CAE, CAM, Simulation, CFD, and 3D Printing—delivered by a Dassault Systèmes–Authorized Training Centre."
    },
    {
        heading: <><span className={styles.orangeText}>Placement</span> Assistance</>,
        tagline: "Launch Your Career with Industry Leaders",
        description: "Connecting our students with 1000+ top companies through dedicated career support and mentorship."
    },
    {
        heading: <><span className={styles.orangeText}>Design</span> Services</>,
        tagline: "Professional Engineering & Manpower Solutions",
        description: "Expert CAD drafting, 3D modeling, and qualified design manpower support for your mechanical projects."
    },
    {
        heading: <><span className={styles.orangeText}>Advanced</span> Engineering</>,
        tagline: "Innovation through Simulation & Prototyping",
        description: "Transforming concepts into reality with advanced CAE analysis, CFD, and industrial 3D printing expertise."
    }
];

const stats = [
    { number: '10+', label: 'YEARS IN BUSINESS' },
    { number: '1000+', label: 'STUDENTS TRAINED' },
    { number: '90%', label: 'STUDENTS PLACED' },
    { number: '1000+', label: 'CLIENTS' },
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [isPaused, nextSlide]);

    const contentIndex = Math.floor(currentImage / 2);
    const activeContent = contentSets[contentIndex];

    return (
        <section
            className={styles.heroSection}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                {images.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
                    >
                        <Image
                            src={src}
                            alt={`Engineering Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            className={styles.backgroundImage}
                        />
                    </div>
                ))}
                <div className={styles.gradientOverlay}></div>
            </div>

            <div className={styles.heroContent}>
                <div className="container">
                    <div className={styles.textContent}>
                        <h1 className={styles.heading}>
                            {activeContent.heading}
                        </h1>

                        <div className={styles.subheadingWrapper}>
                            <h2 className={styles.subHeading}>
                                {activeContent.tagline}
                            </h2>
                            <p className={styles.description}>
                                {activeContent.description}
                            </p>
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.primaryBtn}>Solidworks Training</button>
                            <button className={styles.secondaryBtn}>Placements</button>
                            <button className={styles.secondaryBtn}>
                                Design Services & Man Power Supply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <button className={styles.navBtnPrev} onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft size={40} />
            </button>
            <button className={styles.navBtnNext} onClick={nextSlide} aria-label="Next slide">
                <ChevronRight size={40} />
            </button>

            {/* Slide Indicators (Dots) */}
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentImage ? styles.dotActive : ''}`}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Stats Bar */}
            <div className={styles.statsBarWrapper}>
                <div className={styles.statsBar}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statNumber}>{stat.number}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Logo */}
            <img
                src="/solidworks-autho-centre.jpg"
                alt="Authorized Training Centre"
                className={styles.heroAuthLogo}
            />
        </section>
    );
}
