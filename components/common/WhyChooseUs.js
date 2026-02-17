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
        icon: UserCheck,
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
        icon: Users2,
        variant: "purple",
    },
    {
        title: "Practical Oriented Training",
        icon: BookOpen,
        variant: "yellow",
    },
    {
        title: "Offline and Mentored Online Training",
        icon: MonitorPlay,
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
                            return (
                                <div
                                    key={index}
                                    className={`${styles.card} ${styles[item.variant]}`}
                                >
                                    <div className={styles.iconWrapper}>
                                        <Icon className={styles.icon} size={26} />
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
