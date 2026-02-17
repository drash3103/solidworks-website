import Link from 'next/link';
import styles from './CallToAction.module.css';

export default function CallToAction({
    title = "Ready to Start Your Journey?",
    subtitle = "Join thousands of successful engineers who started their career with us. Visit our campus or book a free counseling session today.",
    buttonText = "View Courses",
    buttonLink = "/services",
    secondaryButtonText = null,
    secondaryButtonLink = "/#contact",
}) {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <div className={styles.buttonGroup}>
                        <Link href={buttonLink} className={styles.ctaButton}>
                            {buttonText}
                        </Link>
                        {secondaryButtonText && (
                            <Link href={secondaryButtonLink} className={`${styles.ctaButton} ${styles.secondaryButton}`}>
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
