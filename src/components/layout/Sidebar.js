import { fetcher } from '@/utils/swrFetcher'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxDash } from 'react-icons/rx'
import useSwr from 'swr'

function Sidebar(){

   // const categories=[1,2,3,4,5,6,7];

   const {data, error, isloading } = useSwr('https://dummyjson.com/products/categories',fetcher);

   if(error) return <div>Failed to load</div>
   if(isloading) return <div>Loading...</div>

    return(
        <div className='w-100'>
            <ul className='list-group'>
                <li className='list-group-item d-flex align-items-center navbar-top-bg'>
                <h5 className='text-white mt-2 text-uppercase'>
                    <GiHamburgerMenu/>Categories
                </h5>
        
                </li>
                {
                   data && data.map((category,i)=>{
                        return(
                            <Link key={i} href={`/category/${category}`} className='text-decoration-none'>
                            <li className='list-group-item list-group-item-action d-flex align-items-center text-uppercase'>
                                <RxDash size={24} className='m-2'/>
                                 {category}
                            </li>
                        </Link>
                        )
                    })
                }
               
            </ul>

        </div>
    )
}

export default Sidebar