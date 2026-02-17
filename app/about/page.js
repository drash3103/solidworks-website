import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import WhyChooseUs from '@/components/common/WhyChooseUs';
import CallToAction from '@/components/common/CallToAction';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'About Us',
  description: 'Learn about Bhavya Future EduTech, our mission, vision, and the future of design engineering education.',
  canonical: '/about',
});

const clients = [
  // Row 1
  "Xylem.png", "Ultimate Switchgear.jpg", "schurter-logo-approved.png", "UnipackTransLogo.png", "SDEC.png", "RSIS.jpg", "Idex.jpg", "Orbit.jpg",
  // Row 2
  "PAkona.png", "moflex suspensions llp.png", "Rotex.jpg", "Narkhede.png", "Growell.png", "Emphetech.jpg", "ET.png", "Expel Prosys.jpg",
  // Row 3
  "A P CLUTCHES PVT LTD.png", "Vexma Technologies.png", "parth Kitchen.png", "Popukar Switchgear.jpg", "DSS Automation.png", "GBT Composites Technology Ltd..jpg", "Flexatherm.png", "Flamertech.png",
  // Row 4
  "TATA_Consultancy_Services.png", "L & T.png", "BAroda hi tech.jpg"
];

const glimpses = [
  "photo1.jpeg", "photo2.jpeg", "photo3.jpeg",
  "photo4.jpeg", "photo5.jpeg", "photo6.jpeg"
];

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Our Institute</h1>
        </div>
        <img
          src="/solidworks-autho-centre.jpg"
          alt="Authorized Training Centre"
          className={styles.heroAuthLogo}
        />
      </section>

      {/* Intro Section - Cream */}
      <section className={`${styles.introSection} ${styles.creamBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Shaping the Future <span className={styles.highlightText}>of Design Engineering</span>
          </h2>
          <div className={styles.introContent}>
            <p>
              We are a recognized training organization dedicated to providing comprehensive education and professional services in SOLIDWORKS, a powerful solid modeling CAD (Computer-Aided Design), CAE (Computer-Aided Engineering), and 3D Printing platform widely adopted across the design and manufacturing industries.
            </p>
            <p>
              Our curriculum is carefully structured to meet current industry standards and technological advancements, offering industry-focused courses for designers, engineers, and architects in the fields of Mechanical, Electrical, Automotive, Robotics, Mechatronics  and Aeronautical Engineering.
            </p>
            <p>
              Through practical learning and expert guidance, we aim to bridge the gap between academic knowledge and industrial application.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Peach */}
      <section className={`${styles.splitSection} ${styles.peachBg}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mission.png" alt="Our Mission" className={styles.splitImage} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.splitTitle}>Our Mission</h2>
              <p>
                Our mission is to deliver exceptional SOLIDWORKS-based services through cutting-edge training, reliable design solutions, and career-building support. We are committed to nurturing talent, driving innovation, and bridging the gap between education and industry with integrity, quality, and a passion for engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Cream */}
      <section className={`${styles.splitSection} ${styles.creamBg}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.textContent}>
              <h2 className={styles.splitTitle}>Our Vision</h2>
              <p>
                To be the most trusted and innovative partner in SOLIDWORKS solutions, empowering individuals and industries to design, innovate, and build a smarter future.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/vision.png" alt="Our Vision" className={styles.splitImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Peach */}
      <WhyChooseUs className={styles.peachBg} />

      {/* Our Clients - Cream */}
      <section className={`${styles.clientsSection} ${styles.creamBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Our Clients</h2>
          <div className={styles.clientsGrid}>
            {clients.map((logo, index) => (
              <div key={index} className={styles.clientLogoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/Company Logo/${logo}`}
                  alt={`Client ${index + 1}`}
                  className={styles.clientLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glimpses - Peach */}
      <section className={`${styles.glimpsesSection} ${styles.peachBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Glimpses of Our Center</h2>
          <div className={styles.glimpsesGrid}>
            {glimpses.map((pic, index) => (
              <div key={index} className={styles.glimpseWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/center_pics/${pic}`}
                  alt={`Center Glimpse ${index + 1}`}
                  className={styles.glimpseImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.viewMoreWrapper}>
            <Link href="/gallery" className={styles.viewMoreBtn}>
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

    </div>
  );
}
