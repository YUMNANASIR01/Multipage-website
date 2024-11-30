'use client'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import styles from './bestSelling.module.css'
import { abhayaLibre } from '@/font';
import { inter } from '@/font';
import { cardData } from '@/constant/card';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
// import { text } from 'stream/consumers';
// import { input } from 'framer-motion/client';
// import { Input } from 'postcss';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

function BestSelling() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true},[Autoplay({delay:2000,stopOnInteraction:false, stopOnMouseEnter:true })])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
  return (
    <div>
    <div className={styles.BestSelling}>
      <h1 className={abhayaLibre.className}>Best Selling</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>

      <div className={`${styles.cardSection} ${styles.embla} `}ref={emblaRef}>

        <div className={styles.embla__container}>

            {cardData.map((data)=>{return(
                    <div className={styles.embla__slide} key={data.id}>
                    <div className={styles.imageDiv} style={{backgroundColor:data.backgroundColor}}>
              <Image src={data.src} alt={'picture1'} height={200} width={450} className={styles.CardImage}></Image>
        </div>
        
        <div className={styles.cardtext}>
            <h1  className={ inter.className}>{data.heading}</h1>
           <div className={styles.priceDiv}> <pre>{data.price}  |  {data.rating} <FaStar size={26} className={styles.star}/>
           </pre></div>
        </div>
         </div>
                
            )})}
        </div>
</div>

<div>
<Link href={'/shop'}><button>See more</button></Link>
 
</div>
</div>
       
    </div>
  )
}

export default BestSelling
