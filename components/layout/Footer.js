import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.column}>
            <div className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.jpeg" alt="Bhavya Future EduTech" className={styles.logo} />
              <div>
                <div className={styles.brandTextContainer}>
                  <span className={styles.brandNameBhavya}>Bhavya</span>
                  <span className={styles.brandNameFuture}>Future EduTech</span>
                </div>
                <p className={styles.tagline}>Learn Design, Lead the World</p>
              </div>
            </div>
          </div>

          {/* Institute */}
          <div className={styles.column}>
            <h4>INSTITUTE</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>SERVICES</h4>
            <ul>
              <li>
                <Link href="/services/solidworks-training">
                  SOLIDWORKS Training
                </Link>
              </li>
              <li>
                <Link href="/services/placement">Placement</Link>
              </li>
              <li>
                <Link href="/services/design-services-manpower">
                  Design Services and Manpower Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className={styles.column}>
            <h4>GET IN TOUCH</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} size={20} />
                <p>
                  802, 8th Floor, Yashkamal Building, Opp Kalaghoda, Sayajiganj, Vadodara, Gujarat - 390020                </p>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.icon} size={20} />
                <a href="tel:09376211272">+91 8320977346 </a>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} size={20} />
                <a href="mailto:admissions@sw-institute.com">solidworks.trainingcentre@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Bhavya Future EduTech. All rights reserved.
          </p>

          <div className={styles.social}>
            <a href="https://www.instagram.com/solidworks_authorised_center?igsh=eG94d2w5M2tjemQ2" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="https://wa.me/+918320977346 " target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Phone size={24} /></a> {/* Using Phone as generic replacement if MessageCircle not available, but Lucide has MessageCircle/Phone */}
            <a href="http://www.linkedin.com/in/solidworks-authorized-training-services-center-vadodara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61583191423828#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
          </div>

          <p className={styles.credits}>
            Made by CtrlAltBuild Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
