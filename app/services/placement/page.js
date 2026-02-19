import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import CallToAction from '@/components/common/CallToAction';
import ClientsMarquee from '@/components/common/ClientsMarquee';
import { Building2, Users, Award, IndianRupee, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';
import styles from './placement.module.css';

export const metadata = generateSEOMetadata({
  title: 'Placement Assistance - Bhavya Future EduTech',
  description: 'Launch your career with our 100% placement support. We connect engineers with 1000+ top companies.',
  canonical: '/services/placement',
});

export default function PlacementPage() {
  return (
    <div className={styles.pageContainer}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Placement Assistance</h1>
        </div>
        <img
          src="/solidworks-autho-centre.jpg"
          alt="Authorized Training Centre"
          className={styles.heroAuthLogo}
        />
      </section>

      {/* Stats Bar */}
      <div className={styles.statsContainer}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Building2 size={28} /></div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>YEARS IN BUSINESS</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Users size={28} /></div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>STUDENTS TRAINED</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Award size={28} /></div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>90%</div>
                <div className={styles.statLabel}>STUDENTS PLACED</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><IndianRupee size={28} /></div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>CLIENTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className={styles.descSection}>
        <div className={styles.descBox}>
          <p>
            Bhavya Future EduTech bridges the gap between education and employment by delivering industry-focused, job-oriented training in the CAD / CAM. Beyond technical skill development, we provide end-to-end career support—including placement guidance, interview preparation, and professional mentorship—to help students build confidence and launch successful careers in engineering, design, and manufacturing.
          </p>
          <p>
            Bhavya Future EduTech offers exciting internship opportunities for engineering students and professionals, designed to build strong practical and industry-ready skills.
            We actively mentor final-semester engineering students on their academic projects, providing hands-on guidance, real-world engineering exposure, and a clear connection between theoretical concepts and industry applications.
          </p>
          <p>
            Additionally, we provide internship and placement assistance to engineers and working professionals through our network of 1000+ associated and renowned client companies, helping candidates unlock meaningful career opportunities and industry roles.
          </p>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className={styles.applySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Who Can Apply?</h2>
          <p className={styles.sectionSubtitle}>Our placement program is open to candidates from various educational backgrounds</p>

          <div className={styles.cardsGrid}>
            {/* Card 1 - Orange */}
            <div className={`${styles.applyCard} ${styles.cardOne}`}>
              <div className={styles.cardIconWrapper}>
                {/* <GraduationCap size={32} color="#EA580C" className={styles.cardIcon} /> */}
                <img src="/icons/student.png" alt="Engineering Students" className={styles.customIcon} />
              </div>
              <h3 className={styles.cardTitle}>Engineering Students</h3>
              <p className={styles.cardSub}>Degree / Diploma / ITI</p>
            </div>

            {/* Card 2 - Yellow */}
            <div className={`${styles.applyCard} ${styles.cardTwo}`}>
              <div className={styles.cardIconWrapper}>
                {/* <Briefcase size={32} color="#F59E0B" className={styles.cardIcon} /> */}
                <img src="/icons/professional.png" alt="Working Professionals" className={styles.customIcon} />
              </div>
              <h3 className={styles.cardTitle}>Working Professionals</h3>
            </div>

            {/* Card 3 - Purple */}
            <div className={`${styles.applyCard} ${styles.cardThree}`}>
              <div className={styles.cardIconWrapper}>
                {/* <CheckCircle size={32} color="#6B21A8" className={styles.cardIcon} /> */}
                <img src="/icons/graduate.png" alt="Engineering Graduates" className={styles.customIcon} />
              </div>
              <h3 className={styles.cardTitle}>Engineering Graduates</h3>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className={styles.trustedSection}>
        {/* <div className="container">
          <h4 className={styles.trustedTitle}>TRUSTED BY INDUSTRY LEADERS</h4>
        </div> */}
        <ClientsMarquee />
      </section>


      {/* CTA Section */}
      <CallToAction
        title="Ready to Start Your Dream Job?"
        subtitle={null}
        buttonText="Contact Us"
        buttonLink="/contact"
      />

    </div>
  );
}
