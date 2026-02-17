import React from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import Button from './Button';

const reviews = [
    {
        id: 1,
        name: 'Mayur Gamit',
        initials: 'MG',
        text: 'I recently completed my SOLIDWORKS certification/training at this Authorized Training Center, and I am satisfied with the experience. They are providing licensed software, good faculty and good infrastructure...',
        rating: 5,
        highlight: false,
    },
    {
        id: 2,
        name: 'Chirag Parmar',
        initials: 'CP',
        text: 'I had a great learning experience here. The course content is very well-structured and covers everything from basics to advanced level. The faculty is highly knowledgeable, supportive and always ready to clear doubts.',
        rating: 5,
        highlight: true,
    },
    {
        id: 3,
        name: 'Milan Patel',
        initials: 'MP',
        text: 'Teaching provided here is really helpful . The curriculum from easy to hard, helps me to draw difficult parts in Solidworks , which I was hardly think I was able to draw .. If you want to learn Solidworks this is the place. Totally recommended...!!!',
        rating: 5,
        highlight: false,
    },
];

export default function Testimonials({ className }) {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Testimonials</h2>
                    <p className={styles.subheading}>
                        See what our students have to say about their learning experience.
                    </p>
                    <div className={styles.dividerWrapper}>
                        <span className={styles.divider} />
                    </div>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className={`${styles.card} ${review.highlight ? styles.cardHighlight : styles.cardDefault}`}
                            >
                                <div className={styles.quoteIcon}>
                                    <Quote size={48} fill="currentColor" stroke="none" />
                                </div>
                                <p className={styles.reviewText}>{review.text}</p>

                                <div className={styles.author}>
                                    <div className={`${styles.avatar} ${review.highlight ? styles.avatarHighlight : styles.avatarDefault}`}>
                                        {review.initials}
                                    </div>
                                    <span className={styles.authorName}>{review.name}</span>
                                </div>

                                {/* <div className={styles.readMore}>
                                    Read Full Review →
                                </div> */}
                            </div>
                        ))}
                    </div>

                    {/* Floating Badge */}
                    <div className={styles.ratingBadge}>
                        <div className={styles.ratingScore}>4.9</div>
                        <div className={styles.ratingInfo}>
                            <div className={styles.ratingLabel}>Student Rating</div>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={16} fill="#FACC15" color="#FACC15" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <Button href="/testimonials" variant="purple">
                        View All Reviews
                    </Button>
                </div>
            </div>
        </section>
    );
}
