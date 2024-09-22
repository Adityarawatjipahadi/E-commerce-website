import { useRouter } from 'next/router';
import React from 'react'

function ThankYou(){
    const router=useRouter();
    console.log('router', router.query)
    return(
        <div>
         <h1>Thank you for Shopping! </h1>
        </div>

    )
}

export default ThankYou