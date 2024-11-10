import BestSelling from '@/components/bestSelling/bestSelling'
import ProductDetails from '@/components/product-details/ProductDetails'
import React from 'react'

function DynamicProducts({params}:{params:{id:number}}) {
  return (
    <div>
     <ProductDetails cardid={params.id}/>
     < BestSelling />
    </div>
  )
}

export default DynamicProducts
