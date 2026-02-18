import React from "react";
import {
    BadgeCheck,
    Award,
    Laptop,
    UserCheck,
    GraduationCap,
    Globe,
    BookOpen,
    Users2,
    Users,
    MonitorPlay,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const features = [
    {
        title: "Solidworks Authorised Partner",
        icon: BadgeCheck,
        variant: "orange",
    },
    {
        title: "Training Experience of 10+ years",
        icon: Award,
        variant: "yellow",
    },
    {
        title: "Training with Licensed Software",
        icon: Laptop,
        variant: "purple",
    },
    {
        title: "Personalised Training",
        icon: "/icons/business-training.png",
        variant: "yellow",
    },
    {
        title: "Solidworks Certified Faculties",
        icon: GraduationCap,
        variant: "blue",
    },
    {
        title: "International Certification",
        icon: Award,
        variant: "orange",
    },
    {
        title: "Industry Ready Curriculum",
        icon: BookOpen,
        variant: "yellow",
    },
    {
        title: "1000+ industry connections for placements",
        icon: "/icons/partnership.png",
        variant: "purple",
    },
    {
        title: "Practical Oriented Training",
        icon: "/icons/laptop-man.png",
        variant: "yellow",
    },
    {
        title: "Offline and Mentored Online Training",
        icon: "/icons/online-counseling.png",
        variant: "blue",
    },
];

export default function WhyChooseUs({ className }) {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className="container">
                {/* Heading */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>Why Choose Us</h2>
                    <p className={styles.subheading}>
                        We don’t just teach software; we teach engineering design. Our unique
                        approach ensures the why behind every click.
                    </p>
                    <div className={styles.dividerWrapper}>
                        <span className={styles.divider} />
                    </div>
                </div>

                {/* Outer Border Box */}
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            // Check if icon is a string (path to image) or component
                            const isImage = typeof Icon === 'string';

                            // Color mapping based on WhyChooseUs.module.css
                            const variantColors = {
                                orange: '#EA580C',
                                yellow: '#985D00',
                                purple: '#6B21A8',
                                blue: '#001F5B',
                            };

                            const iconColor = variantColors[item.variant] || '#000';

                            return (
                                <div
                                    key={index}
                                    className={`${styles.card} ${styles[item.variant]}`}
                                >
                                    <div className={styles.iconWrapper}>
                                        {isImage ? (
                                            <div
                                                className={styles.icon}
                                                style={{
                                                    width: '26px',
                                                    height: '26px',
                                                    backgroundColor: iconColor,
                                                    maskImage: `url(${Icon})`,
                                                    WebkitMaskImage: `url(${Icon})`,
                                                    maskMode: 'alpha',
                                                    WebkitMaskMode: 'alpha',
                                                    maskRepeat: 'no-repeat',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskPosition: 'center',
                                                    WebkitMaskPosition: 'center',
                                                    maskSize: 'contain',
                                                    WebkitMaskSize: 'contain',
                                                }}
                                            />
                                        ) : (
                                            <Icon className={styles.icon} size={26} />
                                        )}
                                    </div>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
