import styles from './services.module.css';

function Services() {
  return (
    <div className={styles.services}>
      <h1 className={styles.heading}>Our Services</h1>
      <p className={styles.description}>
        We offer a variety of services to elevate your fashion experience:
      </p>
      <div className={styles.servicesList}>
        <div className={styles.serviceCard}>
          <h2>Custom Tailoring</h2>
          <p>
            Get personalized designs tailored to your exact measurements and
            style preferences.
          </p>
          <a href="#custom-tailoring" className={styles.serviceLink}>
            Learn More
          </a>
        </div>
        <div className={styles.serviceCard}>
          <h2>Wardrobe Consultation</h2>
          <p>
            Professional advice on how to refresh and organize your wardrobe
            with our latest trends.
          </p>
          <a href="#wardrobe-consultation" className={styles.serviceLink}>
            Book Now
          </a>
        </div>
        <div className={styles.serviceCard}>
          <h2>Alterations</h2>
          <p>
            Expert alteration services to ensure your clothing fits perfectly.
          </p>
          <a href="#alterations" className={styles.serviceLink}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;


