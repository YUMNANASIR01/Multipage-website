import React from 'react'
import styles from "./heading.module.css"
function Heading() {
  return (
    <div className={styles.heading}>
      <h1>OUR &nbsp;PRODUCTS</h1>
      <div className={styles.underline}>
      </div>
      <p>
      "Our products combine innovation with premium quality, designed to make your life easier and better. We provide unique and effective solutions tailored to meet your everyday needs, ensuring a pleasant experience each day. Our products are not only reliable but also continue to meet the standards of performance and innovation over time."</p>
    </div >
  )
}

export default Heading
