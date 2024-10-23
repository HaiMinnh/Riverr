import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFoundPage = () => {
    return (
        <div className='container error'>
            <div className='px-0 text-center' style={{ background: "" }} >
                <Image
                    src={'/images/notPage.jpg'}
                    alt='404'
                    width={1000}
                    height={500}
                    className='rounded rounded-5'
                />
            </div>
            <div className='goHome'>
                <Link href={'/'} className='btn btn-outline-success'>Go Home</Link>
            </div>
        </div>
    )
}

export default notFoundPage