import React from 'react'
import { abhayaLibre } from '@/font';
import styles from "./ProductDetails.module.css"
import Image from 'next/image';
import { cardData } from '@/constant/card';
function ProductDetails(props:{cardid:number}) {
  const data = cardData.find((item)=>{return item.id == props.cardid})
  return (
    <div>
     <section className={styles.productdetails}>
     <div className={styles.leftimagediv} style={{backgroundColor:data?.backgroundColor}}>
        <Image src={data?.src || "/Girl-pic1.png"} alt={'pic'} width={400} height={600} className={styles.img}></Image>
     </div>
     <div className={styles.righttextdiv}>
        <h1 className={abhayaLibre.className} style={{marginRight:"145px"}}> {data?.heading}</h1>
        <p >{data?.price} </p>
        <div className={styles.cartdiv}>
            < input  type="number" value={1} style={{fontSize:"19px"}}/>
            <button>&nbsp;&nbsp;ADD TO CART</button>
        </div>
        <p style={{marginTop: "90px",fontSize:"30px",display:"flex"}}>Products Details</p>
       <br />
        <p className={styles.mypara} style={{marginTop: "128px",fontSize:"15px",display:"flex"}}>
        <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          In deserunt magni quaerat voluptatum soluta, atque ullam   <br/>
          quod blanditiis eligendi, natus, laborum odit molestiae aperiam.  <br/>
           Eaque vitae ab sed magnam distinctio?  <br/>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit.   <br/>
          In deserunt magni quaerat voluptatum soluta, atque ullam  <br/> 
          quod blanditiis eligendi, natus, laborum odit molestiae aperiam.  <br/>
        </p>
     </div>
     <br/>
        <br/>
     </section>
     <br/>
    </div>
  )
}

export default ProductDetails
