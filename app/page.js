import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Hero from '@/components/layout/Hero';
import WhyChooseUs from '@/components/common/WhyChooseUs';
import ClientsMarquee from '@/components/common/ClientsMarquee';
import Testimonials from '@/components/common/Testimonials';
import servicesData from '@/content/services.json';
import coursesData from '@/content/courses.json';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Leading provider of SolidWorks training, placement services, and design engineering manpower solutions. Transform your career with expert-led courses and industry connections.',
  canonical: '/',
});

export default function HomePage() {
  const services = servicesData.services;
  const featuredCourses = coursesData.courses.slice(0, 3);

  return (
    <>
      <Hero />

      {/* About Us Section - Cream */}
      <section className={`${styles.about} ${styles.creamBg}`}>
        <div className="container">
          <h2 className={styles.aboutTitle}>About Us</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about_us.jpeg"
                alt="About CAB Authorized Training Centre"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h3 className={styles.mainHeading}>
                <span>Bhavya Future EduTech is Shaping the Future</span> <span className={styles.orangeTextHeading}>of Design Engineering and one stop solutions for all type of CAD Services</span>
              </h3>
              <p className={styles.italicDesc}>
                We are a recognized training organization dedicated to providing comprehensive education and professional
                services in SOLIDWORKS, a powerful solid modeling CAD (Computer-Aided Design), CAE (Computer-Aided
                Engineering), and 3D Printing platform widely adopted across the design and manufacturing industries.
              </p>

              <div className={styles.numberedList}>
                <div className={styles.listItem}>
                  <span className={styles.listNumber}>1. </span>

                  <strong>Industry-aligned courses</strong> designed for designers, engineers, and architects across
                  Mechanical, Electrical, Automotive, Robotics, Mechatronics, and Aeronautical fields.

                </div>
                <div className={styles.listItem}>
                  <span className={styles.listNumber}>2. </span>

                  <strong>Hands-on practical learning</strong> with expert guidance to bridge the gap between academic
                  concepts and real-world industrial applications.

                </div>
              </div>

              <Link href="/about" className={styles.knowMoreLink}>
                Know More <span className={styles.chevron}>&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Peach */}
      <section className={`${styles.services} ${styles.peachBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Services We Offer</h2>
            <p>
              Comprehensive solutions for students, professionals, corporates and industries.
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service) => {
              // Map service IDs to images and variants
              const serviceConfig = {
                'solidworks-training': {
                  image: '/services/training.jpeg',
                  variant: 'orange',
                },
                'placement': {
                  image: '/services/placements.png',
                  variant: 'purple',
                },
                'design-services-manpower': {
                  image: '/services/3d.jpeg',
                  variant: 'orange',
                },
              };

              const config = serviceConfig[service.id] || { variant: 'orange' };

              return (
                <Card
                  key={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                  features={service.features}
                  image={config.image}
                  variant={config.variant}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Cream */}
      <WhyChooseUs className={styles.creamBg} />

      {/* Clients Marquee Section - Peach */}
      <ClientsMarquee className={styles.peachBg} />

      {/* Testimonials Section - Cream */}
      <Testimonials className={styles.creamBg} />

      {/* CTA Section */}
      <section className={styles.cta} id="contact">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Ready to Accelerate Your <span>Design Engineering Career?</span>
            </h2>
            <p className={styles.ctaParagraph}>Join the ranks of certified professionals.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/solidworks-training" className={styles.ctaButton}>
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

