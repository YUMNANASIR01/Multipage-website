import styles from './ProductSection.module.css'
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { cardData } from "@/constant/card"
import Link from 'next/link';

function ProductSection() {
  return (
    <div>
      <section className={styles.product}>

        {cardData.map((item, index) => {
          return (
            <Link href={`/shop/${item.id}`}><div className={styles.card} key={index}>
            <div className={styles.topImgDiv} style={{ backgroundColor: item.backgroundColor }}>
              <Image src={item.src} alt={"picture"} width={300} height={600} className={styles.cardImg}></Image>
            </div>
            <div className={styles.bottomTextDiv}>
              <div className={styles.starDiv}>
                {[...Array(item.rating)].map((_, index) => { return <IoStar className={styles.star}style={{marginTop:"11px"}}  color='rgb(244, 177, 8)' size={30}  key={index} /> })}
              </div>
              <p style={{fontSize: "1.25rem"}}>{item.heading}</p>
              <p style={{ fontWeight: 700, color:'rgb(58, 53, 53)'}}>{item.price}</p>
            </div>
            <br />
          </div></Link>
          )
        })}





      </section>
    </div>
  )
}

export default ProductSection

