import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BiRupee, BiCartAdd } from 'react-icons/bi'
import { addToCart } from '@/utils/cartitems'
import { toast } from 'react-hot-toast'

function ProductCart({product}){
    return(
            <div className="card">
                <Link href={`/product/${product?.id}`}>
                    <div className='object-fit-cover'>
                        <Image src={product?.thumbnail} width={200} height={200} alt={product.title} className="card-img-top" />
                    </div>
                </Link>
                   <div className="card-body bg-warning">
                    <Link href={`/product/${product?.id}`} className='text-decoration-none'>
                      <h5 className="card-title text-black">{product?.title}</h5>
                    </Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className='card-title d-flex align-items-center'>
                             <BiRupee size={21}/>
                             {product?.price}
                        </h6>
                       
                        <h7 className='card-title d-flex text-black'>
                            {product?.stock} Items Left
                       </h7>
                                             
                     <div className='d-flex'>
                       <button className='btn btn-light btn-sm mx-2' onClick={(e) => {addToCart(product,1), toast.success('Added in cart')}}><BiCartAdd size={22}/></button>
                       <button className='btn btn-success btn-sm'>Buy</button>
                     </div>

                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <b>Rating :</b> {product?.rating}

                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <strong>Discounted percentage :</strong> {product?.discountPercentage}%

                    </div>
                                        
                   </div>
             </div>
    )
}


export default ProductCart