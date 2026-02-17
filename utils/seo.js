import siteMeta from '@/content/siteMeta.json';

/**
 * Generate complete metadata object for Next.js pages
 * @param {Object} options - Page-specific metadata options
 * @returns {Object} - Next.js metadata object
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  noindex = false,
  type = 'website',
}) {
  const fullTitle = title
    ? `${title} | ${siteMeta.siteName}`
    : siteMeta.defaultTitle;
  const fullDescription = description || siteMeta.defaultDescription;
  const canonicalUrl = canonical
    ? `${siteMeta.siteUrl}${canonical}`
    : siteMeta.siteUrl;
  const ogImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteMeta.siteUrl}${ogImage}`;

  const allKeywords = [...siteMeta.keywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: siteMeta.siteName }],
    creator: siteMeta.siteName,
    publisher: siteMeta.siteName,
    robots: noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type,
      locale: 'en_IN',
      url: canonicalUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteMeta.siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImageUrl],
      creator: siteMeta.socialMedia.twitter,
    },
    verification: {
      // Add your verification codes here when available
      google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

/**
 * Generate JSON-LD structured data for organization
 * @returns {Object} - Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteMeta.siteName,
    url: siteMeta.siteUrl,
    logo: `${siteMeta.siteUrl}/logo.png`,
    description: siteMeta.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMeta.address.street,
      addressLocality: siteMeta.address.city,
      addressRegion: siteMeta.address.state,
      postalCode: siteMeta.address.zipCode,
      addressCountry: siteMeta.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteMeta.contactPhone,
      email: siteMeta.contactEmail,
      contactType: 'Customer Service',
    },
    sameAs: [
      siteMeta.socialMedia.linkedin,
      siteMeta.socialMedia.twitter,
      siteMeta.socialMedia.facebook,
    ],
  };
}

/**
 * Generate JSON-LD structured data for breadcrumb
 * @param {Array} items - Breadcrumb items [{name, url}]
 * @returns {Object} - Breadcrumb schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteMeta.siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate JSON-LD structured data for course
 * @param {Object} course - Course data
 * @returns {Object} - Course schema
 */
export function generateCourseSchema(course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
    },
    courseCode: course.id,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      duration: course.duration,
    },
    educationalLevel: course.level,
  };
}

/**
 * Generate JSON-LD structured data for service
 * @param {Object} service - Service data
 * @returns {Object} - Service schema
 */
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'Organization',
      name: siteMeta.siteName,
      url: siteMeta.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
  };
}

/**
 * Create a sitemap entry helper
 * @param {string} path - URL path
 * @param {string} priority - Priority (0.0 - 1.0)
 * @param {string} changeFrequency - Change frequency
 * @returns {Object} - Sitemap entry
 */
export function createSitemapEntry(path, priority = '0.7', changeFrequency = 'weekly') {
  return {
    url: `${siteMeta.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority: parseFloat(priority),
  };
}
