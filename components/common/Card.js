import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({
  title,
  description,
  icon,
  href,
  features = [],
  className = '',
  image,
  variant = 'orange', // 'orange' or 'purple'
}) {
  const content = (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        {/* We keep the icon if provided, but typically with image we might not need it, preserving it just in case */}
        {/* {icon && <div className={styles.icon}>{icon}</div>} */}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>
        )}
        {href && <span className={styles.arrow}>Learn More →</span>}
      </div>
    </>
  );

  const variantClass = styles[`variant-${variant}`] || styles['variant-orange'];

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${variantClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${styles.card} ${variantClass} ${className}`}>{content}</div>;
}
