import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Send } from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
    title: 'Contact Us',
    description: 'Get in touch with Bhavya Future EduTech. Visit our center in Vadodara or contact us for inquiries.',
    canonical: '/contact',
});

export default function ContactPage() {
    const googleMapsUrl = "https://www.google.com/maps/dir//Bhavya+Future+EduTech+-+SolidWorks+Authorized+Training+Center+8th+Floor,+Yashkamal+Building+Sayajigunj,+Vadodara,+Gujarat+390005";

    return (
        <div className={styles.pageContainer}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                </div>
                <img
                    src="/solidworks-autho-centre.jpg"
                    alt="Authorized Training Centre"
                    className={styles.heroAuthLogo}
                />
            </section>

            {/* Contact Content */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.cardContainer}>

                        {/* Map Side (Embed) */}
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://maps.google.com/maps?q=Yashkamal+Building,+Sayajigunj,+Vadodara,+Gujarat+390005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Details Side */}
                        <div className={styles.detailsWrapper}>
                            <div>
                                <h2 className={styles.contactTitle}>Get in Touch</h2>
                                <p className={styles.contactSubtitle}>We&apos;d love to hear from you. Here&apos;s how you can reach us.</p>

                                <div className={styles.infoList}>
                                    <div className={styles.infoItem}>
                                        <div className={styles.iconBox}><MapPin size={24} /></div>
                                        <div>
                                            <h3 className={styles.infoLabel}>Our Office</h3>
                                            <p className={styles.infoText}>
                                                8th Floor, Yashkamal Building, 802,<br />
                                                opp. KalaGhoda, Sayajiganj,<br />
                                                Vadodara, Gujarat 390020
                                            </p>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.iconBox}><Phone size={24} /></div>
                                        <div>
                                            <h3 className={styles.infoLabel}>Call Us</h3>
                                            <p className={styles.infoText}>+91 83209 77346 </p>
                                            <p className={styles.infoSubText}>Mon-Sat from 9am to 6pm</p>
                                        </div>
                                    </div>

                                    <div className={styles.infoItem}>
                                        <div className={styles.iconBox}><Mail size={24} /></div>
                                        <div>
                                            <h3 className={styles.infoLabel}>Email Us</h3>
                                            <p className={styles.infoText}>solidworks.trainingcentre@gmail.com</p>
                                            <p className={styles.infoSubText}>We reply within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socialSection}>
                                <p className={styles.socialLabel}>Follow on our socials</p>
                                <div className={styles.socialIcons}>
                                    <a href="https://www.instagram.com/solidworks_authorised_center?igsh=eG94d2w5M2tjemQ2" className={styles.socialLink}><Instagram size={24} /></a>
                                    <a href="+91 83209 77346" className={styles.socialLink}><Phone size={24} /></a> {/* WhatsApp usually represented by phone or message circle if Brand icon not available, using Phone for consistency or MessageCircle? Design shows Whatsapp logo. Lucide has MessageCircle or standard icons only. Will stick to available ones or SVG if needed. Used Phone as placeholder or check if MessageCircle is better.. Actually I remember Lucide has no Brand icons. Footer uses custom SVGs or specific imports. I'll use text or generic for now */}
                                    {/* Re-checking footer implementation for consistent icons */}
                                    <a href="#" className={styles.socialLink}><Mail size={24} /></a>
                                    <a href="http://www.linkedin.com/in/solidworks-authorized-training-services-center-vadodara" className={styles.socialLink}><Linkedin size={24} /></a>
                                    <a href="#" className={styles.socialLink}><Facebook size={24} /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
