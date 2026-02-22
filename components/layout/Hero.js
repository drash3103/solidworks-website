'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

const images = [
    '/hero/company_banner.png',
    '/hero/training_banner.png',
    '/hero/plac1.jpeg',
    '/hero/3d1.jpeg', // Design Services
    '/hero/3d2.jpeg', // 3D Printing
];

const contentSets = [
    {
        heading: <><span className={styles.orangeText}>One Stop</span> SOLIDWORKS Solutions</>,
        tagline: "SOLIDWORKS Authorized Training, Placement and Design Centre",
        description: "Learn Design, Lead the World"
    },
    {
        heading: <>Upgrade your CAD Skills with <br /><span className={styles.orangeText}>Authorized SOLIDWORKS Training Partner</span></>,
        tagline: "Practical SOLIDWORKS Training for CAD, CAE, CAM, Simulation, and 3D Printing",
        description: <>Corporate-Focused SOLIDWORKS Training Aligned with Organizations Needs<br />Internships, Projects, and Placements for Job-Ready DESIGN Engineers</>
    },
    {
        heading: <><span className={styles.orangeText}>Placement</span> Assistance</>,
        tagline: "Launch Your Career with Industry Leaders",
        description: <>Connecting our students with 1000+ top companies through dedicated career support and mentorship <br />Bridging the Gap Between Engineering Education and Industry Careers in DESIGN</>
    },
    {
        heading: <><span className={styles.orangeText}>Design</span> Services and Manpower Solutions</>,
        tagline: "Professional CAD/CAM Design Services and Design Engineering Manpower",
        description: <>End-to-End 3D Design, CAD/CAM Services, and Design Engineering Manpower Solutions<br />From Concept Design to Manufacturing-Ready Drawings—Delivered with Accuracy<br />On-Demand Engineering Design Services and Manpower for Industrial Excellence</>
    },
    {
        heading: <><span className={styles.orangeText}>Advanced</span> 3D Printing Training and Job Work Services</>,
        tagline: "Learn 3D Printing the Right Way – Practical, Professional, Production-Focused",
        description: <>Complete 3D Printing Solutions – Training and Custom Job Work Services<br />Learn, Design, Manufacture – Complete 3D Printing Ecosystem Under One Roof</>
    }
];

const stats = [
    { number: '10+', label: 'YEARS IN BUSINESS' },
    { number: '1000+', label: 'STUDENTS TRAINED' },
    { number: '90%', label: 'STUDENTS PLACED' },
    { number: '1000+', label: 'CLIENTS' },
];

export default function Hero() {
    const router = useRouter();
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

    const activeContent = contentSets[currentImage];

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
                            <button className={styles.primaryBtn} onClick={() => router.push('/services/solidworks-training')}>
                                SOLIDWORKS Training
                            </button>
                            <button className={styles.secondaryBtn} onClick={() => router.push('/services/placement')}>
                                Placements
                            </button>
                            <button className={styles.secondaryBtn} onClick={() => router.push('/services/design-services-manpower')}>
                                Design Services & Man Power Supply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Controls (Dots Only) */}
            <div className={styles.carouselControls}>
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
