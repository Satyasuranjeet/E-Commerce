import React from 'react'
import'./ReleatedProduct.css'
import Item from '../Items/Item'
import data_product from '../Asserts/data'
const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
    <h1>Related Product</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct