import React from 'react';
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import Button from '@/components/common/Button';
import servicesData from '@/content/services.json';
import coursesData from '@/content/courses.json';
import styles from './page.module.css';
import WhyChooseUs from '@/components/common/WhyChooseUs';

const service = servicesData.services.find(s => s.slug === 'solidworks-training');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['SOLIDWORKS training', 'CAD courses', 'mechanical design training'],
});

const certifications = [
  { id: 8, title: 'Certified SOLIDWORKS Design Associate (CSWA)', image: '/badges/certi8.png' },
  { id: 1, title: 'Certified SOLIDWORKS Design Professional (CSWP)', image: '/badges/certi1.png' },
  { id: 2, title: 'Certified SOLIDWORKS Sheet Metal Professional (CSWP-SM)', image: '/badges/certi2.png' },
  { id: 5, title: 'Certified SOLIDWORKS Weldments Professional (CSWP-WD)', image: '/badges/certi5.png' },
  { id: 4, title: 'Certified SOLIDWORKS Surfacing Professional (CSWP-SU)', image: '/badges/certi4.png' },
  { id: 3, title: 'Certified SOLIDWORKS Drawing Tools Professional (CSWP-DT)', image: '/badges/certi3.png' },
  { id: 6, title: 'Certified SOLIDWORKS Mold Making Professional (CSWP-MM)', image: '/badges/certi6.png' },
  { id: 9, title: 'Certified SOLIDWORKS Design Expert (CSWE)', image: '/badges/certi9.png' },
  { id: 10, title: 'Certified SOLIDWORKS Simulation Associate (CSWA-S)', image: '/badges/certi10.png' },
  { id: 11, title: 'Certified SOLIDWORKS Simulation Professional (CSWP-S)', image: '/badges/certi11.png' },
  { id: 12, title: 'Certified SOLIDWORKS Simulation Expert (CSWE-S)', image: '/badges/certi12.png' },
  { id: 13, title: 'Certified SOLIDWORKS Flow Simulation (CSWP-Flow)', image: '/badges/certi13.png' },
  { id: 7, title: 'Certified SOLIDWORKS CAM Professional (CSWP-CAM)', image: '/badges/certi7.png' },
];

const roles = [
  { id: 1, title: 'SOLIDWORKS Design Engineer', color: '#EF4444' },
  { id: 2, title: 'CAD/CAM Design Engineer', color: '#16A34A' },
  { id: 3, title: 'Product Design Engineer', color: '#FACC15' },
  { id: 4, title: 'Simulation Engineer', color: '#8B5CF6' },
];

const introParagraphs = [
  "Bhavya Future Edutech is an Authorized Training Centre for SOLIDWORKS - Dassault Systemes, S.A France.",
  "Our SOLIDWORKS training delivers hands-on experience in concept planning, design visualization, 3D modeling, and production-ready engineering drawings.",
  "We offer courses in Modeling, Computer Aided Design (CAD), Computer Aided Engineering (CAE), Computational Fluid Dynamics (CFD), Simulation & Analysis, Computer Aided Manufacturing (CAM) and 3D Printing.",
  "We provide bespoke corporate training solutions designed to align with organizational objectives, engineering standards, and operational workflows. Our programs are structured around real-world industry applications, enabling engineering teams to enhance technical proficiency, improve design effectiveness, and maximize the strategic use of SOLIDWORKS in support of manufacturing excellence and business performance."
];

export default function SolidWorksTrainingPage() {
  const courses = coursesData.courses;
  const serviceSchema = generateServiceSchema(service);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SOLIDWORKS Training</h1>
        </div>
        <img
          src="/solidworks-autho-centre.jpg"
          alt="Authorized Training Centre"
          className={styles.heroAuthLogo}
        />
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introBox}>
            <div className={styles.introText}>
              {introParagraphs.map((para, index) => (
                <p key={index} style={index === 0 ? { color: '#6B21A8', fontWeight: '700', fontSize: '1.2rem', textAlign: 'center' } : {}}>
                  {index === 3 ? (
                    <>
                      We provide <strong>bespoke corporate training</strong> solutions designed to align with organizational objectives, engineering standards, and operational workflows. Our programs are structured around real-world industry applications, enabling engineering teams to enhance technical proficiency, improve design effectiveness, and maximize the strategic use of SOLIDWORKS in support of manufacturing excellence and business performance.
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.courses} id="courses">
        <div className="container">
          <h2 className={styles.sectionTitle}>Courses Offered</h2>
          <div className={styles.coursesGrid}>
            {courses.map((course) => {
              const formatTitle = (title) => {
                const parts = title.split(' (');
                if (parts.length > 1) {
                  return (
                    <>
                      {parts[0]} <span style={{ whiteSpace: 'nowrap' }}>({parts[1]}</span>
                    </>
                  );
                }
                return title;
              };

              return (
                <div key={course.id} className={styles.courseCard}>
                  <div className={styles.courseImage}>
                    {course.image ? (
                      <img src={course.image} alt={course.title} />
                    ) : (
                      <span>{course.title}</span>
                    )}
                  </div>
                  <div className={styles.courseContent}>
                    <h3>{formatTitle(course.title)}</h3>
                    <p className={styles.courseDesc}>{course.description}</p>
                  </div>
                </div>
              );
            })}
            {/* Adding a couple of placeholder cards to fill grid if needed or leave as is */}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certifications}>
        <div className="container">
          <h2 className={styles.certTitle}>SOLIDWORKS International Certifications</h2>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.id} className={styles.certItem}>
                <div className={styles.certBadge}>
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className={styles.certTextBox}>
                  {cert.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us */}
      <WhyChooseUs className={styles.whyChooseUsOverride} />

      {/* Roles Section */}
      <section className={styles.roles}>
        <div className="container">
          <div className={styles.rolesHeader}>
            <h2 className={styles.rolesTitle}>Roles We prepare you for</h2>

          </div>
          <div className={styles.rolesGrid}>
            {roles.map((role, index) => (
              <div key={role.id} className={styles.roleCard} style={{ borderColor: role.color }}>
                <div className={styles.roleNumber} style={{ backgroundColor: role.color }}>{index + 1}</div>
                <h4 style={{ color: role.color }}>{role.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i === 1 && i < role.title.split(' ').length - 1 ? <br /> : ''}
                  </React.Fragment>
                ))}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} id="contact">
        <div className="container">
          <h2>Ready to Master SOLIDWORKS?</h2>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="purple" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
