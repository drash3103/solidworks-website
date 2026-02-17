import Link from 'next/link';
import styles from './Breadcrumb.module.css';

/**
 * Breadcrumb navigation component
 * Improves site navigation and SEO
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={item.url}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index < items.length - 1 ? (
              <>
                <Link href={item.url} itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
                <meta itemProp="position" content={index + 1} />
                <span className={styles.separator} aria-hidden="true">
                  {' '}
                  /{' '}
                </span>
              </>
            ) : (
              <>
                <span itemProp="name" aria-current="page">
                  {item.name}
                </span>
                <meta itemProp="position" content={index + 1} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
