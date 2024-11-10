import styles from './footer.module.css'
import { inter } from '@/font';
import { inriaSerif } from '@/font';
// import { color } from 'framer-motion';
// import { style } from 'framer-motion/client';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
function Footer() {
  return (
    <div>
      <section className={styles.footer}>
      <div className={styles.Fashion}>
        <h1 className={ inter.className}>FASHION</h1>
        <p className={inriaSerif.className}>SOCIAL MEDIA</p>

       <div className={styles.icons}>
       <FaFacebookSquare />
        <FaXTwitter />
        <FaInstagram />
       </div>
      </div>

      <div className={styles.shop}>
        <h1>SHOP</h1>
        <ul>
            <li>Product</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Release</li>
        </ul>

      </div>
      <div className={styles.COMPANY}>
        <h1 >COMPANY</h1>
        <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
        </ul>
      </div>

      <div className={styles.submit}>
        <h1>STAY UP TO DATE</h1>
        <div className={styles.inputDiv}>
            <input type="text"  placeholder= ' Enter Your Email ' className={styles.input} color='brown' /><button>SUBMIT</button>
        </div>
      </div>
      </section>
      <br />
      <br />
    </div>
   
  )
}

export default Footer
