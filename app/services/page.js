import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import CallToAction from '@/components/common/CallToAction';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'Services We Offer',
  description: 'Explore our comprehensive services: SolidWorks Training, Placement Support, and Design Engineering Solutions.',
  canonical: '/services',
});

const servicesList = [
  {
    id: 'solidworks-training',
    title: 'SolidWorks Training',
    image: '/services/training_clean.jpeg',
    description: [
      "Bhavya Future Edutech is an Authorized Training Centre for SOLIDWORKS - Dassault Systemes, S.A France.",
      "Our SOLIDWORKS training delivers hands-on experience in concept planning, design visualization, 3D modeling, and production-ready engineering drawings.",
      "We offer courses in Modeling, Computer Aided Design (CAD), Computer Aided Engineering (CAE), Computational Fluid Dynamics (CFD), Simulation & Analysis, Computer Aided Manufacturing (CAM) and 3D Printing.",
      "We provide bespoke corporate training solutions designed to align with organizational objectives, engineering standards, and operational workflows. Our programs are structured around real-world industry applications, enabling engineering teams to enhance technical proficiency, improve design effectiveness, and maximize the strategic use of SOLIDWORKS in support of manufacturing excellence and business performance."
    ],
    buttonText: 'Know More',
    link: '/services/solidworks-training'
  },
  {
    id: 'placements',
    title: 'Placements',
    image: '/services/placements.png',
    description: [
      "Bhavya Future Edutech bridges the gap between education and employment by delivering industry-focused job-oriented training in the CAD/CAM domain. Beyond technical skill development, we provide end-to-end career support—including placement guidance, interview preparation, and professional mentorship—to help students build confidence and launch successful careers in engineering design and manufacturing.",
      "We offer exciting internship opportunities for engineering students and professionals, designed to build strong practical and industry-ready skills.",
      "We actively mentor final-semester engineering students on their academic projects, providing hands-on guidance, real-world engineering exposure, and a clear connection between theoretical concepts and industry applications.",
      "Additionally, we provide Internship and placement assistance to engineers and working professionals through our network of 1000+ associated and renowned client companies, helping candidates unlock meaningful career opportunities."
    ],
    buttonText: 'Know More',
    link: '/services/placement'
  },
  {
    id: 'design-services',
    title: 'Design Services & Manpower supply',
    image: '/services/design_services.jpeg',
    description: [
      "Bhavya Future Edutech provides professional 3D design, CAD/CAM job work and design manpower supply services for mechanical and industrial projects. Our team delivers high-precision modeling, detailed drafting, and skilled design resources to support design projects with industry standards.",
      "From concept development to manufacturing-ready drawings and reliable design manpower support, we ensure innovative, accurate, and reliable design solutions delivered on time."
    ],
    buttonText: 'Know More',
    link: '/services/design-services-manpower'
  }
];

const steps = [
  {
    id: 1,
    title: 'Consultation',
    desc: 'Understanding your career goals or project requirements.',
    color: '#EA580C' // Orange
  },
  {
    id: 2,
    title: 'Custom Plan',
    desc: 'Tailoring a course roadmap or design strategy for you.',
    color: '#16A34A' // Green
  },
  {
    id: 3,
    title: 'Execution',
    desc: 'Intensive training or precise design implementation.',
    color: '#CA8A04' // Darker Yellow for contrast
  },
  {
    id: 4,
    title: 'Success',
    desc: 'Certification, job placement, or project delivery.',
    color: '#6B21A8' // Purple
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.pageContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Services We Offer</h1>
        </div>
        <img
          src="/solidworks-autho-centre.jpg"
          alt="Authorized Training Centre"
          className={styles.heroAuthLogo}
        />
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.servicesStack}>
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${index % 2 !== 0 ? styles.reverseCard : ''}`}
                style={{ backgroundColor: index % 2 === 0 ? '#FFF8E7' : '#FFE3CB' }}
              >
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <div className={styles.serviceTextWrapper}>
                    {service.description.map((para, i) => (
                      <p key={i} className={styles.serviceText}>{para}</p>
                    ))}
                  </div>
                  <Link href={service.link} className={styles.knowMoreBtn}>
                    {service.buttonText}
                  </Link>
                </div>
                <div className={styles.serviceImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className={styles.excellenceSection}>
        <div className="container">
          <h2 className={styles.excellenceTitle}>How We Deliver Excellence</h2>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div
                key={step.id}
                className={styles.stepCard}
                style={{ '--borderColor': step.color }}
              >
                <div className={styles.stepNumber} style={{ backgroundColor: step.color }}>
                  {step.id}
                </div>
                <h3 className={styles.stepTitle} style={{ color: step.color }}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Start Your Solidworks Journey?"
        subtitle={null}
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

    </div>
  );
}
