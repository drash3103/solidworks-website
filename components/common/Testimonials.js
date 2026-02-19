"use client";

import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import Button from './Button';

const reviews = [
    {
        id: 1,
        name: 'Dharmesh Prajapati',
        initials: 'DP',
        text: 'Excellent SolidWorks Training Experience! I recently joined the SolidWorks Authorized Training Centre to switch my career as a Design Engineer and it has been a great learning journey so far. The centre uses original licensed SolidWorks software, so we get access to all the real features used in the industry. The teaching style is very clear and practical, with individual attention and personal doubt-solving for every student. The faculty members are certified and experienced, which really helps in understanding both the basics and advanced concepts easily. The learning environment is friendly, supportive, and motivating — perfect for beginners as well as working professionals. They also guide you properly in choosing the right course based on your background, which I really appreciate. Overall, I can confidently say this is one of the best SolidWorks training centres in Vadodara. Highly recommended!',
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
        name: 'Saiyad SaeedAdib',
        initials: 'SA',
        text: 'I am fully satisfied with the facilities and the way classes are conducted. The class timings are convenient and suitable for everyone. Both faculties are highly experienced and always ready to clear our doubts. Their teaching methods are excellent, and the syllabus is well-structured, covering all tools in detail. I have learned many new things about design, and this experience has completely changed my perspective towards the design field. I am truly thankful to all the teachers for their constant support and guidance.',
        rating: 5,
        highlight: false,
    },
];

const ReviewCard = ({ review }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const CHAR_LIMIT = 150;
    const shouldTruncate = review.text.length > CHAR_LIMIT;

    const displayedText = isExpanded || !shouldTruncate
        ? review.text
        : `${review.text.substring(0, CHAR_LIMIT)}...`;

    return (
        <div
            className={`${styles.card} ${review.highlight ? styles.cardHighlight : styles.cardDefault}`}
        >
            <div className={styles.quoteIcon}>
                <Quote size={48} fill="currentColor" stroke="none" />
            </div>
            <p className={styles.reviewText}>
                {displayedText}
                {shouldTruncate && (
                    <span
                        className={styles.readMore}
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{ marginLeft: '5px', display: 'inline-block' }}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </span>
                )}
            </p>

            <div className={styles.author}>
                <div className={`${styles.avatar} ${review.highlight ? styles.avatarHighlight : styles.avatarDefault}`}>
                    {review.initials}
                </div>
                <span className={styles.authorName}>{review.name}</span>
            </div>
        </div>
    );
};

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
                            <ReviewCard key={review.id} review={review} />
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
