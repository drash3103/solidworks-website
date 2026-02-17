import React from 'react';
import styles from './ClientsMarquee.module.css';

const logos = [
    "/Company Logo/A P CLUTCHES PVT LTD.png",
    "/Company Logo/BAroda hi tech.jpg",
    "/Company Logo/DSS Automation.png",
    "/Company Logo/ET.png",
    "/Company Logo/Emphetech.jpg",
    "/Company Logo/Expel Prosys.jpg",
    "/Company Logo/Flamertech.png",
    "/Company Logo/Flexatherm.png",
    "/Company Logo/GBT Composites Technology Ltd..jpg",
    "/Company Logo/Growell.png",
    "/Company Logo/Idex.jpg",
    "/Company Logo/L & T.png",
    "/Company Logo/Narkhede.png",
    "/Company Logo/Orbit.jpg",
    "/Company Logo/PAkona.png",
    "/Company Logo/Popukar Switchgear.jpg",
    "/Company Logo/RSIS.jpg",
    "/Company Logo/Rotex.jpg",
    "/Company Logo/SDEC.png",
    "/Company Logo/TATA_Consultancy_Services.png",
    "/Company Logo/Ultimate Switchgear.jpg",
    "/Company Logo/UnipackTransLogo.png",
    "/Company Logo/Vexma Technologies.png",
    "/Company Logo/Xylem.png",
    "/Company Logo/moflex suspensions llp.png",
    "/Company Logo/parth Kitchen.png",
    "/Company Logo/schurter-logo-approved.png"
];

export default function ClientsMarquee({ className }) {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className="container">
                <h3 className={styles.heading}>
                    Trusted by Industry Leaders
                </h3>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {/* Duplicate the logos array to create seamless loop */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className={styles.logoItem}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo}
                                    alt="Client logo"
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
