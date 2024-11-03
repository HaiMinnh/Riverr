"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Popular from './(pages)/popular/page';
import Intro from './(pages)/intro/page';
import Video from './(pages)/about/page';
import Link from 'next/link';


const page = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <div className='container px-0'>
      <div className='carousel px-0 animate__animated animate__fadeInDown animate__delay-1s'>
        <Image
          src={'/images/5.png'}
          alt='logo'
          width={1320}
          height={520}
          className='rounded rounded-3'
        />
        <div className='text-search'>
          <h1>Find the perfect <i className='text-white'>
            freelance</i> <br /> services for your business</h1>
          <div className='form-group d-flex'>
            <input className="form-control" type="text" placeholder='Try "building mobile app"' onChange={(e) => {
              setKeyword(e.target.value)
            }} />
            <Link href={`/search?keyword=${keyword}`} type='submit' className='btn btn-outline-success '>Search</Link>
          </div>
          <div className='popular'>
            <h5 className='d-inline'>Popular:</h5>
            <span>Website Desigh</span>
            <span>WordPress</span>
            <span>Logo Desigh</span>
            <span>Video Editing</span>
          </div>
          <div className='app'>
            <span>Trusted by:</span>
            <ul>
              <li>
                <Image
                  src={'/images/fb.png'}
                  alt='logo'
                  width={80}
                  height={60}
                  className='img'
                />
              </li>
              <li>
                <Image
                  src={'/images/google.png'}
                  alt='logo'
                  width={80}
                  height={50}
                  className='img'
                />
              </li>
              <li>
                <Image
                  src={'/images/netflix.png'}
                  alt='logo'
                  width={80}
                  height={50}
                  className='img'
                />
              </li>
              <li>
                <Image
                  src={'/images/pg.png'}
                  alt='logo'
                  width={50}
                  height={50}
                  className='img'
                />
              </li>
              <li>
                <Image
                  src={'/images/paypal.png'}
                  alt='logo'
                  width={80}
                  height={50}
                  className='img'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Popular />
      <Intro />
      <Video />
    </div>
  )
}

export default page