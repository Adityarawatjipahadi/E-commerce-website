import Link from 'next/link'
import React from 'react'
import { HiHome } from'react-icons/hi'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'

function Breadcrumb({title}){
    const router=useRouter();
    return(
        <div className='my-2 bg-light d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-1'>
                <div className='mx-2 d-flex align-items-center'>
                    <Link href="/" className='text-decoration-none text-black'>
                        <HiHome size={28}/>
                       
                    </Link>
                  
                </div>
                   <h4 className='text-center py-2 text-capitalize'>{title}</h4>
            </div>
            <div className='px-2'>
                <Link href="#" className='text-decoration-none text-black' onClick={()=>router.back()}>
                    <BsArrowLeftCircle size={28}/>
                </Link>
            </div>

        </div>
    )
}

export default Breadcrumb