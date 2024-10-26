import React, { useEffect, useState } from "react";
import './IphoneStyle.css'
import {Link} from 'react-router-dom'


function Iphone() {
   
   const [iphoneinfo, setIphone] = useState ([])

   useEffect(() => {
   fetch('http://localhost:3002/iphones')
   .then(response => response.json())
   then((data) => {
      setIphone (data.products)
   })
 },[])
 
 console.log(iphoneinfo);

   return (
   <>
     <div className="product-container">
      {iphoneinfo.map(product =>(
      <div key={product.product_id} className="product-image">
         <div className="product-content">
            <h2>{product.product_name} </h2>
            <p> {product.product_brief_description} </p>
            <p> {product.starting_price} </p>
            <p> {product.price_range} </p>
            <Link to={`/iphone/${product.product_url}`} >Learn more</Link>
         </div>
      </div>
      ))}
     </div>
   </>
   )
}

export default Iphone





 // <>
    //   <Routers>
    //     <Route path='' element={<Layout />}>
    //        <Route path='/' element={<Home/>}/>
    //        <Route path='iphone' element={<Iphone/>}/>
    //        <Route path="/iphone/:id" element={<IphoneDetail/>}/>
    //        <Route path='*' element={<Four04/>}/>
    //     </Route>
    //   </Routers>
    // </>
