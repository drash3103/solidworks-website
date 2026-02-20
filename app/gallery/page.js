import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import CallToAction from '@/components/common/CallToAction';
import styles from './page.module.css';

const GALLERY_DIR = path.join(process.cwd(), 'public/gallery_Img');

// Map directory names to display titles
const CATEGORY_MAP = {
    '2.assembly': 'Assembly Drawings',
    '3.sheet metal': 'Sheet Metal Drawings',
    '4.weldment': 'Weldment Drawings',
    '5.surfacing': 'Surfacing Drawings'
};

function getGalleryFiles() {
    const categories = {};

    if (!fs.existsSync(GALLERY_DIR)) {
        return categories;
    }

    const dirs = fs.readdirSync(GALLERY_DIR).filter(file => {
        return fs.statSync(path.join(GALLERY_DIR, file)).isDirectory();
    });

    dirs.forEach(dir => {
        if (CATEGORY_MAP[dir]) {
            const dirPath = path.join(GALLERY_DIR, dir);
            const files = fs.readdirSync(dirPath).filter(file =>
                file.toLowerCase().endsWith('.pdf')
            );

            if (files.length > 0) {
                categories[CATEGORY_MAP[dir]] = {
                    dirName: dir,
                    files: files.sort() // Sort files alphabetically
                };
            }
        }
    });

    return categories;
}

export const metadata = {
    title: 'Design Gallery - Bhavya Future EduTech',
    description: 'Explore our collection of engineering drawings and designs including Assembly, Sheet Metal, Weldment, and Surfacing.',
};

export default function GalleryPage() {
    const galleryData = getGalleryFiles();

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Design Gallery</h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', fontFamily: 'var(--font-noto-sans)' }}>
                        Explore our engineering design portfolio
                    </p>
                </div>
                <img
                    src="/solidworks-autho-centre.jpg"
                    alt="Authorized Training Centre"
                    className={styles.heroAuthLogo}
                />
            </section>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {Object.values(galleryData).flatMap(data =>
                        data.files.map(file => ({ ...data, file }))
                    ).map(({ dirName, file }, index) => (
                        <div
                            key={index}
                            className={styles.card}
                        >
                            <div className={styles.cardContent}>
                                {/* Display JPG preview */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`/gallery_Img/${dirName}/${file.replace('.pdf', '.jpg').replace('.PDF', '.jpg')}`}
                                    alt={file}
                                    className={styles.pdfPreview}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {Object.keys(galleryData).length === 0 && (
                    <div className="text-center py-12">
                        <p>No gallery items found.</p>
                    </div>
                )}
            </div>

            <CallToAction
                title="Ready to bring your designs to life?"
                subtitle="Connect with us for professional design services and training."
                buttonText="Contact Us"
                buttonLink="/contact"
            />
        </div>
    );
}
