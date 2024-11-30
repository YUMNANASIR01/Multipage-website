'use client'


import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { motion ,AnimatePresence} from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [open,setOpen]=useState<boolean>(false)
  const showfunction = ()=>{
    setOpen(!open)
  }
  return (
       <>
      <nav className={styles.nav}>
      <h1 >FASHION</h1>
      <AnimatePresence>
      {open== true? (
        
        <motion.div className={`${styles.linksdiv} ${styles.adjust}`} 
        key={"menu"}
        initial = {{height:0 , opacity:0}}
        animate={{height:"350px" ,opacity:1}}
        exit={{height:0 ,opacity:0}}
        transition={{duration:0.3, ease: "easeInOut"}}
        >
      <ul>
        <li><Link href='/' style={{color:"#fb7f38",fontWeight:"700"}}>HOME</Link></li>
        <li><Link href='/shop'>SHOP</Link></li>
        <li><Link href='/services'>SERVICES</Link></li>
        <li><Link href='/contact'>CONTACT</Link></li>
      </ul>
      <button>LOGIN</button>
      </motion.div>
     
      ):
      (
        <div className={`${styles.linksdiv}`}>
      <ul>
        <li><Link href='/' style={{color:"#fb7f38",fontWeight:"700"}}>HOME</Link></li>
        <li><Link href='/shop'>SHOP</Link></li>
        <li><Link href='/services'>SERVICES</Link></li>
        <li><Link href='/contact'>CONTACT</Link></li>
      </ul>
      <button>LOGIN</button>
      
      </div>)}
      </AnimatePresence>
      <GiHamburgerMenu  size={35} className={styles.menu} onClick={showfunction}/>
    
      </nav>
      
      </>
  );
}

export default Navbar
