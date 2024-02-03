import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';
const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId));
  return (
    <div className='product'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product