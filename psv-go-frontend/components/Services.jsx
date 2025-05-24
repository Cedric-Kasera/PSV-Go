import Image from 'next/image'
import React from 'react'
import Support from "@/Assets/support.png"
import Convenience from "@/Assets/convenience.png"
import Payments from "@/Assets/payments.png"

function Services() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-4 py-8 rounded-lg bg-secondary border'>
            <div className='flex flex-row gap-4'>
                <Image src={Payments} width={70} height={70} />
                <p>
                    <h1>Flexible payments</h1>
                    <span className="">Pay with M-pesa, credit cards or bank transfers. We have you fully covered.</span>
                </p>
            </div>
            <div className='flex flex-row gap-4'>
                <Image src={Support} width={70} height={70} />
                <p>
                    <h1>Great customer care</h1>
                    <span className="">Get excellent customer service available 8:00 AM to 10:00 PM, via phone, chat or email.</span>
                </p>
            </div>
            <div className='flex flex-row gap-4'>
                <Image src={Convenience} width={70} height={70} />
                <p>
                    <h1>Enjoy convenience</h1>
                    <span className="">Book anytime from the convenience of your office, home, school, or market.</span>
                </p>
            </div>
        </div>
    )
}

export default Services
