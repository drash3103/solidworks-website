import React from 'react';
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import CallToAction from '@/components/common/CallToAction';

import servicesData from '@/content/services.json';
import styles from './page.module.css';
import {
  Users,
  Settings,
  Award,
  Clock,
  Users2,
  PenTool,
  Search,
  Box,
  Printer,
  Truck,
  HardHat,
  HandCoins,
  ClipboardCheck,
  CalendarCheck,
  Handshake,
  PencilRuler
} from 'lucide-react';

const service = servicesData.services.find(s => s.slug === 'design-services-manpower');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['design engineering services', 'CAD drafting', 'manpower supply', 'reverse engineering'],
});

const designServices = [
  { id: 1, title: '2D Drafting & GD&T', image: '/Dservices/design1.jpeg' },
  { id: 2, title: '3D CAD Modeling', image: '/Dservices/design2.jpeg' },
  { id: 3, title: 'Reverse Engineering', image: '/Dservices/design3.jpeg' },
  { id: 4, title: 'Product & Sheet Metal Design', image: '/Dservices/design4.jpeg' },
  { id: 5, title: '3D Printing & Prototyping', image: '/Dservices/design5.jpeg' },
];

const reasons = [
  {
    id: 1,
    title: 'Experienced CAD Professionals with strong industry expertise',
    icon: HardHat,
    color: '#EA580C'
  },
  {
    id: 2,
    title: 'Cost-Effective Engineering Solutions',
    icon: HandCoins,
    color: '#6B21A8'
  },
  {
    id: 3,
    title: 'High-Quality & Accurate Designs meeting industry standards',
    icon: ClipboardCheck,
    color: '#EAB308'
  },
  {
    id: 4,
    title: 'On-Time Project Delivery with structured workflows',
    icon: CalendarCheck,
    color: '#EA580C'
  },
  {
    id: 5,
    title: 'Trusted & Transparent Partnerships focused on long-term value',
    icon: Handshake,
    color: '#6B21A8'
  },
  {
    id: 6,
    title: 'Customized Design Support tailored to project need',
    icon: PencilRuler,
    color: '#EAB308'
  },
];

const workSteps = [
  { id: 1, title: 'Consultation', desc: 'Understanding your design requirements and project scope.', icon: Search },
  { id: 2, title: 'CAD Design', desc: 'Developing precise 2D/3D CAD models and assemblies.', icon: Box },
  { id: 3, title: 'Printing', desc: 'Prototype development using advanced 3D printing tech.', icon: Printer },
  { id: 4, title: 'Delivery', desc: 'Final project delivery and post-production support.', icon: Truck },
];

export default function DesignServicesManpowerPage() {
  const serviceSchema = generateServiceSchema(service);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <div className={styles.pageWrapper}>
      <StructuredData data={serviceSchema} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Explore Our Designing Services & Manpower Supply</h1>
          </div>
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
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p>
                We are a professionally managed engineering design consultancy based in <span className={styles.highlight}>Vadodara, Gujarat</span>, specializing in <span className={styles.highlight}>CAD drafting, engineering design services, and manpower supply</span>. Our mission is to bridge technical excellence with practical solutions by providing skilled resources and accurate, production-ready designs to support industry needs.
              </p>
              <p>
                Backed by a strong foundation in engineering knowledge and industry best practices, we deliver <span className={styles.highlight}>high-quality, cost-effective, and timely solutions</span> tailored to the unique requirements of each project. Along with design and drafting services, we offer <span className={styles.highlight}>qualified design engineering manpower</span> to support client operations, project execution, and workforce requirements across industries.
              </p>
              <p>
                We are committed to working within defined budgets and timelines while maintaining the highest standards of accuracy, quality, and professionalism. Beyond service delivery, we focus on building <span className={styles.highlight}>long-term partnerships</span> based on trust, transparency, and reliability.
              </p>
              <p>
                Client satisfaction is at the core of everything we do. Through value-added services, skilled manpower support, and ethical practices, we strive to exceed expectations and establish ourselves as a trusted engineering design and manpower solutions partner.
              </p>
            </div>
            <div className={styles.introImage}>
              <img src="/3d_printer.jpeg" alt="3D Printer" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className={styles.designServices}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Design Services</h2>
          <div className={styles.designGrid}>
            {designServices.map((item) => (
              <div key={item.id} className={styles.designCard}>
                <div className={styles.designImage}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.designTitle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className={styles.featuredDesigns}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Designs</h2>
          <div className={styles.featuredGrid}>
            <div className={`${styles.featuredItem} ${styles.narrow}`}><img src="/3d_printer_designs/image 15.png" alt="Featured Design 1" /></div>
            <div className={`${styles.featuredItem} ${styles.wide}`}><img src="/3d_printer_designs/image 14.png" alt="Featured Design 2" /></div>
            <div className={`${styles.featuredItem} ${styles.wide}`}><img src="/3d_printer_designs/image 17.png" alt="Featured Design 3" /></div>
            <div className={`${styles.featuredItem} ${styles.narrow}`}><img src="/3d_printer_designs/image 18.png" alt="Featured Design 4" /></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Why Partner with <span className={styles.orangeText}>Us?</span>
          </h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard} style={{ borderColor: '#EA580C' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_1.svg" alt="Experienced CAD Professionals" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText} style={{ color: '#EA580C' }}>Experienced CAD Professionals with strong industry expertise</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#6B21A8' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_2.svg" alt="Cost-Effective" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText}>Cost-Effective Engineering Solutions</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#A16207' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_3.svg" alt="High-Quality" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText} style={{ color: '#A16207' }}>High-Quality & Accurate Designs meeting industry standards</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#EA580C' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_4.svg" alt="On-Time Delivery" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText} style={{ color: '#EA580C' }}>On-Time Project Delivery with structured workflows</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#6B21A8' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_5.svg" alt="Trusted Partnerships" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText}>Trusted & Transparent Partnerships focused on long-term value</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#A16207' }}>
              <div className={styles.reasonIcon}>
                <img src="/wcu_designs/wcu_6.svg" alt="Customized Design" className={styles.wcuIcon} />
              </div>
              <p className={styles.reasonText} style={{ color: '#A16207' }}>Customized Design Support tailored to project need</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={styles.howWeWork}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.withBar}`}>Our Approach</h2>
          <p className={styles.sectionSubtext}>Accelerating Excellence through our design stages.</p>
          <div className={styles.stepsGrid}>
            {workSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className={styles.stepItem}>
                  <div className={styles.stepCircle}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.stepContent}>
                    <h3>{step.id}. {step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Accelerate Your Engineering Career?"
        subtitle="Join millions of students and professionals and create your own world with us."
        buttonText="Send Now"
        buttonLink="#contact"
        secondaryButtonText="View All Courses"
        secondaryButtonLink="/services"
      />
    </div>
  );
}
