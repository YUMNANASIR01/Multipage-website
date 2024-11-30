import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Get in Touch</h1>
      <p className={styles.description}>
        We'd love to hear from you! Whether you have a question about our products, <br />
        need assistance, or just want to share your feedback, feel free to reach out.
      </p>

      <div className={styles.contactContainer}>
       
        <form className={styles.contactForm}>
          <h2>Contact Us</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
         
            <textarea id="message"  placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

       
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@clothingwebsite.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Fashion St, Trendy City, TC 45678</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>Facebook</a>
            <a href="#" className={styles.socialIcon}>Instagram</a>
            <a href="#" className={styles.socialIcon}>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

