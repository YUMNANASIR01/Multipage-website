
import Image from 'next/image';
import React from 'react'
import styles from './hero-section.module.css';
import { italian,  } from '@/font';
import { inter } from '@/font';

function Herosection() {
  return (
  
    <div>
        <section className={styles.hero}>
       <div className={styles.heroleft}>
       <h1 className={italian.className}>
       Discover And Find
        Your Own Fashion
       </h1>
       <p className={inter.className}>EXPLORE OUR CURATED OF  
        STYLISH CLOTHING AND <br /> 
        ACCESSORIES TRAILED, TO YOUR UNIQUE TASTE....</p>
       <button>EXPLORE NOW</button>
       </div>
       
       <div >
        <Image className='img '  src={'/cover-pic.png'} alt={'main-image'} height={960}width={800} ></Image>
       
       </div>
      </section>
    </div>
    
  )
}

export default Herosection
